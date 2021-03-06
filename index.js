const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors');

// MongoDB
const uri = 'mongodb+srv://rzn:102030405060@cluster0.yzebn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true  });
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cors());

require('./src/routes/index')(app);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server rodando porta ${process.env.PORT || 3000}`);
});