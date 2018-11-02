//Import twitter package using node
var Twitter = require('twitter');

//Import config module
var config = require('./config');

//Autheticating user
var client = new Twitter(config);

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });