var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:phone', function(req, res) {
	// var noodle = require('noodlejs');

	// noodle.query({
	// 	url:      'http://www.qualoperadora.net/',
	// 	post: {
	// 		ref2115: "http%3A%2F%2Fwww.qualoperadora.net%2F",
	// 		telefone: '5196670281'
	// 	},
	// 	cache: false,
	// 	// selector: '#resultado',
	// 	//*[@id="resultado"]/span[1]
	// 	//#resultado > span:nth-child(1)
	// 	// extract:  'html'
	// })
	// .then(function (results) {
	// 	res.send(arguments);
	// });
	// 
	
	var request = require('request');
	request.post('http://www.qualoperadora.net/', {form:{ref2115: "http://www.qualoperadora.net/", telefone: "5196670281"}}, function(error, response, body) {
		console.log(body)
		var cheerio = require('cheerio'),
		$ = cheerio.load(body);

		res.send($('#resultado').html());
		
	})
});

module.exports = router;
