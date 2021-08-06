const env = require('dotenv').config();
const express = require('express');
const path = require('path');
//const cookieParser = require("cookie-parser");
//const sessions = require('express-session');
const { I18n } = require('i18n');

let Template = require('./templates');
let template = new Template();



//MODELS
let Auth = require('./mvc/model/auth');
let auth = new Auth();

//i18n
const i18n = new I18n({
	locales: ['en','it'],
	directory: path.join(__dirname, 'locales')
});

const app = express();

app.set('appName','Shopping List');

//template engine
app.set('view engine', 'ejs');
app.set('port', process.env.PORT);
app.set('templateIndex', 'index');