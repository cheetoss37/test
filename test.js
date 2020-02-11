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
date5.setDate(25);
console.log(date1,date2,date3,date4,date5);

console.log(today)
if(JSON.stringify(today) === JSON.stringify(date1) ||
   JSON.stringify(today) === JSON.stringify(date2) ||
   JSON.stringify(today) === JSON.stringify(date3) ||
   JSON.stringify(today) === JSON.stringify(date4) ||
   JSON.stringify(today) === JSON.stringify(date5) ) {
       console.log('Hello');
        /* fetch*/
        document.write("Fetch")
   } else {
        console.log('Bye!') /* show stored api */
        document.write("Show stored images")
    }
