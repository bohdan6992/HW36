const express = require('express');

const router = express.Router();
const moment = require('moment');


router.get('/:year/:month/', (req, res) =>{
  console.log(req.params)
  console.log(req.query)

  const profileObj ={
    year: req.params.year,
    objIn: {
      month: req.params.month,
    },
    date: moment().format('DD-MM-YYYY hh-mm-ss')
  }
  console.log(profileObj.year)
  res.render('cabinet', profileObj)
});

module.exports = router;