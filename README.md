### adrian & chris
# fullstack app with (*)-mail api

## Node/Express + Angular 1.0. As this is a demo/proof of concept we will not be including much overhead.

## Purpose: Demo


!! // !ONGOING means that we need to fix it ASAP !!

1) load node modules
`npm install` 
2) load bower components
`bower install`
3) build dom elements with gulp
`gulp public --color=indigo --shine=600 --header=ms-header-dark --navbar=ms-navbar-primary --navbarMode=true`
4) remember to delete transpile/ and public/js/ first. Will decrease number of steps later. This builds and bundle browser-support javascript
`gulp babelify && gulp browserify`

3) Starting server
`npm start`

Testing console log
`npm test`