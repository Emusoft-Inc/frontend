var arrayWest=[5,2, -4,3,-6, 8, -15.4, 13, 4, -20, -6, -1, 200, 157, -98, 250, -400, 81, 115, 0, 0, 0, 0, 67, 44, 3211, 5000, -65789, 2500];

var negativeValue = arrayWest.filter(x=>x<0);
var zeroValue= arrayWest.filter(x=>x==0);
var positiveValue = arrayWest.filter(x=>x>0);

var negativeRatio = ((negativeValue.length/arrayWest.length)); console.log(negativeRatio);
var zeroRatio = ((zeroValue.length/arrayWest.length)); console.log(zeroRatio);
var positiveRatio = ((positiveValue.length/arrayWest.length)); console.log(positiveRatio); 
var testRatio = negativeRatio + zeroRatio + positiveRatio; console.log(testRatio);

var map = arrayWest.map(x=>(x+500));
 console.log(map);

 var standOut = arrayWest.reduce((x,y)=> x+y);
 var absoluteStandOut = Math.abs(standOut);
 console.log(absoluteStandOut);

 var dataBase = {"Name":"Frimpong Daniella", "Age":16, "Dept": "Science & Technology" , "Matric No": 10000011, "Course": "Computer Engineering"};
 console.log(dataBase);