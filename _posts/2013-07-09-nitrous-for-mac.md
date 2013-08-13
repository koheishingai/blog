---
layout: post
title: "Edit Code on your Mac, Run it in the Cloud"
author: aj
---

![Mac dropdown](/images/mac-tour-menu@2x.png)

We've received tons of amazing feedback from our users since launching the public beta of the [Nitrous.IO development platform](https://www.nitrous.io).

One request that we heard a lot, is that many developers still want to code using their favorite Mac text editor like [SublimeText](http://www.sublimetext.com/), [Textmate](http://macromates.com/) and [BBEdit](http://www.barebones.com/products/bbedit/index.html).  So we built [Nitrous.IO for Mac](https://www.nitrous.io/mac) to give them a way to setup development environments quickly and easily on Nitrous.IO, while still being able to use their favorite Mac editor.

<!--break-->

<div class="well">
  <iframe width="640" height="360" src="//www.youtube.com/embed/NWLM7iHLmpo" frameborder="0" allowfullscreen></iframe>
</div>

<a href="https://www.nitrous.io/mac" class="btn btn-success">Download Nitrous.IO for Mac</a>

Just like [Dropbox](https://www.dropbox.com/), Nitrous.IO sits in your menubar and provides helpful shortcuts and management utilities.

Today we're going to show you some of the benefits of using [Nitrous.IO for Mac](https://www.nitrous.io) as we build a simple blog application using [Python](http://www.python.org/) and [Flask](http://flask.pocoo.org/). We'll customize our blog using SublimeText and will preview our python application running in the cloud on Nitrous.IO.  Let's get started!

### The Menu Bar

First, we'll click the Nitrous.IO menubar and will look for the box we're want to work on. I'm going to choose my Python US West box and open up a shell to that machine. You'll see you also have the option to open up the Web IDE, but today we want to show off working entirely on your Mac.

![Mac menu](/images/mac-menu.png)

In this submenu you'll also find the settings for port forwarding and file sync for this box. We'll show off these features in a few minutes.

So let's go ahead and click "Open Shell". And with one simple click we're SSH'ed into our box in the cloud.

![Mac Console](/images/mac-console.png)

Now that the IDE is open and we're SSH'ed in our box, let's change directories into our `workspace` folder. Everything in this folder will sync to our Mac's filesystem so we can edit the files locally using SublimeText.

    $cd workspace

### Setting up a Python blog application

For today's demo, we're going to clone and customize a blog application written in python using the flask framework. The application is called "Simple". You can find the source code for [Simple on github](https://github.com/orf/simple).

Simple has some basic dependencies that we'll setup on our Nitrous.IO box in a few seconds. Here's a screenshot of what the blog's homepage will look like once we have it setup.

![Mac open shell](/images/mac-simple-screenshot.png)

Let's go ahead and clone "Simple" to get started:

    $ git clone https://github.com/orf/simple.git

Python boxes on Nitrous.IO come with [virtualenv](http://www.virtualenv.org/en/latest/) already installed. Let's create a new python virtual environment inside of our simple blog application.

    $ cd simple
    $ virtualenv venv --distribute

When you want to work on a project, you just need to source the environment to activate it:

    $ source venv/bin/activate

You should now be using your new virtual environment. You'll notice the prompt of your shell has changed to show the active environment. Now let's install flask and a few dependencies in our new virtual environment:

    $ pip install flask markdown sqlalchemy flask-sqlalchemy

So now we've got a clean Flask environment setup. Simple comes with a simple setup script we can run to define some basic settings:

    $ python create_config.py

Just pick some sensible defaults here. Maybe you want to add a title, tagline, or some contact information to the side navigation. Now that the blog is setup, we can spin up the application to see it in action.  We'll run the python app, and will see that our application is successfully running on our python box on port 5000.

    $ python simple.py

### Port Forwarding

One of the magic things the Nitrous.IO Mac application sets up for you is port forwarding to your Nitrous.IO box running in the cloud.  Now that we've got our simple python application running on port 5000, we can setup port forwarding so we can view it easily in our browser.

In the Nitrous.IO menu, click `Preferences`, then select the `Port Forwarding` Window. Since our python app is running on port 5000 on Nitrous.IO, we'll just setup a simple mapping to port 5000 on localhost.  Make sure you've picked the right box in the menu on the left.

![Mac Port Forwarding](/images/mac-port-forwarding.png)

If we've done that correctly, we can open up a chrome window, and type in `localhost:5000` and we should the index page of our blog application:

![Mac blog homepage](/images/mac-index.png)

Ok great, now we're getting to the sexy part.

### The Nitrous.IO Folder

The foundation of Nitrous.IO for Mac is a magic folder that resides in the home directory on your Mac.  So let's open our home folder so we can see it. Just like Dropbox, Nitrous.IO adds a special folder that syncs files with your boxes in the cloud.

![Mac blog homepage](/images/mac-tour-folder@2x.png)

Within the Nitrous.IO folder, you'll see sub folders for each of your boxes on Nitrous.IO. You might have folders for Python, Ruby, NodeJS, or Go projects in here.  I usually name my boxes by language and region, but you might name them differently.

It's important to realize our application's files are all on my mac and that they're synced with the filesystem on my python box running on Nitrous.IO in the cloud. So we can open files here and edit them with SublimeText or any other Mac editor.

Let's play around with some simple CSS just to show how easy it is. We'll open the layout.css file and change the background of the blog to blue, just so the change stands out.

![Mac Sublime Text](/images/mac-st2.png)

Then we'll save that chance, and we'll go back to our browser with the tab to `localhost:5000` and refresh:

![Mac blue homepage](/images/mac-blue-index.png)

… And as you can see, the background color changes.

What's happening here, is that [Nitrous.IO for Mac](https://www.nitrous.io/mac) is taking the changes we made to our css file in SublimeText, and it is instantaneously updating the files on our python box in the cloud. Then, our port forwarding is allowing us to preview the http server running our python app in the cloud by simply typing `localhost:5000` into our browser.

It's important to remember there's no python environment running on my mac. All of our python files and all packages are running in the cloud on Nitrous.IO, so there wasn't any development environment setup on my part. This is really amazing stuff, you can setup a box easily in the cloud on Nitrous.IO and then edit just the code on your Mac using SublimeText or your favorite editor.

You can download the Nitrous.IO for Mac application today by visiting [www.nitrous.io/mac](https://www.nitrous.io/mac).

<a href="https://www.nitrous.io/mac" class="btn success">Download Nitrous.IO for Mac</a>

