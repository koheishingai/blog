---
layout: post
title: Introducing Autoparts for Nitrous.IO - Run MySQL, PostgreSQL, MongoDB, Redis, and more
author: pete
---

![Formula 1](/images/autoparts-cover.jpg)

Today we're announcing a new way for you to add powerful services
to the applications that you are developing on Nitrous.IO boxes.

Autoparts is an open-source package manager built
specifically for Nitrous.IO boxes.  Our command line client allows you
to install software packages like MySQL, PostgreSQL, MongoDB, Redis, and
more through our command line interface. Autoparts also provides
an easy way for you to start and stop the services that you have
installed.

<!--break-->

### Installation

Autoparts comes pre-installed on all new boxes created starting from
today.  You can also install Autoparts on existing
["Bran"](http://help.nitrous.io/upgrade-box/) version of boxes or
newer.  Although it is possible to install Autoparts on the older "Arya"
version of boxes, it is not officially supported, and certain packages
(e.g. MongoDB) may not work correctly.

To check whether Autoparts is installed on your "Bran" box, simply enter
`parts` in your command line (console).  If it is installed you will see
a help message showing the usage, and an error message otherwise.

![Bran
Box](https://raw.github.com/action-io/action-assets/a7d29cbd686f2269ac930c01a8928accd19a0b89/support/screenshots/bran-box.png)

To install Autoparts on "bran" boxes that did not come with Autoparts
pre-installed, do the following:

Download and install Autoparts:

    $ ruby -e "$(curl -fsSL https://raw.github.com/action-io/autoparts/master/setup.rb)"

Reload shell:

    $ exec $SHELL -l

Check that Autoparts is correctly installed:

    $ parts

![Autoparts Installation](/images/autoparts-install.png)

### Usage

Autoparts is a command line utility, and can be run via the console in our [Web IDE](http://help.nitrous.io/categories/web-ide/) or via [SSH](http://help.nitrous.io/categories/ssh/). Running `parts help` will give you a concise list of commands that you can run.

Firstly, run the `update` command to ensure that you are running the latest version of Autoparts.  Updates typically include new package definitions, feature improvements, and bug fixes.

    $ parts update

To see the list of all packages available, use the `search` command:

    $ parts search

![parts search](/images/autoparts-parts-search.png)

You can also use the command to search for a particular keyword.

Installing a package is just as easy. For example, to install MySQL, use the `install` command:

    $ parts install mysql

Once MySQL is successfully installed, you can start the MySQL service by issuing the `start` command:

    $ parts start mysql

To see the list of services that are currently running on your machine through Autoparts, use the `status` command:

    $ parts status

![parts status](/images/autoparts-parts-start-status.png)

You can check that mysql is up and running by running `mysql` command line utility.

![mysql](/images/autoparts-mysql.png)

## Open-Source

Autoparts is built for the community of developers who build applications on Nitrous.IO.  Anyone can write their own package definition and submit it to be included in the official repository. If you'd like to see a new language, database, or other package included, please refer to [Autoparts Github page](https://github.com/action-io/autoparts).
