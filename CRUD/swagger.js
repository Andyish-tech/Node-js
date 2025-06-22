const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books API',
      version: '1.0.0',
      description: 'Simple CRUD API with Swagger docs',
    },
  },
  apis: ['./routes/*.js'], // where to find comments
};

module.exports = swaggerJSDoc(options);
