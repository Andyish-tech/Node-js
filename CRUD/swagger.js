const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books API',
      version: '1.0.0',
      description: 'A simple CRUD API using Node.js and MySQL',
    },
  },
  apis: ['./routes/*.js'], // <-- make sure your routes folder exists and has books.js
};

module.exports = swaggerJSDoc(options);
