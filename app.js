const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
var session = require('express-session');
const cors = require('cors');
const chalk = require('chalk');
const cron = require("node-cron");
const useragent = require('express-useragent')
var bodyParser = require('body-parser');

require("dotenv").config();

const routes = require('./routes');
const apiResponse = require("./helpers/apiResponse");
const app = express();

/**
 * ! •••••••••••••••••••••••••••••••
 * ! Mongoose Connection
 * ! •••••••••••••••••••••••••••••••
 */
let MONGODB_URL = process.env.MONGODB_URL;

mongoose.Promise = global.Promise;
mongoose
    .connect(MONGODB_URL, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        if (process.env.NODE_ENV == 'development') {
            console.log("%s Connected to", chalk.green('✓'), MONGODB_URL);
            console.log('Press CTRL + C to stop the process\n');
        }
    })
    .catch((err) => {
        console.error("App starting error:", err.message);
        process.exit(1);
    });

mongoose.set('debug', process.env.NODE_ENV == 'development' ? true : false);

// SESSION
app.use(session({ secret: 'sim_internal_beehive', resave: true, saveUninitialized: true, cookie: { maxAge: process.env.SESSION_DURATION * 60 * 60 * 1000 } }));

app.use(function(req,res,next){
    res.locals.session = req.session;
    res.locals.host = req.protocol+'://'+req.get('host');
    next();
});

// Development Log
if (process.env.NODE_ENV != 'development') {
    app.use(logger('combined'));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(useragent.express());

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.bodyParser());
// Enabling and allow CORS for all requests
app.use(cors());

// Adding Helmet to enhance API's security
app.use(helmet());
app.use(helmet.hidePoweredBy({
    setTo: 'Skynet Server 2.0.93'
}))

// •••••••••••••• FavIcon •••••••••••••••••
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//Route Setup
app.use('/', routes);

// app.get('/test/socket/:id/:data', async(req,res)=>{
//     const {id, data}=req.params;
//     await updateStatusProduct(id, data);
//     res.json('ok')
// })

//CRON Job 
//0 0 0 * * * -> every midnight
//* * * * *   -> every minute
cron.schedule("0 0 0 * * *", async function() {
// cron.schedule("* * * * *", async function() {

});

// throw 404 if URL not found
app.all("*", function (req, res) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "X-Requested-With");
    return apiResponse.notFoundResponse(res, "Url/Page not found");
});

// error handler
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return apiResponse.unauthorizedResponse(res, err.message);
    } else {
        return apiResponse.ErrorResponseWithData(res, 'Server Error', err.message);
    }
});

var server = app.listen(process.env.NODE_PORT, function () { 
    var host = server.address().address  
    var port = server.address().port  
    console.log("Example app listening at http://%s:%s", host, port)  
}) 

module.exports = app;