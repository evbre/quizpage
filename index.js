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

	var sigsong1 = (req.body.radiocolor1);
	var sigsong2 = (req.body.radiocolor2);
	var sigsong3 = (req.body.radiocolor3);
	var sigsong4 = (req.body.radiocolor4);
	var sigsong5 = (req.body.radiocolor5);
	var sigsong = "some song"; 
	var red=0;
	var green=0;
	var blue=0; 
	var yellow=0;
	var purple=0; 

	switch (sigsong1) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
		case "yellow":
			yellow +=1;
			break;
		case "purple":
			purple +=1;
			break; 
	}

	switch (sigsong2) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
		case "yellow":
			yellow +=1;
			break;
		case "purple":
			purple +=1;
			break; 
	}

	switch (sigsong3) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
		case "yellow":
			yellow +=1;
			break;
		case "purple":
			purple +=1;
			break; 
	}

	switch (sigsong4) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
		case "yellow":
			yellow +=1;
			break;
		case "purple":
			purple +=1;
			break; 
	}

	switch (sigsong5) {
		case "red":
			red +=1;
			break;
		case "green":
			green +=1;
			break;
		case "blue":
			blue +=1;
			break;
		case "yellow":
			yellow +=1;
			break;
		case "purple":
			purple +=1;
			break; 
	}

	var songscore = Math.max(red, green, blue, yellow, purple); 
	
	switch (songscore) {
		case red:
			sigsong = "Baby Got Back";
			break; 
		case green:
			sigsong = "Friends in Low Places";
			break; 
		case blue:
			sigsong = "Don't Stop Believing";
			break; 
		case yellow:
			sigsong = "Summer Nights";
			break;
		case purple:
			sigsong = "Bohemian Rhapsody";
			break;  
	} 
	

	var data = {
			sigsong: sigsong
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