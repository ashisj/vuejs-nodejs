var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var api = require('./api/routes/authRoute');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, x-Requsted-With, Accept, Authorization, Content-Type'
    );
    if(req.method == 'OPTIONS'){
      req.header('Access-Control-Allow-Methods', "POST,GET,PUT,PATCH,DELETE");
      return res.status(200).json({});
    }
    next();
})
  
app.use('/api', api);

app.use((req, res, next) => {
    const error = new Error('Not found');
    res.status(404);
    next(error);
})
  
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    })
});
  
module.exports = app;
