---
layout: post
title: Building Google Glass Apps on Nitrous.IO
---

<div class="heroshot">
  <img src="/images/google-glass-collective.jpg"/>
  <p>image credit: <a href="betabeat.com" target="_blank">betabeat.com</a></p>
</div>


We recently got to try [Google Glass](http://www.google.com/glass/start/) thanks to our good friend, [Jeffery Paine](https://twitter.com/jpaine). Obviously, our immediate reaction after trying it was - can you build stuff for it on [Nitrous.IO](https://www.nitrous.io)?  *Spoiler Alert*: you can!  <!--break-->

Google has already released a [preview API](https://developers.google.com/glass/), to create apps that can interact with Glass. It's pretty comprehensive with wrappers to many popular languages like Java, .Net, PHP, Python and Go. The apps you develop (which are referred to as "glassware"), can be [deployed](https://developers.google.com/appengine) easily to Google's AppEngine.  


I decided to start by trying out the [Quick Start Project Demo](https://developers.google.com/glass/quickstart/go) written in Go. It took me less than 15 minutes get it up and running. And guess what! I didn't even have to leave my browser. Yes, you can build glassware on [Nitrous.IO](https://www.nitrous.io).

Here's a brief rundown on developing Google Glass Apps on Nitrous.IO:

As a reminder: the [Google Mirror API](https://developers.google.com/glass/devprev) is currently available only to developers who are part of the Glass Explorer program. So if you're not in it, you might want to find a friend who has access to it (that's what I did). Alternatively, you can try the [unofficial Mirror API](https://github.com/Scarygami/mirror-api) created by Gerwin Sturm.

As the first step, create a new box in Nitrous with the Go stack. Go boxes in Nitrouss have the latest [App Engine SDK for Go](https://developers.google.com/glass/quickstart/go) pre-installed. 

Then as specified in the [quick start guide](https://developers.google.com/glass/quickstart/go), create a new application in AppEngine and a Mirror API project in [Google APIs console](https://code.google.com/apis/console/). Follow the steps specified in the guide and you should be fine.

### Build Google Glass Apps in the Browser

To setup the quickstart app, I switched to Nitrous.IO tab and opened the Web IDE of my newly provisioned Go box. The quickstart app's source code is available on [GitHub](https://github.com/googleglass/mirror-quickstart-go). So in the console, run the following command:

    $ cd ~/workspace
    $ git clone https://github.com/googleglass/mirror-quickstart-go.git

After cloning the app, run `go get` to install the required dependencies:

    $ cd ~/workspace/mirror-quickstart-go
    $ go get

Then, open the file `config.go` and set the client ID and secret for API access. Also, change the app `secret` to a random string as suggested in the guide.

![edit config.go](/images/edit-file-on-ide.png)

Apart from the changes in `config.go`, we also need to set the application's ID in `app.yaml` before deploying the app.

### Deploying to AppEngine

Since the AppEngine SDK is pre-installed on all Go boxes on Nitrous.IO, deploying applications to AppEngine is a breeze. All you have to do is run the following command inside the codebase's directory:

    $ cd ~/workspace/mirror-quickstart-go
    $ appcfg.py --oauth2 --noauth_local_webserver update .

Take note of the option *--noauth_local_webserver*. We need this because we're actually running the command from a remote machine. Then the deployment program will output a web URL, which we must visit to copy the verification code. This verification code is needed to complete the deployment.

Once the app is deployed, you can visit the application's URL on the browser (eg. your-app-id.appspot.com) and authorize it to manage our Glass timeline. If the app is authorized correctly, we will get a screen like this, where we can insert sample cards to our Glass timeline.

![screenshot of deployed quickstart app](/images/quickstart-app-preview.png)

### Put on your Google Glass and Play!

Now try positing a sample message and see if you can view it on your glasses!

Wasn't that easy? We're excited to see the awesome glassware you build on Nitrous.IO.

Follow us on [Twitter](https://twitter.com/nitrousio) and subscribe to our [blog](http://blog.nitrous.io) to read more stories on building cool apps!

