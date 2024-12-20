const express = require('express');
const app = express();
require('dotenv').config();
require("./models/index")
const blogsRouter = require("./routes/blogs");
const newsRouter = require('./routes/news');
const businessRouter = require('./routes/business');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/blogs', blogsRouter);
app.use('/news', newsRouter);
app.use('/business', businessRouter);


app.listen(3000, () => {
  console.log(`Server running on http://localhost:${process.env.APP_PORT}`);
});
