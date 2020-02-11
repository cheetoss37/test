var today = new Date();
today.getDate();

var date1 = new Date();
date1.setDate(5);
var date2= new Date();
date2.setDate(10);
var date3= new Date();
date3.setDate(15);
var date4= new Date();
date4.setDate(20);
var date5= new Date();
date2.setDate(25);
console.log(today)

var fetchDay = [date1, date2, date3, date4, date5];
console.log(fetchDay);

var same = today.getTime() === date2.getTime();
var notSame = today.getTime() !== date2.getTime();
