var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'OtTVHaOOplbB8eVXZdbUJm6z6',
  consumer_secret: 'PtZyVXU7lkHNlpDFW851OPuX06MKSZgExW7XAQUTdnrm1SWBVC',
  access_token_key: '1058150296436858880-gpwFun4ehuiLpBWyhkLAXKxoE8WFkb',
  access_token_secret: 'z2NtDPPuNZgTA7OeMm0PgI3HjoqrkuEnwbSEXlikWNdRR'
});

client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  });