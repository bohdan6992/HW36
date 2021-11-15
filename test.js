const moment = require('moment');

moment.locale('ru');

const daysArr = ['пн','вт','ср','чт','пт','сб','вс']

const data ={
  year: 2021,
  month: 1,
}

let m = moment([data.year, data.month, 1]).daysInMonth();

let d = moment([data.year, data.month, 1]).format('e');

console.log('current month >>>', m);
console.log('1st start from >>>', daysArr[d]);

