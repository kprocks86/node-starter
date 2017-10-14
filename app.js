 const express = require('express');
 const app = express();
 const config = require('./config/config.js');
 app.use('view engine','ejs')


 app.listen(config.dev.port, () => {
   console.log('server started on :' + config.dev.port);
 });
