


                   // Introduction (1)




 
             // Ducoument - Console - Window

// console.log("hii tayler")
// window.alert("tap ok to continue")
// document.querySelector("h1").style.color ="red";
// document.write("<h3>trtrtr</h3>")
// document.querySelector("h3").style.color ="blue";
// document.write("tayler");


// console.log("ccaca")
// console.error("ccaca")
// alert("ksksks") 
// print("fas")


             // Convert to int

// let x = -"3";
// let y = 21;
// console.log(x +" "+ y)
// console.log(`my name is ${x} and my age is ${y}`);

// console.log(-'7' + +'5');
// console.log(Number('7'));
// console.log(Number('7 ali')); //NaN => (Not a number)
// console.log(parseInt('5 ali'));
// console.log(parseFloat('8.4 aefwef'));







                   // Number (2)





             // Naumber ==> object 

// console.log(Number.isSafeInteger(56));
// console.log(Number.isInteger(56));
// console.log(Number.isNaN('SFGS' - 4));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);


             // Math ==> object

// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.abs(-7));
// console.log(Math.sqrt(9));
// console.log(Math.pow(2,3));
// console.log(Math.round(9.4));
// console.log(Math.ceil(9.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(1,5,9));
// console.log(Math.max(4,9,241));

// let Zakah = window.prompt();
// console.log(0.025 * Zakah + ' ليره لبنانيه');






                   // String (3)




             // String

// let x=7;
// console.log(x.toString());
// console.log(String(x));
// console.log(5..toString());
// console.log((3).toString());


             // name ==> Object

// let namee = "Mahmoud fuck lana"

// console.log(namee.repeat(3));
// console.log(namee.length);
// console.log(namee.charAt(4)); 
// console.log(namee[4]); 
// console.log(namee.split("m")); 


             // Cut

// console.log(namee.slice(7)); 
// console.log(namee.substring(0,8)); 
// console.log(namee.substr(0,8)); 

             // Search in string

// console.log(namee.indexOf("u")); 
// console.log(namee.lastIndexOf("u")); 
// console.log(namee.includes("f"));
// console.log(namee.startsWith("f",8));
// console.log(namee.endsWith("d",7));









                   // Array (4)


             // Array Delete and Add

// let names = ['salem','mahmoud','ali','dema'];

// names[0]='khara'
// names.unshift('mazen');   //  delete from start
// names.shift();          //  delete from start
// names.push('gigi');    //  add from end
// names.pop();            //  delete from end 


             // delete with add to array

// names.splice(0,2,'moha','six')
// names.slice(0,3)
// console.log(names.slice(0,3));   



             // Search in array

// let names = ['salem','mahmoud','ali','dema'];

// console.log(names.indexOf('salem',1));
// console.log(names.lastIndexOf('dema',3));
// console.log(names.includes('dema'));



             // Reverse and Sort(tarteb)


// let names = ['salem','mahmoud','ali','dema'];

// console.log(names.reverse());
// console.log(names.sort());


             // Concatinate and join

// let names = ['salem','mahmoud','ali','dema'];
// let okk = ['sa','ma','al','de'];

// names = names.concat(okk);
// console.log(names);
// console.log(names.join(' # '));




                             

                   // Condition (5)



// let question = prompt("enter the user name");
// let user = "tayler";
// console.log(question.toLowerCase().trim()==user);




// == Value 
// === Datatype and Value
//     <    >    =!    <=    >=  ,  &&     ||





// let Car = prompt("Choose ==> red | blue | green");

// if (Car.toLowerCase().trim() == "red") {
//       document.write("BMW");
// }
// else if (Car.toLowerCase().trim() == "blue") {
//       document.write("Marcedes");
// }
// else if (Car.toLowerCase().trim() == "green") {
//       document.write("Vlovo");
// }
// else {
//       document.write("Nothing");
// }




//         Another Way (Shorter)

// let age = prompt("enter ur age")
// age > 18? 
//       document.write("U R Accepted")
//       :age==18? 
//           document.write("U R Also Accepted")
//           :document.write("U R Very Young");


//         Another Way (Shortest) 

// let age = prompt("enter ur age");
// let result = age>18? "U R Accepted":age==18?"U R Also Accepted":"U R Very Young";
// console.log(result);



//        Switch

// let pwd = prompt("Enter Ur pwd");
// switch(pwd){
//       case "tayler":
//             console.log("Welcome Boss");
//             break;
//       case "wael":
//             console.log("Welcome wl");
//             break;
//       default:
//             console.log("Nfo5o");
// }






                   // LOOP (6)

         
                   


//  for (let i=0;i<=10;i+=2){
//       console.log(i);
//  }




// let names = ["ahmad","ali","moha","sara","dema"];

// for (let i =0;i<names.length;i++){
//       console.log(names[i]);
// }


// for (let i=names.length;i>=0;i--){
//       console.log(names[i]);
// }



 


// nested loop


// let cars = ["bmw", "mercedes", "volvo"];
// let color = ["red", "blue", "yellow"];
// let model = ["2020", "2021", "2022"];

// for (let i = 0; i < cars.length; i++) { 
//     console.log(`Car : ${cars[i]}`);
//     console.log("* * *");

//     for (let j = 0; j < color.length; j++) { 
//         console.log(`Color : ${color[j]}`);
//     }

//     console.log("* * *");
//     for (let c = 0; c < model.length; c++) { 
//         console.log(`Model : ${model[c]}`);
//     }

//     console.log("______________");
// }



//Break & Continue

// let names = ["mahmoud","Ali","sara",1,2,11,4,5,"gamal","lolo"];
// for ( let i = 0 ; i < names.length ; i++){
    
//       if (typeof names[i]!="number"){
//             continue;
//       }
    
//       console.log(names[i]);

// }






// While & Do-While

// let i = 0 ; 

// while ( i < 3 ){
//       document.write("<h1>Hello Tayler</h1>");
//       i++ ;
// }


// let j = 0 ; 

// do{
//       document.write("<h1>Wael</h1>");
//       j++ ;
// }

// while  ( j < 0 );








                   // FUNCTION (7)





// function pro (price,taxes,ads){

//       let product = price + taxes ;
//       let result = product + ads ;
//       console.log(result);
// }

// pro(300,3.2,30);




// Return        بتساعد باستعمال المتغير براالمعادله 


// function AgeByDays(age) {
//       let result = age * 365 ; 
//       return result ;
// }

// let day = AgeByDays(30);

// function AgeByHours(age) {
//       let result = day * 24 ; 
//       return result ;
// }

// let hour = AgeByHours(day);

// console.log (hour);





// hoisting

// console.log(x)     ==> error
// let x = 10 ;


// console.log(x)     ==> 10
// var x = 10 ;



// hello();     ==> 1

// function hello (){
//       return 1;
// }


// hello();     ==> error

//  let hello = function() {
//       return 1;
// }






// scope and self invoke 


// function x (){
//       console.log(1);
// }

// x();


// (function () { //  ( Self-Invoke ) U can use it to save ur Variabel from rewrite
//       var i = 1 ;
//       console.log(i);
// })();

// console.log(i); //ma fek testa3mela l2no sar local  







//arrow funtion //Short way to write funtion


// let y = _ => 3;
// console.log (y());

// let x = num => num*3;
// console.log (x(6));

// let z = (t,r) => t*r;
// console.log (z(6,2));




// Default Value for Arguments

// function hello(name="tayler") {
//       console.log(`Hello ${name}`);
// }

// hello ();     //    <=== Arguments ( Between brackets )



// Array inside function 

// function calc ( ...number ){
//       let result = 0;
//       for(let i = 0 ; i < number.length ; i++){
//             result += number[i];
//       }
//       console.log(result)
// }

// calc (8,7,5,7,7,6,7);







                   // Object (8)