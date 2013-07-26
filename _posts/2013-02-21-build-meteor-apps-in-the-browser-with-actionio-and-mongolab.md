---
layout: post
title: Build Meteor apps in the browser with Nitrous.IO and MongoLab
---

[Meteor](http://meteor.com) is the new kid on the block that lets you quickly build web applications and host them effortlessly on meteor's servers. Meteor comes bundled with MongoDB which it uses at it's de-facto datastore. While the Meteor guys have done a great job with the installation process, developers might still be wary of polluting their local dev environments with another platform. This is where Nitrous.IO can help.

###  Look Ma, No Root

Unfortunately, the default Meteor installation process on Linux requires root access (not available on our [free plan](https://www.nitrous.io/pricing)), as well as the installation of a MongoDB server on your machine.<!--break-->

This post will demonstrate how to setup meteor without root access and how to setup a free MongoDB instance from the great [MongoLab](http://mongolab.com) service, all from your favorite internet browser.

### Prerequisites

Before we get started, make sure you have the following:

* A [Nitrous.IO account](https://www.nitrous.io/) (We're still in private
  beta, but we're sending out invites at a pretty fast clip, so do sign
  up!)
* A [Node.js Box](http://help.nitrous.io/box-new/) on Nitrous.IO.
* A [MongoLab account](https://mongolab.com/)

### Create MongoDB database on MongoLab

You can refer to the [MongoDB help article](http://help.nitrous.io/mongodb/) for detailed instructions on how to setup a free MongoDB database on MongoLab.

Assuming you set up environment variables correctly in your **~/.bash_profile**  (see the above article), you should have the following environment variables set:

    MONGODB_DEVELOPMENT_HOST, MONGODB_DEVELOPMENT_PORT,
    MONGODB_DEVELOPMENT_USERNAME, MONGODB_DEVELOPMENT_PASSWORD,
    MONGODB_DEVELOPMENT_DB, MONGODB_DEVELOPMENT_URI

### Setup MONGO_URL environment variable

Now we need to let Meteor know to use the correct remote MongoDB database (By default, Meteor assumes mongodb is installed locally).

Add a new environment variable called **MONGO_URL** and make it point to the **MONGODB_DEVELOPMENT_URI** variable we created in the previous section.

Add the following line to your **~/.bash_profile**

    $ export MONGO_URL=${MONGODB_DEVELOPMENT_URI}

and run the following command so it's set immediately:

    $ source ~/.bash_profile

You can verify the environment variable has been set by running:

    $ echo $MONGO_URL

in your console. It should return **mongodb://username:password@abc.mongolab.com:1337/wordplay**

(With the values from your own MongoDB database, of course.)

### Install Meteor

Since the default Meteor installation script requires root access, we will have to manually download and set it up.

In the console, run the following commands:

    $ cd ~/workspace
    $ git clone git://github.com/meteor/meteor.git

After cloning the repo, we shall create an alias to the `meteor` executable script available in it. Open the `~/.bash_profile` again and add this line:

    alias meteor=~/workspace/meteor/meteor

and run the following command so it's set immediately:

    $ source ~/.bash_profile

Running `meteor` for the first time after you install it will cause it
to install a bunch of dependencies.

Now try running `meteor --help`. If you did the above steps correctly you should see available meteor commands.

### Create a Sample App

We can now install one of the sample apps, let's try it with the "wordplay" application which is quite fun. Change directories into the "workspace" directory on your Nitrous.IO box and create the wordplay app, using the following commands:

    $ cd ~/workspace
    $ meteor create --example wordplay

You'll see your app being created:

![Create Meteor App](/images/meteor-create-app.png)

### Preview your Work

Now that we have successfully created the wordplay application, it's your turn to see it work. Change directory to the wordplay app and run mrt:

    $ cd ~/workspace/wordplay
    $ meteor

If all goes well, you will see the app running on **http://localhost:3000**.

![Preview Meteor App](/images/meteor-preview.png)

You can now view your shiny new Meteor app, by clicking on the "Preview" menu, followed by "Port 3000". The name of my box is ajs-meteor-app-2777, so the app will be available at **http://ajs-meteor-app-2277.apse1.actionbox.io:3000/**

![Preview Meteor Result](/images/meteor-preview-result.png)

### Deploy to Meteor.com

<p class="note">Nitrous.IO is not a production deployment system. We recommend you code on Nitrous.IO and deploy using the platforms such as <a href="http://appfog.com">AppFog</a>, <a href="http://heroku.com">Heroku</a>, <a href ="http://cloudfoundry.com">CloudFoundry</a>, or <a href="http://meteor.com">Meteor</a>.</p>

Deploying to meteor.com is incredibly simple, just run:

    $ cd ~/workspace/wordplay
    $ meteor deploy ajs-wordplay.meteor.com

<p class="alert">Change the name of your deploy target so that it doesn't clash with ours!</p>

In a matter of minutes, we've created and deployed a [great little game](http://ajs-word-play.meteor.com/) on Meteor, developed in the browser using [Nitrous.IO](https://www.nitrous.io/) and MongoLab.

### Your Turn!

You can experiment on your own using different [MongoDB hosting providers](https://www.mongohq.com/home), or by tweaking the word-play app. If you're more adventurous, try creating a completely new Meteor app from scratch on Nitrous.IO and deploy it to Meteor.

We're still in private beta but are giving out invites as quickly as we can, so sign up at [Nitrous.IO](https://www.nitrous.io/) and we'll hook you up soon.

For our regular users: How'd it go for you? If you're having trouble, you can always get in touch with us by visiting our [chatroom](https://www.nitrous.io/chat) or by [emailing us](mailto:support@nitrous.io).
