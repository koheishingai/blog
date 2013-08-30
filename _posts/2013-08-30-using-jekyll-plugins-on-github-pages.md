---
layout: post
title: Using Jekyll Plugins on Github Pages
author: greg
---

At Nitrous.IO we love [Jekyll](http://jekyllrb.com/). We use it for our blog, our [updates](http://updates.nitrous.io), and even for our [help site](http://help.nitrous.io). The best part about Jekyll is the ability to host it on [Github Pages](http://pages.github.com/).

When building the [help site](http://help.nitrous.io), we ran into a road block. We wanted to use all the bell and whistles that Jekyll supports, but Github Pages only ran Jekyll in safe mode.

Running Jekyll in safe mode means that no plugins are supported, and the only workaround would involve mutliple steps of maintaining both a `master` branch and a `gh-pages` branch in your Github repo. This sounds like a pain to do, but we decided to streamline this process to be as painless as possible.

### Creating a new Jekyll Site on Nitrous.IO

Pre-requisites:

* A [Nitrous.IO account](https://www.nitrous.io/)
* A [Ruby/Rails box](http://help.nitrous.io/box-new/)
* A [Github Account](https://github.com/)
<!--break-->
Installing Jekyll:

To install Jekyll on Github pages, you will want to create a new [Repo](https://github.com/new) with the title `blog`.

You will need to log into your Ruby/Rails box, run the following commands within `~/workspace/`:

    mkdir blog
    cd blog
    touch README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:your_username/blog.git
    git push -u origin master

Now you have a project folder with your git remote setup. Create a Jekyll project by running the following commands within `~/workspace/blog/`:

    gem install jekyll
    jekyll new .

You can already preview the blog by running the following command:

    jekyll serve

Navigate in your web IDE to `Preview > Port 4000` to see your new bog.

![Preview Port 4000](/images/preview_port_4000.png)

### Adding a Category Generator Plugin

We use a couple plugins on our support site, [jekyll-sass](https://github.com/euler0/jekyll-sass) and [generate_categories](https://github.com/recurser/jekyll-plugins). If you already have plugins installed on your Jekyll site then feel free to skip this entire section. If not then let's add the [generate_categories](https://github.com/recurser/jekyll-plugins) plugin as an example.

First you will need to create a `_plugins/` folder in your blog directory, and place [generate_categories.rb](https://raw.github.com/recurser/jekyll-plugins/master/generate_categories.rb) inside this folder like so:

![Adding Jekyll Plugin](/images/generate_categories.png)

Next, create `~/workspace/blog/_layouts/category_index.html` and include the same code seen in the [Github Repo](https://raw.github.com/recurser/jekyll-plugins/master/_layouts/category_index.html).

To see this plugin in action, cd into `~/workspace/blog/` and run `jekyll serve`. In your web IDE, navigate to `Preview > Port 4000`. 

When you see the Jekyll blog, append `/categories/jekyll/` to the end of the address bar to see the new category page.

![Jekyll Category Page](/images/jekyll_category.png)

When creating new posts in `~/workspace/blog/_posts/`, be sure to include the `categories:` property in the top of each post, as this will add the post within the appropriate subfolders. 

Looking at the header below of the sample post, it will be placed in `/categories/jekyll` as well as `/categories/update`.

    ---
    layout: post
    title:  "Welcome to Jekyll!"
    categories: jekyll update
    ---

### Preparing To Deploy

At this point you should have a fully functioning Jekyll site on Nitrous along with a plugin being used.

You will want to have two branches to manage your blog; a `master` branch for editing, and a `gh-pages` branch which will be used for Github Pages.

You will need to create a Rakefile which will generate static content for Github Pages to utilize. Create the file `~/workspace/blog/Rakefile` with the following code:

		require 'rubygems'
		require 'rake'
		require 'rdoc'
		require 'date'
		require 'yaml'
		require 'tmpdir'
		require 'jekyll'

		desc "Generate blog files"
		task :generate do
		  Jekyll::Site.new(Jekyll.configuration({
		    "source"      => ".",
		    "destination" => "_site"
		  })).process
		end


		desc "Generate and publish blog to gh-pages"
		task :publish => [:generate] do
		  Dir.mktmpdir do |tmp|
		    system "mv _site/* #{tmp}"
		    system "git checkout -b gh-pages"
		    system "rm -rf *"
		    system "mv #{tmp}/* ."
		    message = "Site updated at #{Time.now.utc}"
		    system "git add ."
		    system "git commit -am #{message.shellescape}"
		    system "git push origin gh-pages --force"
		    system "git checkout master"
		    system "echo yolo"
		  end
		end

    task :default => :publish

Since we don't want the Rakefile to be published, add the following setting to `~/workspace/blog/_config.yml`:

    exclude: ['Gemfile', 'Gemfile.lock', 'Rakefile', 'README.md']

### Publishing to Github Pages

In the beggining of this guide we setup a master branch on Github for editing, and the Rakefile we just created will be used for publishing to a new branch called `gh-pages`.

Run the following commands in `~/workspace/blog/` in order to update your master branch:

    git add .
    git commit -m "jekyll update"
    git push origin master

When you are ready to publish the site to Github Pages, run the command `rake`. This will automatically create a `gh-pages` branch with the static content necessary for Github Pages to use in safe mode.

Within 10 minutes you will see your Github Pages site at `http://username.github.io/projectname`. If you wish to use a your own domain then you will want to take a look at Github's [guide on setting up a custom domain](https://help.github.com/articles/setting-up-a-custom-domain-with-pages).

