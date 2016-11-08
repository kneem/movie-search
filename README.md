The MovieDB API Search
=========

This fully client-side application leverages the [The MovieDB API](https://developers.themoviedb.org/3/getting-started) to allow users to search for a movie:

![Screenshot](movie-search-1.png?raw=true "Main page")

Detailed information about the movie can be displayed as well (\**Sting*\* was in Lock, Stock? Wow.):

![Screenshot](movie-search-2.png?raw=true "Main page")
![Screenshot](movie-search-3.png?raw=true "Main page")

## Setup

1. Run `npm install` to install all the node dependencies.

2. Apply for and obtain an API key from [The MovieDB's developer page](https://developers.themoviedb.org/3/getting-started).

3. Open `app-config.js`, edit the value for `apiKey` with your newly obtained API key.

4. Run `npm start` to precompile the Handlebars templates, and start the http server.

5. Go to `http://localhost:3000`.

6. Search away, friend.

## Features
1. Displays popular movies on first load, and on the base route.
2. Searching for movies, displaying relevant attributes like buget, runtime, votes, etc.
3. Cast and Crew information.
4. Responsive CSS design via media queries, CSS flexbox, etc.

## Technologies Used
* HTML, CSS, JavaScript
* [jQuery](http://jquery.com/)
* [Backbone.js](http://backbonejs.org/)
* [Handlebars.js](http://handlebarsjs.com/)
* [Lodash.js](https://lodash.com/)
* [Font Awesome](http://fontawesome.io/)
* [Bootstrap](http://getbootstrap.com/)

## TODO
* Clean up CSS code using a pre-processor like [Less](http://lesscss.org/).
