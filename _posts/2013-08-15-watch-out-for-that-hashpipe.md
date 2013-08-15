---
layout: post
title: "Watch out for that Hashpipe"
author: greg
---

![Hashpipe IDE](/images/hashpipe-ide.png)

A few days ago one of our users contacted us via chat. For the sake of this story let’s call him “John”.

>John: “I can’t open any files using the Web IDE.”

Since the Nitrous.IO Web IDE requires that files be formatted as UTF-8, I asked John how he created his project.

>John: “It’s a ruby on rails application. I created it on the Nitrous.IO box using `rails new`.”

I wasn’t entirely sure what was going on, so I asked if I could log into his Nitrous.IO box. John agreed, and gave me access to his Rails project.

One thing that stood out to me immediately was that the project was entitled “Hashpipe”. I laughed a bit, but didn’t think anything of it.
<!--break-->
I browsed the list of files, and decided to check out his `routes.rb` file to get a feel for the app. Maybe there was something there that would give me a clue.

![Hashpipe Error](/images/hashpipe-error.png)

This wasn’t entirely unexpected, as I suspected an encoding issue. So I ran the `file` command on the routes file to see what type of file I’m working with.

>action@ruby-on-rails-12211:~/workspace/hashpipe/config$ file -b routes.rb
CLIPPER instruction trace

Wait, what? This isn’t an `ASCII text` file? When I open the file using VIM, I see the file just fine. I decided to look at the `file` command in a bit more depth to see if it would help:

File tests each argument in an attempt to classify it. There are three sets of tests, performed in this order: filesystem tests, magic tests, and language tests. The first test that succeeds causes the file type to be printed.

Ok, so I was pretty sure the filesystem tests weren’t returning anything on the `routes.rb` file. Which brings me to magic tests. I wasn’t quite sure about these, so I read further:

>Magic tests are used to check for files with data in particular fixed formats. These files have a `magic number’ stored in a particular place near the beginning of the file that tells the UNIX operating system that the file is a binary executable, and which of several types thereof.
A magic number is a number embedded at or near the beginning of a file that indicates its file format (i.e., the type of file it is). It is also sometimes referred to as a file signature.

This was interesting. Was it possible the beginning of `routes.rb` was telling linux it was a magic file? I looked back at the first line for clues:

>Hashpipe::Application.routes.draw do

Any file with some invariant identifier at a small fixed offset into the file can usually be described in this way.

“Hash”? That didn’t ring any bells, and wasn’t offset from the beginning of the file.

What about “pipe”? We all know “pipe” is a standard linux command to allow data communication between different processes.

I began googling magic files for more information and found this post about what types of items can be included in a linux system. So I searched for “pipe” and eventually came across this:

>4 string pipe CLIPPER instruction trace

This magic match basically says that anytime a file starts with any 4 char string, then the string “pipe”, that the file should be identified as a “CLIPPER instruction trace”. It’s not difficult to realize that “Hashpipe” fits this definition!

So in the case of our `routes.rb` file, Linux determines that the file no longer uses UTF-8 and instead uses CLIPPER instruction trace encoding. And the file fails to open in the Nitrous.IO web IDE. Mystery solved.

After finding the root of the issue, I gave John (the developer) two options: rename his `hashpipe` project, or use vim to edit his project files. He chose the latter. So Hashpipe lives on, and although we have no idea what the application actually does, we know that Linux is waiting in the shadows, choking every time the Hashpipe application name appears at the beginning of a file.