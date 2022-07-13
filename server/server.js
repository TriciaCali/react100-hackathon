const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(express.json());

app.get("/quotes", (req,res) => {
  const options = {
    method: 'POST',
    url: 'https://motivational-quotes1.p.rapidapi.com/motivation',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.APIKEY,
      'X-RapidAPI-Host': 'motivational-quotes1.p.rapidapi.com'
    },
    data: '{"key1":"value","key2":"value"}'
  };
  
  axios.request(options).then(quoteData => {
    res.send(quoteData.data)
})
})

app.get("/exercises", (req,res) => {
  const options2 = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight',
   headers: {
       'X-RapidAPI-Key': process.env.APIKEY,
       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
   };

    axios.request(options2).then(exercisesData => {
        res.send(exercisesData.data)
})
})
module.exports = app;