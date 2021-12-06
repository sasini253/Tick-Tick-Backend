const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const Todo = require('./models/Todo');

mongoose.connect('mongodb+srv://sasini:kidfox98@cluster0.vlwi3.mongodb.net/ticktick')
app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({extended:false}));


const port = process.env.PORT||5000;

app.listen(port,(err)=>{
  
    if(err)return console.log(err);

    console.log('server running on port: ',port)

})
