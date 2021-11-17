const express = require('express');
const moment = require('moment');

const router = express.Router();

moment.locale('ru');

router.get('/:year/:month/', (req, res) => {

 const profileObj = {
  year: req.params.year,
  month: req.params.month,
  daysInMonth:  moment([req.params.year, req.params.month, 1]).daysInMonth(),
  fistDayInMonth: Number(moment([req.params.year, req.params.month, 1]).format('e')),
 }
 
 const cellCount = getTotalCellCount(profileObj);
 const table = generateTable(profileObj, cellCount)
 res.render('calendar', {table: table, profileObj});
});

const getTotalCellCount = (tempObj) => {
  const sumStart = tempObj.daysInMonth + tempObj.fistDayInMonth;
  return (7 - (sumStart % 7)) + sumStart;
};


const generateTable = (tempObj, count) => {
  let strMain = '<table><tr><th><p>пн</p></th><th><p>вт</p></th><th><p>ср</p></th><th><p>чт</p></th><th><p>пт</p></th><th><p>сб</p></th><th><p>вс</p></th></tr><tr>';;
  let strTr = '';
  let dayNumber = 0;
  for (let i = 0; i <= count; i++) {
    if ((i % 7) === 0 && i !== 0) {
      strMain += `<tr>${strTr}</tr>\n`;
      dayNumber++
      strTr = `<td>${dayNumber}</td>`;
    } else {
      if (i >= tempObj.fistDayInMonth && i < (tempObj.daysInMonth + tempObj.fistDayInMonth)) {
        dayNumber++
        strTr += `<td>${dayNumber}</td>`;
      } else {
        strTr += `<td></td>`;
      }
      
    }
  }
  strMain = `<table>
  
  ${strMain}</table>`;
  return strMain;
}

module.exports = router;