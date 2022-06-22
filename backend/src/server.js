require('dotenv').config();
const express = require('express');
const app = express();
const config = require('config');
const logger = require('./config/logger');
const bodyParser = require('body-parser')
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

// Autentikáció
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/signin/signin.router')

// Swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./docs/swagger.yaml');


const { host, user, pass } = config.get('database')

mongoose.connect(`mongodb+srv://${host}`, {
  user,
  pass,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>
    // Csak az első futásnál kellett
    //require('./seed/seeder'),

    logger.info('MongoDB connection has been established successfully.'))
  .catch(err => logger.error(err))

app.use(cors());
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Router.
app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);
//app.use('/login', require('./auth/signin/signin.router'));

app.post('/signup', require('./auth/signup/signup.router'));

app.use('/bill', require('./controller/bill/bill.routes'));
app.use('/category-fastfood', require('./controller/categoryFastfood/categoryFastfood.routes'));
app.use('/category-menu', require('./controller/categoryMenu/categoryMenu.routes'));
app.use('/customer', require('./controller/customer/customer.routes'));
app.use('/foods-fastfood', require('./controller/foodFastfood/foodFastfood.routes'));
app.use('/foods-menu', require('./controller/foodMenu/foodMenu.routes'));
app.use('/menu', require('./controller/menu/menu.routes'));
app.use('/order-fastfood', require('./controller/orderFastfood/orderFastfood.routes'));
app.use('/order-menu', require('./controller/orderMenu/orderMenu.routes'));
app.use('/user', require('./controller/user/user.routes'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err, req, res, next) => {
  logger.error(`ERR ${err.statusCode || 500}: ${err.message}`)
  res.json({
    hasError: true,
    message: err.message
  });
});

module.exports = app;
