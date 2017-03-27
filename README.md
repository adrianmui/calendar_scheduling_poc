### adrian & chris
# fullstack app with (*)-mail api

## Node/Express + Angular 1.0. As this is a demo/proof of concept we will not be including much overhead.

## Purpose: Demo


!! // !ONGOING means that we need to fix it ASAP !!

1+2) load node modules load bower components
`npm install && bower install` 

3) build dom elements with gulp
`gulp public --color=indigo --shine=600 --header=ms-header-dark --navbar=ms-navbar-primary --navbarMode=true`

4) This builds all Front End JS and bundles into browser-support javascript
`gulp babelify && gulp browserify`

or

3+4) `gulp public --color=indigo --shine=600 --header=ms-header-dark --navbar=ms-navbar-primary --navbarMode=true && gulp babelify && gulp browserify`

5) Starting server
`npm start`

Testing console log
`npm test`