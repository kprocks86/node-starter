 const express = require('express');
 const app = express();
 const config = require('./config/config');
 const Routes = require('./controllers/routes');
 app.set('view engine', 'ejs')

 Routes(app);

 app.listen(config.dev.port, () => {
     console.log('server started on :' + config.dev.port);
 });
