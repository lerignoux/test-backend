const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')
app.use(bodyParser.json());

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const options = {
  definition: {
    basePath: '/api/v1',
    info: {
      title: 'Wiredcraft test backend api', // Title (required)
      version: '1.0.0', // Version (required)
    },
  },
  // Path to the API docs
  apis: ['./routes.js'],
};
const swaggerSpec = swaggerJSDoc(options);

app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Import my test routes into the path '/test'
const routes = require('./routes');
routes.setup(app);

var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = server;
