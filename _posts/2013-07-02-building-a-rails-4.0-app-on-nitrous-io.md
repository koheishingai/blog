---
layout: post
title: Building a Rails 4.0 App on Nitrous.IO
---

Rails 4.0 incorporates many new features on top of an already very powerful framework. Today we'll take a look at __Strong Parameters__ and __Turbolinks__. This post closely follows the [rubyonrails.org guide](http://edgeguides.rubyonrails.org/getting_started.html), so take a look at their guide if you need an in-depth explanation. Today's post focuses on building an application on [Nitrous.IO](http://nitrous.io) using some of the new Rails 4.0 features.

### Prerequisites

* A [Nitrous.IO account](https://nitrous.io)
* A [Box](http://help.action.io/customer/portal/articles/802603-create-a-box) on Nitrous.IO. The Ruby box template will include ruby 2.0 and Rails 4.
* A database.  All boxes ship with SQLite pre-installed, but you can use Postgres by following this [post about setting up Heroku Postgres](http://blog.nitrous.io/2013/02/11/postgres-action-io-3.html#database) if you prefer.

### Creating an application on your Nitrous.IO box

First we'll create a simple blog application. This creates an app that connects to SQLite. If you'd like to use [PostgreSQL](http://help.nitrous.io/postgres) instead, append '-d postgresql' to the following command.

    $ rails new blog

Now, let's switch to the blog directory to continue working on the app:

    $ cd blog

### Create a Development Database

We'll want to create a development database to use in our application.  If you'd like to use Heroku Postgres, you can follow [this guide](http://help.nitrous.io/postgres/).  Postgres is slightly more complicated to setup than SQLite, but has some more powerful features.

If you're following this [blog post](http://blog.nitrous.io/2013/02/11/postgres-action-io-3.html#Create a Development Database on Heroku Postgres), you can stop after you have configured your database.yml file and come back to this guide.

### Create Controllers and Routes

Ok now that we have our database setup and configured the connection settings in config/database.yml, we can test out the app to ensure it is running. You can run a rails server with the following command:

    $ rails server

Once the app is running, you can view it by navigating to Preview > Port 3000 in the Nitrous.IO IDE. Ctrl + C will stop your server if pressed in the terminal.

Now we're ready to create a controller:

    $ rails generate controller welcome index

This will create the welcome controller with an index action defined. Next lets edit app/views/welcome/index.html.erb, and delete all of the code and replace it with the following:

    <h1>Hello, Rails!</h1>
    <%= link_to "My Blog", controller: "posts" %>

Let's setup the route to the homepage, and add the posts resource. Open the file config/routes.rb and replace the text with the following:

    Blog::Application.routes.draw do
      resources :posts
      root "welcome#index"
    end

At this point, we can test the index page by running 'rails server' in your console, and in your IDE menu bar navigating to Preview > Port 3000. The "My Blog" link isn't configured at this point, but we will set this up in the following steps.

Next, create a controller called PostsController with the following command:

    $ rails g controller posts

This builds a post controller, but we will need to include a template for our app. Right click the app/views/posts folder in the directory tree and create the file app/views/posts/new.html.erb and insert the following:

    <%= form_for :post, url: posts_path do |f| %>
        <p>
          <%= f.label :title %><br>
          <%= f.text_field :title %>
        </p>

        <p>
          <%= f.label :text %><br>
          <%= f.text_area :text %>
        </p>

        <p>
          <%= f.submit %>
          </p>
    <% end %>
    <%= link_to 'Back', posts_path %>

### Creating the Post Model with Strong Parameters

To create a new post model, run this command in your terminal:

    $ rails generate model Post title:string text:text

This will setup a migration file which you can now run the rake command to initiate:

    $ rake db:migrate

If you're using SQLite, you shouldn't have any issues with this command.  If you have any issues with Postgres, make sure that you've setup your Heroku Postgres instance and have [your environment variables setup correctly](http://help.nitrous.io/postgres/).

Now lets check out the new [Strong Parameters](http://weblog.rubyonrails.org/2012/3/21/strong-parameters/) feature of Rails 4 by including a private method in the posts controller. This will prevent an attacker from setting the model's attributes by manipulating the hash passed to the model.

Edit the file app/controllers/posts_controller.rb to contain the following code:

    class PostsController < ApplicationController
      def new
      end

      def show
        @post = Post.find(params[:id])
      end

      def index
        @posts = Post.all
      end

      def create
      @post = Post.new(post_params)

      @post.save
      redirect_to @post

      private
      def post_params
        params.require(:post).permit(:title, :text)
      end
    end

Notice how the Strong Parameters feature includes permit in the post_params method. This allows the app to accept both title and text when making a post.

Now create the file app/views/posts/show.html.erb with the following code. Again you'll need to right-click the app/views/posts folder and select "New File" from the menu.

    <p>
      <strong>Title:</strong>
      <%= @post.title %>
    </p>

    <p>
      <strong>Text:</strong>
      <%= @post.text %>
    </p>
    <%= link_to 'Back', posts_path %>

Lets also create a view so we can view all of the posts. Create the file app/views/posts/index.html.erb with the following text:

    <h1>Listing posts</h1>

    <%= link_to 'New post', new_post_path %>
    <table>
      <tr>
        <th>Title</th>
        <th>Text</th>
      </tr>

      <% @posts.each do |post| %>
        <tr>
          <td><%= post.title %></td>
          <td><%= post.text %></td>
        </tr>
      <% end %>
    </table>

You should now be able to create a new post. In the console, make sure you still have a server running in your project folder and go back to your preview tab in the browser. Now when you click on the 'My Blog' link, you should be taken to a Listing posts page which looks like the following:

![rails app new post](/images/rails-app-new-post.png)

### Using Turbolinks in Your App

Turbolinks is a somewhat controversial feature added in Rails 4 designed to make app navigation faster in the browser. Turbolinks keeps an instance of the currently loaded page up and running, and only replaces the page body and title in the head without reloading all the site's assets.

The feauture is enabled by default in Rails 4, which you can verify by ensuring the following line is included in your Gemfile:

    gem 'turbolinks'

You will also want to ensure /app/assets/javascripts/application.js contains the following line:

    //= require turbolinks

The Turbolinks feature only runs on the latest browsers, so if you are using an older browser than this feature will be automatically disabled. In this example we are going to be using [Chrome Developer Tools](https://developers.google.com/chrome-developer-tools/) to evaluate network performance.

Make sure your app is running in the console (or type 'rails server'), and then preview the app by navigating in the [Nitrous.IO](https://www.nitrous.io) IDE to Preview > Port 3000. From this page click the "My App" link to navigate to the posts controller. Notice in the screenshot how the pages are handled by the initiator turbolinks.js.

![turbolinks example](/images/turbolinks.png)

Since our application is incredibly basic, we're not going to see the benefits of Turbolinks.  However, if you have lots of images, javascript and large stylesheets, you can see upwards of a [2x speed increase](https://github.com/steveklabnik/turbolinks_test/tree/all_the_assets) from using Turbolinks.

We hope this was a good introduction to some of the new features in Rails 4.  Sign in to [Nitrous.IO](https://www.nitrous.io) and start coding!

If you're having any issues getting your app running, you can get in touch with us by visiting our [chatroom](https://nitrous.io/chat) or by [sending us an email](mailto:help@nitrous.io).
