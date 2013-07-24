## Building Google Glass apps with Nitrous.IO

--add a hipster glass pic?--

I recently got to try [Google Glasses]() thanks to our good friend, [Jeffery Paine](). My immediate reaction after trying it was - Can we build stuff for it? Turns out we can!

Google has already released a [preview API](https://developers.google.com/glass/), to create apps that can interact with Glasses. It's pretty comprehensive with wrappers to many popular languages like Java, .Net, PHP, Python and Go. The apps you develop (which will be called as glassware), can be deployed to [Google's AppEngine](https://developers.google.com/appengine).

I decided to start by trying out the [Quick Start Project Demo](https://developers.google.com/glass/quickstart/go) written in Go. It took me less than 30 minutes get it up and running. Guess what! I didn't even have to leave the browser. Yes, you can build glassware on Nitrous.

Let me share the process I followed.

I must remind you that, [Google Mirror API](https://developers.google.com/glass/devprev) is currently available only to developers who are part of the Glass Explorer program. So if you're not in it, you might want to find a friend who has access to it (well, that's what I did). Alternatively, you can try the [fake Mirror API](https://github.com/Scarygami/mirror-api) created by Gerwin Sturm.

As the first step, I created a new box in Nitrous with the Go stack. Go boxes in Nitrouss has latest [App Engine SDK for Go](https://developers.google.com/glass/quickstart/go) pre-installed. 

Then as specified in the [quick start guide](https://developers.google.com/glass/quickstart/go), I created a new application in AppEngine and a Mirror API project in [Google APIs console](https://code.google.com/apis/console/). Basically, just follow the steps specified in the guide and you should be fine.

### Build from the Browser

To setup the quickstart app, I switched to Nitrous.IO tab and opened the Web IDE of my newly provisioned Go box. Quickstart app's source code is available on GitHub. So on the console, I just ran:

    git clone https://github.com/googleglass/mirror-quickstart-go.git

After cloning the app, we will have to do a `go get` to install the required dependencies.

    $ cd ~/workspace/mirror-quickstart-go
    $ go get

Then, I opened the `config.go` file and set the client ID and secret for API access. Also, I changed the app `secret` to a random string as suggested in the guide.

--screenshot1--

Apart from the changes in `config.go`, we also need to set the application's ID in `app.yaml` before deploying the app.

### Deploy to AppEngine

Since AppEngine SDK is pre-installed on boxes, deploying the apps is pretty straightforward. All I had to do was to run the following command inside the codebase's directory:

    $ appcfg.py --oauth2 --noauth_local_webserver update .

Note the option *--noauth_local_webserver*. We need this because we're actually running the command from a remote machine. Then the deployment program will output a web URL, which we must visit to copy the verification code. This verification code is needed to complete the deployment.

Once the app is deployed, we can visit the app's URL on the browser (eg. your-app-id.appspot.com) and authorize it to manage our Glass timeline. If the app is authorized correctly, we will get a screen like this, where we can insert sample cards to our glass timeline.

--screenshot2--

### Put on the glasses and Play!

Now try positing a sample message and see if you can view it on your glasses.

Wasn't that so easy? We're excited to see the awesome glassware you're going to build on Nitrous.


