# Tech-blog

![GitHub](https://img.shields.io/github/license/CharDige/Tech-blog)

## Description

This project required the creation of a CMS-style blog site, where users can write and publish blogs posts as well as comment on other blog posts.

It was required that the application followed the MVC paradigm in its architectural structure, used Handlebars.js as the templating language, used Sequelize as the ORM, and used the express-session npm package for authentication.

## Table of contents
- [User story](#user-story)
- [Acceptance criteria](#acceptance-criteria)
- [Technologies used/built with](#technologies-usedbuilt-with)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## User story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```

## Acceptance criteria

```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Technologies used/built with

This project used the following technologies to build it:

- JavaScript
- CSS
- HTML
- [Bootstrap](https://getbootstrap.com/)
- [Google Fonts](https://fonts.google.com/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Sequelize NPM package](https://sequelize.org/)
- [MySQL2 NPM package](https://www.npmjs.com/package/mysql2)
- [dotenv NPM package](https://www.npmjs.com/package/dotenv)
- [bcrypt NPM package](https://www.npmjs.com/package/bcrypt)
- [connect-session-sequelize NPM package](https://www.npmjs.com/package/connect-session-sequelize)
- [Handlebars.js](https://handlebarsjs.com/)
- [express-handlebars NPM package](https://www.npmjs.com/package/express-handlebars)
- [express-session NPM package](https://www.npmjs.com/package/express-session)

## Installation

1. Clone the repo (HTTPS: `git clone https://github.com/CharDige/Tech-blog.git` or SSH: `git clone git@github.com:CharDige/Tech-blog.git`)

2. Install all NPM packages by running `npm i` in the command-line. Or, if you wish to install each NPM package individually:

- Install Express.js NPM package `npm install express`
- Install Sequelize NPM package `npm install sequelize`
- Install MySQL2 NPM package `npm install mysql2`
- Install dotenv NPM package `npm install dotenv`
- Install bcrypt NPM package `npm install bcrypt`
- Install connect-session-sequelize NPM package `npm install connect-session-sequelize`
- Install express-handlebars NPM package `npm install express-handlebars`
- Install express-session NPM package `npm install express-session`

## Usage

## Credits

Here's a list of resources I'd like to credit that really helped with the development of this application:

- [W3 Schools - JavaScript Date toLocaleDateString()](https://www.w3schools.com/jsref/jsref_tolocaledatestring.asp)
- [W3 Schools - JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [mdn web docs - EventTarget.addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [Handlebars - Partials](https://handlebarsjs.com/guide/partials.html)
- [W3 Schools - JavaScript Window Location](https://www.w3schools.com/js/js_window_location.asp?output=printPagePage)

## License

[MIT License - Copyright (C) 2022 Charlotte Dige](./LICENSE)