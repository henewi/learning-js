//let a=10
//console.log(42+66);
//console.log(1+2+3+3+4+9);
//console.log((4+6+9)/77);
//console.log(a);
//console.log(9*a);
//let b=(4*a);
//console.log(b);
//let max=57;
//let actual=(max-13);
//let percentage=(actual/max);
//console.log(percentage);

// New stuff after summer.

//let message;
//message='Alert Message!' // stores the string
//alert(message);

//let message2='Hello';
//alert(message2); // combined into 2 lines from 3

//let message3;
//message3='start';
//message3='end'; // changes before the output
//alert(message3);

//let resource='content';
//let copied;
//copied=resource; // copies resource's content to copied
//alert(copied);

// test 

//const bday='22nd November 2002';
//alert(bday);

// JS fundamentals 1 finished. 

// FUNDAMENTALS 2.

//const string='testing the strings';
//console.log(string);
//const badString=string;
//console.log(badString);
//
//const string2='It\'s in my DNA to do this.';
//console.log(string2); //it works!

//const nam='Henry';
//const greeting=`Hello, ${nam}`;
//console.log(greeting);

//const one='Hi';
//const two=' there!';
//const oneplustwo=`${one}${two}`;
//console.log(oneplustwo);

//let text="beans";
//let newtext=text.replace("beans", "carrots");
//console.log(newtext);

// alert  ('Z'>'A');

// alert('Glow'>'Glee');

//const time = new Date().getHours();
//let greeting;
//if (time < 18) {
//    greeting="good day";
//} else if (time <19) {
//    greeting="good evening";
//} else {
//    greeting="clearly you're not from here."
//}
//document.getElementById("day").innerHTML=greeting;

//if (1||0) {
//    alert("hello!!!!");
//}

//let time=9;
//let isWeekend=true;
//if (time<10||time>18||isWeekend) {
//    alert("office closed!");
//}

//switch(expression) {
//    case choice1:
//        // run this code 
//       break;
//    
//    case choice2:
//        // run this code instead
//        break;
//    
//        // include as many of these.
//}

//let year = prompt ("In which year was Henry born?"," ");
//if (year==2002)alert("Correct!");
//else alert("WRONG");

//let jsname = prompt("Whats the official name of JS?","");
//if(jsname=="ECMAscript")alert("CORRECT!");
//else alert("WRONG.");

//let value = prompt("Give me a number");

//if (value == 0)alert("0");
//else if (value > 0)alert("positive");
//else if (value < 0)alert("negative");
//else alert("That isn't a number");

//let result = (a + b < 4) ? 'Below' : 'Over';

const day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Its Sunday, time to relax!");
        break;
    case 1:
        console.log("Happy monday!");
        break;
    case 2:
        console.log("It is tuesday my dudes");
        break;
    case 3:
        console.log("It is Wednesday my dudes");
        break;
    case 4:
        console.log("Thurs");
        break;
    case 5:
        console.log("Fri");
        break;
    case 6:
        console.log("Sat");
        break;
    default:
        console.log("We dun F**** up!");
}

const grade = prompt("what were your marks in the test?")
switch(true) {
    case grade >= 50:
    alert("you passed!")
    break;
    case grade <= 49:
    alert("you failed.");
    break;
    default:
        console.log("something went wrong!")
}

// testing testing