var express = require('express');

var google = require('googleapis');
var OAuth2 = google.auth.OAuth2;
var url = require('url');

module.exports = (function() {
    'use strict';
    var viewsRoute = express.Router();

    viewsRoute.get('/', function(req, res) {
		var url_parts = url.parse(req.url, true);
		var query = url_parts.query;
		console.log(query);
        res.render('index');
    });

    viewsRoute.get('/home', function(req, res) {
    	console.log(req.query.code);
        res.render('templates/home');
    });

    viewsRoute.get('/auth', function(req, res) {


		var oauth2Client = new OAuth2(
			'352806218935-977qnocs06v9djci3rvp0sab2s01lvnc.apps.googleusercontent.com', 
			'T3_tQNIBk-cMzsQI15eeshPW', 
			'http://localhost:3000/'
		);

		// generate a url that asks permissions for Google+ and Google Calendar scopes
		var scopes = [
		  'https://www.googleapis.com/auth/plus.me',
		  'https://www.googleapis.com/auth/calendar'
		];

		var url = oauth2Client.generateAuthUrl({
		  access_type: 'offline', // 'online' (default) or 'offline' (gets refresh_token)
		  scope: scopes // If you only need one scope you can pass it as string
		});

        res.redirect(url);
    });

    viewsRoute.get('/auth-verify', function(req, res) {

		// oauth2Client.getToken(code, function(err, tokens) {
		//   // Now tokens contains an access_token and an optional refresh_token. Save them.
		//   if(!err) {
		//     oauth2Client.setCredentials(tokens);
		//   }
		// });
    	res.render('index');
    });



    return viewsRoute;
})();