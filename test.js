



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

