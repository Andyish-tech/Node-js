const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const booksRoutes = require('./routes/books');  // ✅ import route
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api/books', booksRoutes); // ✅ mount route here
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Welcome to my node');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
