// __________++++++++ CHAPTER NO # 21 - 25 ++++++++_____________________

            // TASK 1
// var firstNAME = prompt("enter your first name");
// var lastNAME = prompt("enter your last name");
// var fullNAME = firstNAME + " " + lastNAME;
// document.write("welcome" + " " +fullNAME);

                // TASK 2
// var favMOBILE = prompt("Enter your favorite mobile name");
// document.write(favMOBILE.length);

                // TASK 3
// var word = "pakistani";
// var ind = word.indexOf("n")
// document.write("tThe index of n in a word pakistani is :" + " " + ind);

            //TASK 4
// var a = "hello world";
// var b = a.lastIndexOf("l");
// document.write(b);

            //TASK 5
// var word = "pakistani"; 
// var ind =[];
// ind = word.charAt(3);
// document.write("The index of 3rd in a word pakistani is :" + " " + ind);
           

                    //TASK 6
// var firstNAME = prompt("enter your first name");
// var lastNAME = prompt("enter your last name");
// var fullNAME = firstNAME.concat(lastNAME)
// document.write("welcome" + " " +fullNAME);

                // TASK 7
// var a = "hyderabad"
// document.write(a + "<br>");
// var b = a.replace("hyder" ,"Islam");
// document.write(b);

                    //TASK 8
// var message = "Ali and Sami are best friends. They play cricket andfootball together.";
// var a = message.replace("and" , "&");
// document.write(a);

                    //Task 9
// var str = "472";
// document.write(str);
// std = Number("472");
// document.write(std);

                    //Task 10
// var a = prompt("enter any");
// a = a.toUpperCase();
// document.write(a);  

                    //Task 11
// var a = prompt("enter any");
// var b;
// var c;
// for (var i = 0; i<1; i++){
//    b = a.slice(0 , 1);
//    b = b.toUpperCase();
// }
// for (j=1; j<=a.length; j++){
//     c = a.slice(1);

// }
// document.write( b + c);  

                        // TASK 12
// var num = 35.36;
// document.write(num + "<br>");
// var n= num.toString();
// document.write(n);

                    //TASK 13
// var a = [];
// a = prompt("enter a name");
// for (var i =0; i < a.length; i++){
//     if (a[i]=== "!" || a[i]=== "@" || a[i]=== "#" || a[i]=== "$" ){
//         alert("ENTER a valid username : does not contain special symbols e.g !@%$ ");
//         break;
//        {
//             alert("passward saved");     
//         }
//     }
// }
    
    

                // TASK 14
// var a = ["cake" , "nimcos" , "methai" , "faluda" , "icecream"]
// var serch =[];
// serch = prompt("search items here");
// serch = serch.toLowerCase();

// for (var i =0; i<=a.length; i++){
//     if (serch === a[i]){
//       document.write("item are available");
//        break;
//     }
//     else{
//         document.write("item not available");
//         break;
//     }

// // }

                    // TASK 15

// var pas = prompt("enter a passard (must containe characters and number , not start with number , 6 character long )");
// var num = [0 , 1  , 2, 3 ,4 ,5 , 6 ,7, 8 ,9, 10];
// var a = 33;

// alert("33");

// // else if (pas !== Number && pas !== String ){
// //     pas = prompt("enter a passard (must containe characters and number , not start with number , 6 character long )");

// // }
// // else if (pas === String){
// //     pas = prompt("enter a passard (must containe characters and number , not start with number , 6 character long )");

// // }

// // else if (pas === Number){
// //     pas = prompt("enter a passard (must containe characters and number , not start with number , 6 character long )");

// // }
// if (pas === num + String && pas[0]===Number ){
//     document.write("SAVED");

// var a = "!";
// var b = a.charCodeAt()
// document.write(b);

// }
// else {
//     document.write("not");
// }

                    // TASK 16
// var a = "university of karachi";
// document.write(a + " " + "<br>")
// var b = []
//  b = a.split("");
//  for (var i =0; i<b.length; i++){
//     document.write(b[i] + "<br>" );
//  }

                    // TASK 17
// var a = [];
// a = prompt("enter");
// var i;
// for (i = a.length-1; i>=0; i--){
//     document.write("the last character of " + a + " " + a[i]);
//     break;   
// }

                // task 18
// var a = "the quick brown fox jumps over the lazy dog";
// var b="the";
// var c = 0;
// c=a.replace(/the/g, )
// // for (i=0; i<a.length; i++){
// //     if ( b= a.match(/+he/g)){
        
// //     }
  
// // }

// document.write(c);

                    // CHAPTER # 26 - 30

                    // TASK 1
// var a = +prompt("enter decomal number");
// var b;
// var c;
//var A;
// if (a >0){
//     document.write(a +"<br>");
//     A= Math.round(a);
//     document.write(A +"<br>");
//     b= Math.floor(a);
//     document.write(b +"<br>");
//     c= Math.ceil(a);
//     document.write(c +"<br>");
// }
// else {
//     a= +prompt("enter positive decimal number please");
// }

                    // task 2
// var a = +prompt("enter decomal number");
// var b;
// var c;
// var A
// if (a < 0){
//     document.write(a +"<br>");
//     A= Math.round(a);
//     document.write(A +"<br>");
//     b= Math.floor(a);
//     document.write(b +"<br>");
//     c= Math.ceil(a);
//     document.write(c +"<br>");
// }
// else {
//     a= +prompt("enter positive decimal number please");
// }

                // task 3
// var a = +prompt("enter");
// var b;
// b= Math.abs(a);
// document.write(b);

                //task 4
// var a;
// a = Math.random();
// document.write(a);

                    //task 5
// var head;
// var tail;
// var toss;
// toss = Math.random(1);
// toss =  Math.round(toss);
// document.write(toss);

                    //task 6
// var a;
// var b;
// var c= 0;
// a= Math.floor(Math.random()*100);
// document.write(+a);

                    //task 7
// var a = +prompt("enter your weight");
// var b = ["kg" , "kgs" , "kilogram"];
// document.write(a + b);

                    //task 8
// var a = Math.random(10);
// a = Math.round(a);
// var b = +prompt("enter number 1 to 10");
// if (b === a){
//     document.write("congratulation");

// }
// else {
//     document.write("try again");
// }

                    // CHAPTER # 31-34
                    // task 1
// var a = new Date();
// document.write(a);

                    // task 2

// var months = ["january" , "febuary" , "march" , "aprail" , "may" , "june" , "july" , "auguest" , "september" , "october" , "november" , "december"];
// var a = new Dat(e().getMonth();
// var b = months[a];
// document.write(b);

                //task 3
// var a = new Date();
// var x = a.toString(a);
// var y = x.slice(0,4);
// document.write(y);

                    //task 4
// var a = new Date();
// var x = a.toString(a);
// var y = x.slice(0,4);
// if (y === "sat" || y=== "sun"){
//     document.write("Its fun day");
// }
// else {
//     document.write("its working day");
// }

              // task 5
// var a = new Date();
// var x = a.toString(a);
// var y = x.slice(4,6);
// if (y > "15"){
//     document.write("Its last days of month");
// }
// else {
//     document.write("its start days of month");
// }

                //task 6
// var a = new Date();
// var b = a.getTime();
// document.write( "milliSECONDS towards 1970s : " + " " + b);
// var c;
//  c = b / 60000;
// document.write( "minutes towards 1970s : " + " " + c);

                //task 7
// var a = new Date();
// var c = a.setHours("12pm");
// document.write(c);
// var b = a.getHours();


                //task 8
// var a = new Date("thu , dec, 31 , 2020");
// document.write(a);
// var b = a.setFullYear(2019 , 2,  4 , "wed") ;
// document.write(b);

            //TASK 9
// var a = new Date("12 , jun , 2015");
// var b = a.getTime(a);
// var c = (60  * 60  * 24  * 1000)% 365 ;

// document.write(c);

                    //task 10
// var a = new Date("sat , Dec , 5 , 2015");
// document.write(a);
// var b = a.getTime("sat , Dec , 5 , 2015");
// var c = b/1000;
// document.write("<br>" + c);

                    // task 11
// var a = new Date();
// document.write("cureent date and time" + " " + a);
// var b = a.setHours(9);
// var c = new Date(b);
// document.write("<br> "+c);

               //task 12
// var a = new Date();
// document.write("cureent date and time" + " " + a);
// var b = a.setFullYear(1920);
// var c = new Date(b);
// document.write("<br> "+c);

                // task 13
// var a = new Date ( prompt("enter dop"));
// var b = a.getTime();
// var c = new Date();
// var d = c.getTime();
// var diff = d - b;
// var age = Math.floor(diff);
// var finalAGE = Math.floor(age/(1000*60*60*24*30*12));
// document.write(finalAGE);


                // task 14
// var name = prompt("enter a name");
// var month = prompt("enter a months name");
// var unit = +prompt("enter a number of unit ");
// var cPu = +prompt("enter charges per unit");
// var billWITHOUTdue = unit * cPu;
// var charges = 350;
// var lateDUEbill = billWITHOUTdue + charges;
// document.write(" <h1> K- ELCTRIC BILLS </h1> <br>");
// document.write("CUSTOMER NAME :" + " " + name + "<br>");
// document.write("MONTH :" + " " + month + "<br>");
// document.write("unit number :" + " " + unit + "<br>");
// document.write("CHARGES PER UNIT :" + " " + cPu + "<br>");
// document.write("Net Amount Payable (within Due Date) = :" + " " + billWITHOUTdue + "<br>");
// document.write("Net Amount Payable (after Due Date) = :" + " " + lateDUEbill + "<br>");

                    // chapter # 35- 38
                    // task 1
// function curentDate(){ //current date and time function
//     var a = new Date();
//     document.write(a); 
// }
// curentDate(); //curent date and time fuction call 

                    // task 2
// function name (){
//     var fn = prompt("enter first name");
//     var ln = prompt("enter last name");
//     var fl = fn + ln;
//     alert(fl);
// }
// name();

                    //task 3
// var a , b ,z;
// function sum (a , b){
//       a = +prompt("enter num 1");
//       b = +prompt("enter num 2");
//       z = a+b;
//      return z;
// }
// var add = sum(a ,b);
// alert(add);

                //task 4
// var num1 , num2 , operatur , result;
// function calculator (num1 , num2 , operatur){
//     num1 = +prompt("enter a number 1");
//     operatur = prompt("enter a opertor");
//     num2 = +prompt("enter a number 2");
//     if (operatur == "+"){
//         result = num1 + num2;
        

//     }
//     else if (operatur == "-"){
//         result = num1 - num2;
//     }

//     else if (operatur == "*"){
//         result = num1 * num2;
//     }

//     else if (operatur == "/"){
//         result = num1 / num2;
//     }
//     else {
//         result = "your typing error!";
//     }
//     return result;
// }
// var cal = calculator (num1,num2,operatur);
// document.write(cal);

                        //task 5
// var a , b;
// function arg (a){
//     a =+prompt("enter a num");
//    b = a*a;
//    return b;
// }
// var sqt = arg(a);
// document.write(sqt);

                        // task 6
// var a , , i, b="";
// function fac(a){
//     a = +prompt("enter a number");
//     for (i=a.length-1; i>0; i-- ){
//            b = b*i;
//     }
//     return b[i];   
// }
// var facturial = fac(a);
// document.write(facturial);

                //task 7
// var a , b , c , i;
// function cou (){
//     a = +prompt("enter start number");
//     b = +prompt("enter last number");
//     for (i =a; i<=b; i++){
//        document.write(i);
//     }  
// }
// cou();

                //task 8


/*function hypo(){
  console.log(Math.hypot(3,4));
  console.log(Math.hypot(1));
  console.log(Math.hypot(2, 3));
  console.log(Math.hypot(8, 1, -5));
  console.log(Math.sqrt(81));
}
hypo();
*/



//task 8

//function rectangle(length,width){
  //    var length = prompt("Enter length of rectangle");
    //  var width =  prompt("Enter width of rectangle"); 
      //var formula = length * width
      //console.log(formula)
//}
//rectangle();
///////////////////////////

// with number

/*function rectangle(a,b){
  var a = 5; 
  var b =  6;
  var formula =  a * b
  console.log(formula)
}
rectangle();
*/

//task 10

/*function palindrome(){
  var a = prompt("Enter palindrome word");
  var b  = "civic";
  if( a === b){
  alert("It is right");}
  else{
    alert("it is not palindrome word")
  }
}
palindrome();*/


//task 11


/*function uppercase(str)
{
  var a = str.split(' ');
  var b = [];
    
  for(var x = 0; x < a.length; x++){
      b.push(a[x].charAt(0).toUpperCase()+a[x].slice(1));
  }
  return b.join(' ');
}
console.log(uppercase("the quick brown fox"));*/


//task 12

//function word(str){
     
  //var a = "Web Development Tutorial"
  //var b = a.replace("Web Development Tutorial","Development");
  //document.write("EXAMPLE STRING: "+a,"<br>EXPECTED OUTPUT: "+b)
//}
//word();


//task 13

/*function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(char_count('JSResourceS.com', 'o'));*/


//task 14

//for circumference

//function circum() {
  //var radius = prompt("Enter the radius of the circle");
  //var circle = 2 * Math.PI * radius;
  //alert("The circumference is "+circle+".")
//}
//circum();


//for area

//function area() {
  //var radius = prompt("Enter the radius of the circle");
  //var circle = Math.PI * radius * radius;
  //alert("The area is "+circle+".")
//}
//area();



/////////////////////////////////////////////////////////////





 











