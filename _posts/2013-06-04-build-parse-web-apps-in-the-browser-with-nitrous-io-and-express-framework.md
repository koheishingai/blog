---
layout: post
title: Build Parse Web Apps in the Browser with Nitrous.IO and the Express Framework
---

Today, [Parse](https://parse.com/) announced support for the [Express framework](http://expressjs.com/)
in [Cloud Code](https://www.parse.com/products/cloud_code), Parse's custom app solution.

With Parse&rsquo;s support for the Express framework, you are no longer limited
to creating single page web applications with their JavaScript SDK. This is
great news for SEO-conscious developers, because dynamic multi-page web
sites with real permalink routes are much more accessible by search
engine crawlers.

This post will demonstrate how you can set up Parse&rsquo;s command line
tool on your Nitrous.IO box and create your web application powered by
Parse&rsquo;s scalable cloud infrastructure.

### Prerequisites

Before we get started, make sure you have the following:

* A [Parse account](https://parse.com/#signup)
* A [Nitrous.IO account](https://www.nitrous.io/) (We are still in
  private beta, but do sign up and ask for an invite on
  [Twitter](https://www.twitter.com/nitrousio).)
* A [Node.js Box](http://help.nitrous.io/box-new/) on Nitrous.IO.

<!--break-->

### Creating an App on Parse

If you haven&rsquo;t already created an app on Parse, go ahead and
create one. This is pretty self-explanatory and for the rest of this
post, we will assume that the name of the app is `my-parse-app`.

### Setting Up ParseApp Subdomain

In order to host your custom app on Parse, you have to create a
unique ParseApp subdomain. You can do this by navigating to the &ldquo;
Settings&rdquo; &gt; &ldquo;Web hosting&rdquo; page for your app on Parse
dashboard.

![ParseApp Subdomain](/images/parse-subdomain.png)

### Parse Command Line Tool

To setup a Parse Project, you will have to first set up Parse&rsquo;s
command line tool. The one-line command in their documentation requires
super-user access that [Nitrous.IO](https://www.nitrous.io/) currently
does not provide, but fortunately, all [Nitrous.IO](https://www.nitrous.io/)
boxes come preinstalled with the tool, so you do not have to set it up
yourself.

### Setting up a Parse project

The next step is to create a Parse Cloud Code project. The `parse new`
command creates a Cloud Code project called my-parse-app.

    parse new my-parse-app

When prompted for email and password, enter your Parse (not Nitrous.IO)
credentials and then pick the app that you have just created on Parse.

    Creating a new project in directory /home/action/my-parse-app
    ...
    Email: myemail@gmail.com
    Password: 
    1: my-parse-app
    Select an App: 1

Then, run the following command in the newly created project directory
in order to generate a starter Express app.

    cd my-parse-app
    parse generate express

Now refresh the file tree, and you will see that a directory called
`my-parse-app` has been created, with the following directory structure:

![File Tree](/images/parse-filetree.png)

Next, you need to add the following line at the top of your `main.js`.
This ensures that the code in `app.js` is loaded.

    require('cloud/app.js');

If you use a source control like Git, it&rsquo;s probably a good point
to check these files in.

### Deploying to Parse

Now, let&rsquo;s try whether the app works. Deploy the app to Parse with
the following command:

    parse deploy

Then, open a new browser tab, and navigate to the ParseApp subdomain
that you&rsquo;ve assigned to your parse app, for example:

    http://foobar123.parseapp.com/

For the rest of the tutorial, we will refer to the URL above as ParseApp
URL.

You will see a &ldquo;Hello World!&rdquo; message. This is coming from
`public/index.html` file in your parse project directory. You can edit
the file in Nitrous.IO web IDE, and redeploy to see your changes.

![Parse App Preview](/images/parse-preview.png)

### Adding Dynamic Content

Next, navigating to `<ParseApp URL>/hello`, and you will see a different
&ldquo;Hello World&rdquo; page along with a congratulatory message. This
behavior is defined in `cloud/app.js` within your Parse project directory.

Open `cloud/app.js` in the web IDE and replace the following:

    app.get('/hello', function(req, res) {
      res.render('hello', { message: 'Congrats, you just set up your app!' });
    });

with the following:

    app.get('/hello/:name', function(req, res) {
      res.render('hello', { message: 'hello, ' + req.params.name + '!' });
    });

Then, redeploy the app to Parse:

    parse deploy

Finally, navigate to `<ParseApp URL>/hello/parse`, and you will see
&ldquo;hello, parse!&rdquo;. Try other names in the URL, for example:

* `<ParseApp URL>/hello/nitrous`
* `<ParseApp URL>/hello/express`
* `<ParseApp URL>/hello/johndoe`

and you will see that the message displayed will change accordingly.

Congratulations! You&rsquo;ve created your first Express app with dynamic
content running on Parse!

This is just the beginning. The real power is in their backend APIs, which
we did not cover in this post. The Parse SDK provides a comprehensive
set of APIs that lets you store and retrieve objects in the cloud without
having to worry about setting up, maintaining, and scaling database backend.
You can find the docs here: [https://parse.com/docs](https://parse.com/docs)

How did it go for you? If you're having trouble, you can always get in touch with us by visiting our [chatroom](https://www.nitrous.io/chat) or by [emailing us](mailto:support@nitrous.io).
