 const express = require('express');
 const app = express();
 const config = require('./config/config.js');





 app.listen(config.dev.port, () => {
   console.log('server started on :' + config.dev.port);
 });
