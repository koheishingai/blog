---
layout: post
title: Postgres + Action.IO = &lt;3
---

PostgreSQL is one of the most popular databases for developers these days. Postgres is known for its stability, extensibility, and phenomenal spatial computation, amongst other things. Many of you probably switched to Postgres when you deployed your first app to [Heroku](http://heroku.com).

Today, we&rquo;ll be setting up a Postgres development database using [Heroku Postgres](https://postgres.heroku.com) for a sample Rails 3 application running on [Nitrous.IO](https://www.nitrous.io/).

###  Postgres as a Service

The usage of a database-in-the-cloud might be a new concept to you. Even if it's not, this might be the first time you're setting up a development database in the cloud. You'll find that it's considerably easier to setup and manage than on your own machine.

In a true cloud development environment, we follow the 12Factor.net convention of treating [Backing Services](http://12factor.net/backing-services) such as databases as attached resources. This makes our application more resilient, by allowing us to easily switch database services without changes to the code. We only need to update the resource handle in our application config.

### Prerequisites

Setting up your Nitrous.IO box to use a Heroku Postgres database is easy. Before we get started, make sure you have the following:

* A [Heroku Postgres account](https://postgres.heroku.com/)
* An [Nitrous.IO account](https://www.nitrous.io/)
* A [Box](http://help.nitrous.io/box-new/) on Nitrous.IO.

### Create an Application on your Nitrous.IO Box

In: [Nitrous.IO](https://www.nitrous.io/)

Postgres isn't installed on our Rails box, but it doesn't need to be. Let's go ahead and create a sample todo application. Navigate into your workspace:

    action@your-box:~/workspace$ rails new todo-app -d postgresql

The "-d" flag tells Bundler to install the pg gem by default. If you look at *config/database.yml* in your new application, you'll find that it's configured to use postgresql. Normally, Rails will use SQLite by default, which is sufficient for most simple applications and is supported by Nitrous.IO out of the box.

### Create a Development Database on Heroku Postgres

In: [Heroku Postgres](https://postgres.heroku.com)

![Heroku Postgres Homepage](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/hpgres.png)

Go ahead and sign into Heroku Postgres. Once in the dashboard, you'll see a list of any databases you've already created. Click the "Create Database" button on the top-right of the screen.

You'll see a bunch of professional plans appear below. You can ignore these until you've deployed your new world-changing application to production and you have millions of customers and can afford them.

Heroku knows we need something lightweight to get our feet wet, so for now we'll just pick the "Dev Plan (free)" option.

![Dev Plan Button](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/dev-plan.png)

You'll see your new database at the top of your list of databases (or just one if you just created an account). Heroku will create a zen name for you, mine happens to be "salty-water-676".

![Create Database](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/create-database.png)

For clarity lets rename the database so we know it's a development database. Click the database you just created to navigate to the database dashboard.

Click the database title and a modal will appear where you can change the name of your database. For this article, we'll name it "todo-app-dev" since we're going to create a simple todo application.

![Rename Database](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/database-rename.png)

### Heroku Postgres Connection Settings

In: [Heroku Postgres](https://postgres.heroku.com)

Ok cool. Now that we've got our schema setup, we want to run our database migrations. We need to tell our Rails app running on Nitrous.IO to talk to Heroku for it's Postgres resources. Let's get that setup.

In the *Heroku Postgres* website, click your database name (todo-app-dev) to get to the database dashboard. To the right of the screen, you'll see a little double arrow icon. This reveals a dropdown with connection settings:

![Heroku Postgres Connection Settings](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/connection-settings.png)

For the Rails application we're building today, we're going to select the "Active Record" row, but you can easily retrieve the connecting settings for Django, PHP, Java, and a variety of other apps using Heroku Postgres.

Go ahead and copy the *Active Record* settings from the Heroku Postgres website and replace the development settings in config/database.yml back on your Nitrous.IO box. It should look like this:

![Postgres Settings](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/databaseyml.png)

<p class="note">For our test and production databases, we'll be provisioning new databases on Heroku Postgres. If you want to create a test database ("todo-app-test"), just repeat these instructions.</p>

### Create some Models

In: [Nitrous.IO](https://www.nitrous.io/)

Before we create the database, we need a database schema for our application so we know what type of data we want to store. Our basic todo app will consist of a Todo List which will contain many Tasks. Let's get those set up:

*Todo Lists*

    action@your-box:~/workspace/todo-app$ rails g scaffold List name:string

*Todo Tasks*

    action@your-box:~/workspace/todo-app$ rails g scaffold Task name:string completed:boolean list_id:integer

<p class="note">If you're not familiar with Rails generators, you'll notice in the output that Rails creates our database migration models for us. Scaffold generated code isn't always perfect, so you're likely going to need to edit it at some point. But for the sake of this blog post, we'll keep them as is. </p>

      create    db/migrate/20130210085022_create_lists.rb
      create    db/migrate/20130210090648_create_tasks.rb

Let's also just go ahead and fill out the necessary info in each of the models to make sure they'll behave correctly later.

*app/models/list.rb*

    class List < ActiveRecord::Base
      attr_accessible :name
      has_many :tasks, :dependent => :destroy

      validates :name, :presence => true
      validates_uniqueness_of :name, :on => :create, :message => "must be unique"

      def completed_tasks
        tasks.where(:completed => true).order("updated_at DESC")
      end
    end

*app/models/task.rb*

    class Task < ActiveRecord::Base
        attr_accessible :completed, :list_id, :name
        belongs_to :list, :foreign_key => "list_id"

        validates :name, :presence => true
    end

This is pretty basic rails stuff, we're not going to write tests for this blog post, but you can if you want.

### Migrate the DB

In: [Nitrous.IO](https://www.nitrous.io)

Now that our connection settings are in place and we have some database migrations set up, we can go ahead and run the initial migration on our Nitrous.IO box to create the tables and seed the heroku postgres database. In your Nitrous.IO console, navigate into your app's directory and type:

    action@bonzai-1174:~/workspace/todo$ rake db:migrate

<p class="alert">Take note: if you're getting a weird YAML parsing error when trying to run rake db:migrate, there's probably some extraneous characters being included when you paste into Nitrous.IO. Try either typing the settings manually, or unchecking "Soft Tabs" in the "Tab Size" menu at the top of the IDE editor.</p>

![Soft Tabs](https://raw.github.com/action-io/action-assets/master/support/screenshots/tab-menu.png)

If things run correctly, you should see the following output, with your tables being created on your Heroku Postgres database:

![DB Migrate](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/db-migrate.png)

### Start up the App

In: [Nitrous.IO](https://www.nitrous.io/)

We'll need to setup some default routes to tell Rails how to fetch resources for us. In *config/routes.rb* change the resources to nested resources like so:

    resources :lists
      resources :tasks
    end

And add the default root route at the bottom of the file:

    root :to => 'lists#index'

We'll use the default WEBRICK rails server to make our application available and make sure we can create a new list and some tasks. Open up a new console in the Nitrous.IO Web IDE (or [via SSH](http://help.action.io/ssh-add/)) and type:

    action@bonzai-1174:~/workspace/todo$ rails server

<p class="alert">Don't forget to remove the default "public/index.html"</p>

On the homepage, we'll see a (very ugly, but functional) link to add a new list.  Click that link:

![No Lists](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/listy-1.png)

And we'll see a form for our List model so we can add a new Todo list. This is the moment of truth:

![New List](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/listy-2.png)

Click "Create List", and ...

![List Created](https://raw.github.com/action-io/action-assets/master/support/screenshots/postgres/listy-3.png)

We'll see that our list was created and saved to the database successfully. This means that our Postgres connection is working correctly.

How'd it go for you? If you're having trouble, you can get in touch with us by visiting our [chatroom](https://www.nitrous.io/chat) or by [emailing us](mailto:support@nitrous.io).






