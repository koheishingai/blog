---
layout: post
title: Nitrous.IO Stories - Ryan Smith of Wilson & Smith
---

<img src="https://secure-b.vimeocdn.com/ts/440/494/440494145_1280.jpg" alt="ryan smith" />

### Who are you and what do you do?

My name is Ryan Smith, my online alias is [@ryandotsmith](https://twitter.com/ryandotsmith). My background is in Mathematics. For the last few years I have been building infrastructure at [Heroku](http://heroku.com). I have worked on queueing infrastructure, billing, DNS, log delivery, system metrics, customer performance problems. I had the opportunity to work on the entire stack. A few weeks ago I left Heroku to start a productionization consultation company with my good friend Bobby Wilson. Our company name is [Wilson & Smith](http://wilsonandsmith.com) and we specialize in helping growing business scale their team and software operations.

### What hardware do you use?

I use a Macbook Pro. OSX is nice, but I run 0 production systems on OSX, thus I spend a lot of time working on Linux and UNIX variants running on cloud computers. I also spend a lot of time tinkering and researching the Plan9 OS.

### What do you code on Nitrous.IO?

I write a lot of software on Nitrous.IO boxes. For instance, one of my recent open source projects, [l2met](http://github.com/ryandotsmith/l2met), has been developed on Nitrous.IO. L2met is a logs to metrics program written in Go. L2met is depended upon by companies like Heroku & Librato. I also have used Nitrous.IO to work on [queue_classic](http://github.com/ryandotsmith/queue_classic), an open source ruby queueing library. Lastly I have spet a lot of time on Nitrous.IO working on my experimental database server [SFDB](https://github.com/ryandotsmith/sfdb). SFDB is written in C and is designed to run in Linux.

### What aspects of Nitrous.IO do you love the most?

I love the vision. It has been prophesied by the forefathers of UNIX that a day would come in which our computers would simply be a peice of glass connected to some computer on the network and Nitrous.io is making this dream a reality. \[[1](http://www.youtube.com/watch?v=dsMKJKTOte0&feature=youtu.be&t=58m12s)\] \[[2](http://rob.pike.usesthis.com/)\]

Practically speaking, the feature that captivates my attention is that I have easy SSH access to a Linux machine that someone else is maintaining. Among all of my responsibilities, personal system administration is something that I am keen on delegating. If I never have to worry about keeping a machine online and its state secured, then I will be winning.

### What’s your dream dev environment setup?

I primarily use my computer for work. I am practically a luddite if I am not working on building software for research or business.

I do all of my work in [Trello](http://trello.com), [GitHub](http://github.com), Gmail, and my terminal. I really like these interfaces. The last tool in my list (terminal) is the only non-cloud service. It requires that I have files on a piece of metal underneath my keyboard. This is troublesome for a variety of reasons:

* It is not automatically reproducible. Computers fail, if there isn't a program to bring my terminal up to date, it is broken.
* It is not easily sharable. I would like to share the files (remember, everything is a file. binaries, databases, etc...) with other computers. This means with my production servers and my friends and colleagues.
* Dev/prod parity. Developing on OSX and deploying on Linux is not ideal. The kernels are quite different and the system calls which expose the kernel are certainly different. This is insane.

Basically, I would love for you to guys to make a clone of my terminal that connects to Nitrous.io instead of my local machine. I want all of the great UX that I get from UNIX and the terminal on my Mac but on the backend it must be connected to a cloud computer.


