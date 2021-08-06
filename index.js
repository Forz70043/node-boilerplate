const env = require('dotenv').config();
const express = require('express');
const path = require('path');
//const cookieParser = require("cookie-parser");
//const sessions = require('express-session');
const { I18n } = require('i18n');

let Template = require('./templates');
let template = new Template();


/**
 * REQUIRE ROUTES
 */
 let authRoute = require('./routes/auth');
 let loginRoute = require('./routes/login');
 let usersRoute = require('./routes/users');

//MODELS
let Auth = require('./mvc/models/auth');
let auth = new Auth();



const app = express();

/**
 * 	servers static files js,css
 */
 app.use('/public',express.static(path.join(__dirname, 'public/css')));
 app.use('/public',express.static(path.join(__dirname, 'public/js')));
 app.use('/public',express.static(path.join(__dirname, 'public/')));
 app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
 app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
 app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
 app.use('/css', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));
 app.use('/js', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/js')));
 app.use('/js', express.static(path.join(__dirname, 'node_modules/@popperjs/core/dist/umd')));
 app.use('/js', express.static(path.join(__dirname, 'node_modules/chart.js/dist')));


//i18n
const i18n = new I18n({
	locales: ['en','it'],
	directory: path.join(__dirname, 'locales')
});

/**
 * ROUTE
 */
 
 app.use('/auth', authRoute);
 app.use('/login', loginRoute);
 app.use('/users', usersRoute);
 
 auth.serialize();
 auth.deserialize();



app.set('appName','Shopping List');

//template engine
app.set('view engine', 'ejs');
app.set('port', process.env.PORT);
app.set('templateIndex', 'index');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(i18n.init);





/*
 * Req for request & res for response
 * get data
 */
app.get('/',function(req,res){
	//inserire logica se già auth
	//res.render(app.get('templateIndex'),{login: 1, filename:false, links: false/*['home']*/});
	console.log(req.session)
	template.myRender(res,'main');
});


app.get('/register', (req,res)=>{ template.myRender(res,'register') });
app.get('/login', (req, res)=>{ template.myRender(res, 'main')});


app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(process.env.PORT,function(){
	console.log(`app listen on: http://localhost:${process.env.PORT}`);
});

module.exports = app;