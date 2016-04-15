// bring in Express
var express = require('express');
var app = express();

// set up the Handlebars view engine
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// tell express to find static files in the "public" directory
app.use(express.static('public'));

//body parser -- for form processing
app.use(require('body-parser').urlencoded({extended:true}));

// --- ROUTES --- //

app.get('/',function(req,res){	
	res.render('quizPage');	
});

// handle the post to the form
app.post('/calc',function(req,res){

	var favcolor1 = (req.body.radiocolor1);
	var favcolor2 = (req.body.radiocolor2);
	var favcolor3 = (req.body.radiocolor3);
	var favcolor = "color"; 
	var red=0;
	var green=0;
	var blue=0; 

	switch (favcolor1) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
	}

	switch (favcolor2) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
	}

	switch (favcolor3) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
	}
	
	if (red >= 2)
		{favcolor = "red";}
	else if (green >= 2)
		{favcolor = "green";}
	else {favcolor = "blue";}


	var data = {
			favcolor: favcolor
		}
	

	res.render('results',data);
	
});

// 404 Not found catch-all handler 
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
});

// 500 server error handler 
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

// start server
app.listen(3000, function(){
	console.log( 'Express started on http://localhost:3000; press Ctrl-C to terminate.' );
});