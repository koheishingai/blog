---
layout: post
title: Build Meteor apps in the browser with Action.IO and MongoLab
---

[Meteor](http://meteor.com) is the new kid on the block which lets you build web applications
very quickly and host them in double-quick time on meteor.com's servers.
Meteor comes bundled with MongoDB which it uses at it's de-facto
datastore. While the Meteor guys have done a great job with the 
installation process, developers might still be wary of polluting their
pristine local dev environments, and this is where Action.IO steps in.

###  Look Ma, No Root

Unfortunately, the Meteor installation process on Linux requires root
access (which is not available on our [free plan](https://action.io/pricing)), as well as the installation
of a MongoDB server on your machine.

This post will guide you on how you can do away with the need for root access and lets you use
a MongoDB service for free from the lovely folks at
[MongoLab](http://mongolab.com), all within the confines of your
favorite browser.

### Prerequisites

Before we get started, make sure you have the following:

* A [MongoLab account](https://mongolab.com/)
* An [Action.IO account](https://action.io) (We're still in private
  beta, but we're sending out invites at a pretty fast clip, so do sign
  up!)
* A [Node.JS Box](http://help.action.io/customer/portal/articles/802603-create-a-box) on Action.IO.

### Create a MongoDB database on MongoLab

You can refer to the [MongoDB help article](http://help.action.io/customer/portal/articles/1007291-mongodb-integration-mongolab-) for
detailed instructions on how to setup a free MongoDB database on MongoLab.

Assuming you completed the setting of environment variables in your
"~/.bash_profile" based on the instructions in the help article, you should have the variables

    MONGODB_DEVELOPMENT_HOST, MONGODB_DEVELOPMENT_PORT,
    MONGODB_DEVELOPMENT_USERNAME, MONGODB_DEVELOPMENT_PASSWORD,
    MONGODB_DEVELOPMENT_DB, MONGODB_DEVELOPMENT_URI

as part of your environment.

### Setup the MONGO_URL environment variable

Ok great, we now need to let Meteor know to use the right MongoDB
database (Meteor by default assumes that mongodb is installed locally).

Add a new environment variable called "MONGO_URL" and make it point to
the "MONGODB_DEVELOPMENT_URI" variable which we created in the previous
section.

Add the following line to your "~/.bash_profile"

    $ export MONGO_URL=${MONGODB_DEVELOPMENT_URI}

and run 

    $ source ~/.bash_profile

so that it is set immediately.

You can verify that this has been set by running

    $ echo $MONGO_URL

in your console, and this should return
"mongodb://username:password@abc.mongolab.com:1337/wordplay"

(With the values that you got when creating your own MongoDB database of
course)

### Install Meteorite

Install [meteorite](https://npmjs.org/package/meteorite) using npm

    $ npm install -g meteorite

Meteorite is a Node.JS Module which lets us upgrade to the latest version of Meteor,
and not have any root dependencies.
This will install the binary "mrt" for you, which you can then use instead
of the "meteor" command-line tool.

### Create a Sample App

We can now install one of the sample apps, let's try it with the
"wordplay" application which is quite fun.

cd into the "workspace" directory on your Action.IO box and create the
wordplay app, using this:

    $ cd ~/workspace
    $ mrt create --example wordplay

You can see your app being created, like so:

![Create Meteor App](/images/meteor-create-app.png)

### Preview your Work

Now that we have successfully created the wordplay application, now it's
your turn to actually see it work. Change directory to the wordplay app
and run mrt

    $ cd ~/workspace/wordplay
    $ mrt

If all goes well, you will see the app running on
"http://localhost:3000". 

![Preview Meteor App](/images/meteor-preview.png)

You can now view your shiny new Meteor app, by clicking on the "Preview"
menu, followed by "Port 3000". The name of my box is
ajs-meteor-app-2777, so the app will be available at
"http://ajs-meteor-app-2277.apse1.actionbox.io:3000/"

![Preview Meteor Result](/images/meteor-preview-result.png)

### Deploy to meteor.com

While this has been great, Action.IO is not a production deployment
system, you can code on Action.IO and deploy using the platforms such as 
[AppFog](http://appfog.com), [Heroku](http://heroku.com), [CloudFoundry](http://cloudfoundry.com),
or in this case [Meteor](http://meteor.com)

Deploying to meteor.com is super simple, just run 

    $ cd ~/workspace/wordplay
    $ mrt deploy ajs-wordplay.meteor.com

(Please note, you should probably change the name of your deploy target
so that it doesn't clash with mine).

And in just a matter of minutes, we have a [cute little game](http://ajs-word-play.meteor.com/) deployed on
Meteor, developed in the browser using Action.IO and MongoLab.

### Do More

So there you have it, we went from zero to a powerful production 
database-backed app, completely deployed in the browser. You can plug
and play with other MongoDB hosting providers, tweak the word-play app,
create a completely new Meteor app from scratch, and deploy to a
production system all from within the browser.

We are still in private beta but are sending out invites at the speed of
knots, so please sign up at [Action.IO](https://www.action.io).

For our regular users, How'd it go for you? If you're having trouble, you can always get in touch with us by visiting our [chatroom](https://action.io/chat) or by [emailing us](mailto:support@action.io).

