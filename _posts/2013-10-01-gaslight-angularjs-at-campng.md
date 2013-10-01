---
layout: post
title: Using Nitrous.IO at Gaslight's CampNG
author: chris_gaslight	
---

![Chris Nelson with Gaslight](/images/chris_nelson.jpg)

*This is a guest post by [Chris Nelson](https://twitter.com/superchris), whom is a not so secret developer and founding partner at [Gaslight](http://gaslight.co/) in Cincinnati, OH*

Last Friday we had our first [CampNG](http://gaslight.co/training) here at our training center just across the parking lot from the Gaslight office. We couldn't have asked for a better turnout: we sold out more than a week ahead of the class, and that was with not a lot of promotion effort on our part. This speaks to just how much momentum Angular has going for it. Hopefully by the end of the class everyone had a good idea why this momentum exists!

We started off the class with a few jsbin examples. We like to get people coding right away, and had folks creating an angular app within minutes. This is one of the things we love about Angular: how quickly it lets you get going building an app. Unfortunately, partway through the class jsbin just quit loading gists altogether. We managed to hack around it and get through.

Fortunately, the next part of the class we used a tool that I've come to really love: Nitrous.IO. Nitrous.IO is a web-based IDE combined with a hosted VM instance. It's a server and development environment rolled into one, hosted in the cloud, and accessibly through a web browser. For us, it's completely removed one of the most painful aspects of teaching workshops: getting whatever we're teaching installed and running on everyone's machines.
<!--break-->
Before [CampNG](http://gaslight.co/training), we taught several classes in Backbone.js. These were 2-3 day classes building an app, and we used rails as our backend. The first instance of the class we lucked out and everyone had macs and had things installed and ready to go. Subsequent classes were not so lucky and we lost quite a lot of time scratching our heads figuring out why some particular bit wouldn't run on a given students machines. Being in a full classroom helping one student with a configuration issue while the rest of the class waits is not a pleasant experience, to say the least! With later classes, we used virtualbox and vagrant to try to get a common environment for everyone, but even here we had random terrible performance issues to deal with.
<p>
	<img src="/images/camp-ng.jpg" alt="CampNG" width="712" style="width:712px;float:left;margin:10px 0 20px 0;"/>
</p>
Enter Nitrous.IO. To be honest, I'm not sure how I first heard about it, but I believe the first time we used it in anger was for a class we did on Saturday mornings here in our office, the Cincy Web Tech Study Group. We took students through an online course in web development with Ruby on Rails from Stanford. Many of the students had no programming experience at all, and we offered Nitrous.IO as an option for students that didn't want to mess around with installing Ruby initially. It worked out really well, and several of the students continued using Nitrous.IO for the rest of the course.

The next time using Nitrous.IO was even better. We did a 2-hour workshop as part of a STEM camp for middle schoolers at Chaminade Julienne High School in Dayton, OH. We had 15 7th graders build a wish list app in rails in under two hours. And being able to tell the kids "Write down the URL in your browser bar and you can go home and show your parents what you built" was really fantastic. Imagine if we had had to come in and install Ruby on every machine in the lab first! I doubt we would have gotten anything else done at all.

Back to our experience with [CampNG](http://gaslight.co/training): we had our students use node.js Nitrous.IO boxes to do the labs. We weren't doing much with node.js really, but since the angular seed project ships with a node.js server script it was the easiest option. We package our our labs as git repos with tags at the beginning and end of each lab. This lets everyone quickly jump to the right point if they get stuck or just decide to bail on a given lab. We used git from the command prompt in the console, and didn't actually need to do any more git than clone and checkout -f.

I feel like using a tool like Nitrous is absolutely a no-brainer for teaching web development workshops. There's a few features I'd like to see to make things even easier: being able to preinstall things and make a customized box template would be handy. And being able to add menu options to run things on the command line would be awesome as well. But even without these features, Nitrous is still a solid option. I plan on using it for the next iteration of [CampNG in Chicago on October 18th](http://gaslight.co/training/courses/2).