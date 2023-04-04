const express = require('express')
const app = express()
const mongoose= require('mongoose')
const port = 3000

const connection =mongoose.connect(`mongodb+srv://xetrinbn66:Y3vsCajF3saO2wNO
@cluster0.sha62xh.mongodb.net/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
app.get('/', (req, res) => res.send('Hello World! Jindal Furniture '))
app.get('/nabin', (req, res) => res.send('Hello nabin!  '))
app.get('/neeraj', (req, res) => res.send('Hello nabin!  '))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))