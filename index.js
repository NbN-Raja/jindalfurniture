require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');




const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Your API',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies

app.get("/", (req, res) => res.send("Hello World! Jindal Furniture Type "));

require('./app/routes/index.routes')(app)
require('./app/routes/products.routes')(app)

const connection = mongoose
  .connect(
    `mongodb://localhost:27017/test`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
