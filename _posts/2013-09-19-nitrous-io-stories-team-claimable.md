---
layout: post
title: Nitrous.IO Stories - The Team at Claimable
author: greg
---

![The Team at Claimable](/images/team-claimable.jpg)
##### Claimable Founder & CEO, Miles Tinsley working at their London offices

### Tell me about Claimable.

[Claimable](http://claimable.com/) is a web application for insurance claims management: think of it as a Salesforce.com for claims. We’re a small team of 4 based in Shoreditch, London.

From a consumer perspective, simply purchasing an insurance policy does not actually expose you to the product that you’ve paid for. Instead, your first experience of it is when you need to make a claim. In essence, the claim is the product.

Unfortunately, at this point most people discover that the experience of making an insurance claim is often frustrating and slow. One reason, is that companies dealing with your claim are usually using outdated legacy software, or worse, an Excel spreadsheet!

[Claimable](http://claimable.com/) solves this problem by helping claims companies manage the entire claim process more efficiently, freeing them from the monotonous admin that currently bogs down their workflow. We’ve built a series of tools that you might expect from a modern web application, to help our users improve the experience for their customers.

Ultimately, we see [Claimable](http://claimable.com/) as a platform, so we built the entire application as a RESTful JSON API using Ruby on Rails, with an Ember.js based front end. Due to the variation between different claim types and idiosyncrasies of our customers, we’ve leveraged the schema-less nature of MongoDB as our primary datastore, which enables a high level of customisation despite [Claimable](http://claimable.com/) being a multi-tenanted application.
<!--break--> 
### What projects does your team use Nitrous for?

We use Nitrous to develop our primary project, which is [Claimable](http://claimable.com/) itself, along with our website and internal admin app.

[Claimable](http://claimable.com/) is built with Ruby on Rails and Ember.js. It’s a large, fairly complex application, and it needs MongoDB and Redis to run, so I was super pleased to learn about [Autoparts](/2013/09/18/introducing-autoparts-for-nitrous-io.html), the new package manager for Nitrous, which makes it very easy to install both of these!

Our website is built with [Middleman](http://middlemanapp.com) and this works nicely with Nitrous too. I can make changes, commit them, build the site and deploy it all from an iPad, which is surprisingly useful if I need to make updates while traveling.

We use Nitrous for Mac to sync local files to our boxes. This means we can continue using our favourite text editor ([Sublime Text](http://www.sublimetext.com/)). The port forwarding feature makes it feel like the app is running locally, which is really useful if you need a consistent hostname like “localhost”, especially when using multiple Nitrous boxes!

I introduced Nitrous after one of my team spilt coffee over her MacBook Air, rendering it useless for days. We had a spare Mac in the office, but it took nearly a whole day to get the development environment setup. For a small team like us, we can’t afford that kind of downtime, and using Nitrous would have reduced this delay to mere minutes! 

### How has Nitrous simplified the development process within your team?

We integrate with a lot of third party services, which sometimes require a publicly accessible URL to test properly. Nitrous gives us this for free! One example that springs to mind is [Mailgun](http://www.mailgun.com), who we use to process incoming emails. When an email is received they ping our API endpoint, which of course must be a public URL. Before Nitrous, we had to deploy to a test/staging server, but now this can simply be part of our day-to-day-development cycle, which saves a lot of time!

Also, we’ve recently been testing mobile versions of our app, in particular performing real-world tests over 3G/4G. Nitrous has made this a breeze by removing the need for a deploy after each change, because the URL is already publicly accessible.

One unsuspected benefit, is that using Nitrous has made it very easy to share the latest developments with potential customers and contacts. For example, I can demonstrate the edge version of [Claimable](http://claimable.com/), with all the latest features that might not be on the master branch, without having to setup another server!

### Which features on Nitrous.IO would you be most excited to see?

We’re pretty happy with what Nitrous currently offers and look forward to Nitrous for Business. But, it would be nice to see more integrations with popular third party services that are also important to our workflow. For example, we use [Flowdock](https://flowdock.com) for team chat and we’d love for the conversations from the Nitrous IDE to appear in our Flowdock chat room, and vice versa.

Also, for complex development environments it would be great if we could create “templates” or pre configured machine images, so we could immediately spin up a new box with everything installed and ready to go!
