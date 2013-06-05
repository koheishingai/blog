---
layout: post
title: The Nitrous.IO Web IDE
---

We've spent much of the last few months working behind the scenes on the Nitrous.IO platform, to ensure we can provide the best performing and most stable cloud development environment. We're confident with our progress to date, and will be sending out invites to the extremely large group of requests we've received over the past few months. Over the next few weeks, we'll be writing some blog posts about the different ways you can connect to your Nitrous.IO development boxes.

The first, and most common these days amongst cloud development platforms, is the Web IDE. Most software developers know the "IDE" ([Integrated Development Environment](http://en.wikipedia.org/wiki/Integrated_development_environment)) as a software application that provides the necessary tools to develop softwawre. The Nitrous.IO Web IDE, therefore is just a web-based version of your typical IDE. The first iteration of our IDE has the necessary tools for you to develop effectively in the cloud:

* [File Browser](#file-browser)
* [File Editor](#file-editor)
* [File Uploading](#file-uploading)
* [Console](#console)
* [Previewing Application on the Web](#previewing)

Spinning up the IDE is simple. From your list of boxes, just click one of the box rows to toggle it's details, and click the IDE button at the bottom of the box information. 

![Box Details](https://raw.github.com/action-io/action-assets/master/support/screenshots/box-details.png)

### <a id="file-browser"></a> File Browser

Like most IDEs, the file browser sits at the left-hand side of the window. You'll see the box-name at the top of the file browser, followed by a directory tree of your application.

![File Browser](https://raw.github.com/action-io/action-assets/master/support/screenshots/file-browser.png)

Right-clicking any directory will allow you to "refresh" the directory to get any new files you might have added as well as make that directory the "root" directory to help clean up viewing of your files. You can also upload files to that directory directly by right-clicking and selecting "Upload Files".

![File Uploads](https://raw.github.com/action-io/action-assets/master/support/screenshots/file-uploads-1.png)

At the bottom of the file browser, you can also toggle to show or hide hidden files (e.g. .gitignore, .rvm, .nvm … )

![Show Hidden](https://raw.github.com/action-io/action-assets/master/support/screenshots/show-hidden.png)

### <a id="file-editor"></a> File Editor

To open a file, simply click the file name in the file-browser, or click the "+" icon at the top of the file editor.

Once you have a file open and would like to save it, simply hit:

    ^S
    # CNTRL + S

Or you can click the "Save" button at the top of the file editor if you prefer. When files have unsaved changes, the close button will show a small "*":

![Unsaved File](https://raw.github.com/action-io/action-assets/master/support/screenshots/file-unsaved.png)

The file editor should automatically detect the file extension sand highlight the syntax accordingly. However, if you need to set the syntax highlighting manually, simply select from the dropdown at the top of the file browser.

### <a id="file-uploads"></a> File Uploads

To upload a file, simply click the "Upload Files" button at the bottom of the file browser or right-click the folder where you'd like to upload files:

![File Uploads](https://raw.github.com/action-io/action-assets/master/support/screenshots/file-uploads-1.png)

Files have a maximum of 2MB and must be a .png, .jpg, .gif or .pdf. 

### <a id="console"></a> Console

The Nitrous.IO Web IDE also provides a full shell at the bottom of the screen. This allows you to handle your command line tasks with your code editing all in one place. You can open multiple windows to execute long-running tasks like tests, webservers, etc...

_New Console Window_

To open new console windows, simply click the "+" icon. You can open pretty much an infinite amount of console windows…if you need that many. To close the window, just click the "X" in the console's tab.

![Console Tabs](https://raw.github.com/action-io/action-assets/master/support/screenshots/console-tabs.png)

_Make the Console Full Screen_

If you want to just code in your browser using the web console (good for iPad coding), just click the "expand" icon at the right of the console header.

### <a id="previewing"></a> Previewing Applications

I'm using the Nitrous.IO Web IDE to write this blog post, using the Jekyll static site generator. Jekyll's server runs on port 4000, so I can preview my progress by selecting the "Preview" dropdown menu and clicking port 4000.

![Console Tabs](https://raw.github.com/action-io/action-assets/master/support/screenshots/preview-menu.png)

The preview opens up in a new tab with the link to your accessible web url:

![Nitrous.IO Blog](/images/web-preview.png)

### Things will improve quickly

We want to improve the way you develop software and we're here to make your lives easier. The easiest way for us to do that, is if we can talk to you directly to get your thoughts and feedback on the platform. You can get in touch with any of our team by visiting our [chatroom](https://www.nitrous.io/chat) or by [emailing us](mailto:support@nitrous.io).

### Nitrous.IO is not just a Web IDE

Nitrous.IO is a platform, not just a Web IDE. While we do provide a Web IDE for lightweight development, we understand that most developers want to code in a variety of different ways. In the next few weeks, we'll be writing about the other ways to connect and develop on your Nitrous.IO boxes, so stay tuned and [follow us on twitter](https://twitter.com/NitrousIO) for updates.

