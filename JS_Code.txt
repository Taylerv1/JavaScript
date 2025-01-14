


 //                   Introduction (1)


                  

 
//              Ducoument - Console - Window

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


//              Convert to int

// let x = -"3";
// let y = 21;
// console.log(x +" "+ y)
// console.log(`my name is ${x} and my age is ${y}`);

// console.log(-'7' + +'5');
// console.log(Number('7'));
// console.log(Number('7 ali')); //NaN => (Not a number)
// console.log(parseInt('5 ali'));
// console.log(parseFloat('8.4 aefwef'));







//                    Number (2)





//              Naumber ==> object 

// console.log(Number.isSafeInteger(56));
// console.log(Number.isInteger(56));
// console.log(Number.isNaN('SFGS' - 4));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);


//              Math ==> object

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






 //                   String (3)




//              String

// let x=7;
// console.log(x.toString());
// console.log(String(x));
// console.log(5..toString());
// console.log((3).toString());


//              name ==> Object

// let namee = "Mahmoud fuck lana"

// console.log(namee.repeat(3));
// console.log(namee.length);
// console.log(namee.charAt(4)); 
// console.log(namee[4]); 
// console.log(namee.split("m")); 


//              Cut

// console.log(namee.slice(7)); 
// console.log(namee.substring(0,8)); 
// console.log(namee.substr(0,8)); 

//              Search in string

// console.log(namee.indexOf("u")); 
// console.log(namee.lastIndexOf("u")); 
// console.log(namee.includes("f"));
// console.log(namee.startsWith("f",8));
// console.log(namee.endsWith("d",7));









//                    Array (4)


//              Array Delete and Add

// let names = ['salem','mahmoud','ali','dema'];

// names[0]='khara'
// names.unshift('mazen');   //  delete from start
// names.shift();          //  delete from start
// names.push('gigi');    //  add from end
// names.pop();            //  delete from end 


//              delete with add to array

// names.splice(0,2,'moha','six')
// names.slice(0,3)
// console.log(names.slice(0,3));   



//              Search in array

// let names = ['salem','mahmoud','ali','dema'];

// console.log(names.indexOf('salem',1));
// console.log(names.lastIndexOf('dema',3));
// console.log(names.includes('dema'));



//              Reverse and Sort(tarteb)


// let names = ['salem','mahmoud','ali','dema'];

// console.log(names.reverse());
// console.log(names.sort());


//              Concatinate and join

// let names = ['salem','mahmoud','ali','dema'];
// let okk = ['sa','ma','al','de'];

// names = names.concat(okk);
// console.log(names);
// console.log(names.join(' # '));




                             

//                    Condition (5)



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






//                    LOOP (6)

         
                   


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








//                    FUNCTION (7)





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







//                    Object (8)





       // Create object and give it (Property & Method(Function))



//   let car = {
//       title: "mercedes",
//       color: ["black","white","red"],
//       model: [2020,2021,2022],

//       go: function() {
//             return 1;
//       }
//   };

// console.log (car.go());





//                            BIG EXAMPLE



// let x = prompt();

// let user = {

//       //Property
//       name: "mahmoud",
//       age: x,
//       gender: "male",
//       major: "IT",
//       active: true ,

//       phonenumber: {
//             first: 0210120,
//             second: 9999999,
//       },


//       //Method
//       isActive: function(){
//             if (user.active === true ){
//                   return "u are active";
//             }
//             else 
//                   return "u are not active";
//       },


//       getAge: function(){
//             if (user.age > 18 ){
//                   return "U r accepted";
//             }
//             else 
//                   return "U r rejected";
//       }

// }


// console.log(user.getAge());






// add properties or method outside the object


// let car = {};
// car.title = "BMW";
// car.hello = function(){
//       return "Hello tayler"
// }


// // another way to create object

// let user = new Object({
//       name: "Mahmoud"
// })

// user.age = 22;


// // print

// console.log (car.hello());
// console.log (user.name);
// console.log (user.age);







// this  keyword 


// let car = {
//       name: "BMW",

//       getName: function(){
//             return this.name;       //this means object which is car
//       }
// }

// console.log (car.getName());





// let x = this ;           //this means object which is window
// console.log (x);      





// let y = function(){
//     return this;      //in function = this also means object which is window
// }

// console.log (y());  



// however in function with "strict mode" ==> undefined  
// to turn on srtict mode    (   المود الصارم   ) ==> "use strict"






{/* <button onclick=”this.style.color=‘red’“> Submit </button> */}

//                      |
//                      |               

//this in EVENT refer to the object which is button 






//                     Object.Create() to copy object



// let user = {     //create object

//       name: "mahmoud",

//       getName: function () {
//             return `Hello ${this.name}`; // use this to fix error
//       }
// }

// // print object user 

// console.log (user.getName())


// // create another object and copy data from user to user2

// let user2 = Object.create(user);
// user2.name = "sami"
// console.log (user2.getName());







// Merge ( دمج ) objects ==> Object.assign



// let a1 = {
//       num1: 1,

//       hello: function () {
//             return `num1 is ${this.num1}`
//       }

// }


// let a2 = {
//       num2: 2,
// }

// let a3 = {
//       num3: 3,
// }


// let a4 = Object.assign(a1,a2,a3,{
//       num99: 99,
// })

// console.log(a4);









//                    DOM (9)



//              Selector in JS


// document.getElementById("ww").style.color="red";
// document.getElementsByClassName("gg")[0].style.color = "green";
// document.getElementsByTagName("p")[1].style.color = "blue";
// document.querySelector(".fuc").style.background = "#444";
// document.querySelector("#qq").style.background = "#af1";
// document.body 
// document.links
// document.title
// document.images
// document.forms






//              Set & Get in JS


// let img = document.querySelector(".xx");

// Set :

// img.setAttribute("alt","coooool");  // Set
// img.setAttribute("title","wennns");  // Add


// Get :

// console.log(img.hasAttributes());
// console.log(img.hasAttribute("class"));
// console.log(img.attributes);
// console.log(img.attributes[2]);


// Remove :

// img.removeAttribute("alt");
// img.removeAttribute("id");

// console.log (img);







//              Sibling & Parents


// let h1 = document.getElementById("xx");

// console.log(h1.previousElementSibling)  // previous element 
// console.log(h1.previousSibling)  //  previous any thing

// console.log(h1.nextElementSibling)  // next element 
// console.log(h1.nextSibling)  // next any thing

// console.log(h1.parentElement.style.background = "#444")  // Element's Parent








// Inner & Outer Html // Inner & Outer text 


// let box = document.querySelector("#box");

// box.innerText = "<h1> tayleeerrr </h1>";
// box.outerText = "<h1> tayleeerrr </h1>";
// box.innerHTML = "<h1> tayleeerrr </h1>";
// box.outerHTML = "<h1> tayleeerrr </h1>";
// box.textContent = "tayleerr";

// console.log(box);







//                 3 Ways to add style in JS 




// let container = document.getElementById ("container") ;
// container.innerHTML = "<h1> Tayler Space </h1>";


// element.style.property  ==> 1st Way

// container.style.backgroundColor = "#444";
// container.style.color = "#fff";
// container.style.padding = "10px";
// container.style.margin = "10px";
// container.style.letterSpacing = "1.3px";
// container.style.borderLeft = "7px solid yellow";



// Remove Property

// container.style.removeProperty("border-left")



// container.style.setProperty ( , )  ==> 2nd Way

// container.style.setProperty("border-left","11px solid red")





// element.style.cssText  ==> 3rd Way

// container.style.cssText = `

// background-color: #fff;
// padding : 10px;
// margin : 10px;
// letter-spacing : 1.3px;
// border-left : 11px solid yellow;

// `










//          Add Html & Css content in JS file






// 1st Way 

// document.body.innerHTML += `
// <h3> kkkkkkk </h3>

// `



// 2nd Way



//  1 - Create Element

// let container = document.createElement("div");
// let text = document.createElement("h1");
// let img = document.createElement ("img");


//  2 - Add a value for elements

// let content = document.createTextNode ("Tayler World")
// img.src = "jpg-1.jpg"


//  3 - add the elements to the body

// text.appendChild(content);

// container.appendChild(text);
// container.appendChild(img);

// document.body.appendChild(container);



// img.style.width = "200px";
// container.style.setProperty("background-color","#444");
// container.style.color = "#aa3";
// container.style.textAlign = "center";
// container.style.padding = "10px";
// container.style.setProperty("border-top","14px solid #aa3");








//                        Project - Cards



// let names = ["Ahmad","Mode","Ali","salem"];
// let ages = ["14 years old","22 years old","30 years old","17 ears old"];

// let container = document.createElement("div");
// document.body.appendChild(container);
// container.style.textAlign = "canter";


// function element (names,ages) {

//       //Create

//       let card = document.createElement("div");
//       let text = document.createElement("h3");
//       let age = document.createElement("p");
//       let img = document.createElement("img");


//       // Add Value

//       let textContent = document.createTextNode (names);
//       let ageContent = document.createTextNode (ages);
//       img.src = "jpg-1.jpg"


//       //Add to container
//       container.appendChild(card)
//       card.appendChild(text);
//       card.appendChild(age);
//       card.appendChild(img)
//       text.appendChild(textContent);
//       age.appendChild(ageContent);

//       //Add All to body
//       document.body.appendChild(container)

//       //Style

//       card.style.setProperty("width","200px");
//       card.style.textAlign = "center";
//       card.style.backgroundColor = "#444";
//       card.style.padding = "10px";
//       card.style.margin = "5px";
//       card.style.display = "inline-block";
//       card.style.borderRadius = "30px";

//       img.style.setProperty("width","100%");
//       img.style.setProperty("border-radius","30px");



// }

// for (let i = 0 ; i < 4 ; i ++) {

//       element(names[i],ages[i]);

// }







// Events ==> Different Between AddeventListener & OnEvent(onclick)





// onclick ==> just 1 event 

// let btn = document.getElementById("btn")

// btn.onclick = function () {
//       console.log ("tayllerr");
// }
  
// addEventListener 2 or more event

// btn.addEventListener("click",function(){

//       console.log("hello");
// })

// btn.addEventListener("click",btn.style.backgroundColor = "#333")






//           Mouse events

// let btn = document.getElementById("btn");
// btn.onclick  //        الضغط ضغطه كامله   
// btn.onmousedown  //     عند الضغط على زر الفأرة فوق العنصر
// btn.onmouseover  //      عندما يأتي مؤشر الماوس فوق العنصر 
// btn.onmousemove     //      عندما يتحرك الماوس فوق العنصر
// btn.onmouseout     //  عندما يغادر مؤشر الماوس العنصر

// btn.onmouseup= () => {     //  عندما يتم تحرير زر الماوس فوق العنصر
//       document.body.style.backgroundColor = "#444"   
// }


//           Keyboard events

// let input = document.getElementById("input");

// input.onkeydown    // عندما يضغط المستخدم على المفتاح
// input.onkeyup = () => {    // عندما يقوم المستخدم بتحرير المفتاح
//      input.style.border = "11px red solid"
// }


//           Form events

// let submit = document.getElementById("submit");


// submit.onfocus   //  عندما يركز المستخدم على عنصر
// form.onsubmit    // عندما يرسل المستخدم ال form
// input.onblur     //  عندما يكون التركيز بعيدًا عن عنصر ال form
// onchange          //   عندما يقوم المستخدم بتعديل أو تغيير قيمة عنصر ال form

// let Form = document.getElementById("form");

// input.onblur=  () => {    
//             document.body.style.backgroundColor = " red ";
//        }




//           Window/Document events


// onload         // عندما ينتهي المتصفح من تحميل الصفحة
// onunload       // عندما يغادر الزائر صفحة الويب الحالية ، يقوم المتصفح بإلغاء تحميلها
// onresize


// onresize = () => {
//       document.body.style.backgroundColor = "red"
// }

//                      OR

// window.addEventListener("resize",()=> {
//       document.body.style.backgroundColor = "red"
// })




//                    Currency Exchange Software


// let Form = document.getElementById("form"); 
// let layra = document.getElementById("layra");
// let USD = document.getElementById("USD");
// let h = document.getElementById("h");


// Form.style.backgroundColor = "#444";
// Form.style.width = "200px";
// Form.style.height = "200px";
// Form.style.display = "flex";
// Form.style.alignItems = "center";
// Form.style.justifyContent = "center";
// Form.style.flexDirection = "column";
// Form.style.margin = "40px";

// USD.style.marginTop = "10px";
// USD.style.fontSize = "16px";
// USD.style.color = "gray";
// USD.style.backgroundColor = "#222";

// layra.style.fontSize = "16px";
// layra.style.color = "gray";
// layra.style.backgroundColor = "#222";

// h.style.position = "relative";
// h.style.bottom = "20px";
// h.style.color = "#321";


// layra.addEventListener("focus",()=> {layra.value = "" ; layra.style.backgroundColor = "#222"});
// USD.addEventListener("focus",()=> {USD.value = "" ; USD.style.backgroundColor = "#222"});

// layra.addEventListener("keydown",()=> {USD.value = `${layra.value / 89000}$` ; USD.style.backgroundColor = "#321"})
// USD.addEventListener("keydown",()=> {layra.value = `${USD.value * 89000}L.L` ; layra.style.backgroundColor = "#321" })








//                      Before & After & Append



// let box = document.getElementById("box");
// let before = document.getElementById("before");
// let after = document.getElementById("after");
// let append = document.getElementById("append");
// let content = document.getElementById("content");
// let container = document.getElementById("container");


// box.style.marginTop = "100px";
// container.style.backgroundColor = "#444";
// container.style.height= "50px";


// before.onclick = () => {
//       container.before(content)
// }

// after.onclick = () => {
//       container.after(content)
// }

// append.onclick = () => {
//       container.append(content)
// }










//                     NavBar Project




// let box = document.getElementById("box");
// let openBtn = document.getElementById("open");
// let closeBtn = document.getElementById("close");
// let container = document.getElementById("container");



// closeBtn.onclick = function() {

//       container.classList.add("hide")
//       openBtn.classList.remove("hide")
//       this.classList.add("hide")

// }


// openBtn.onclick = function() {

//       container.classList.remove("hide")
//       closeBtn.classList.remove("hide")
//       this.classList.add("hide")

// }







//               Add / Remove / Toggle class


// let hello = document.getElementById("hello");

// hello.onclick = function() {
//       hello.classList.toggle ("style");
// }





//                    auto event


// let txt = document.getElementById("txt");
// let btn = document.getElementById("btn");

// onload = function () {
//       txt.focus()

// }

// txt.oncontextmenu = function () {  
//       txt.blur()
// }








//                    BOM (10)


//      BOM ==> Browser Object Model ( Window Object )
//      window ==> Global Object in BOM




//     Window.scroll

// window.document.body.style.height = "2000px";
// window.document.body.style.width = "2000px";


// let btn = document.createElement("button");
// btn.innerText = "^";

// btn.style.position = "fixed";
// btn.style.bottom = "10px";
// btn.style.right = "10px";
// btn.style.width = "50px";
// btn.style.height = "50px";
// btn.style.backgroundColor = "#444";
// btn.style.color = "#fff";
// btn.style.fontSize = "20px";
// btn.style.borderRadius = "50%";
// btn.style.display = "none";

// document.body.appendChild(btn);



// window.onscroll = function () {
//       if (window.scrollY > 200 || window.scrollX > 200) {
//             btn.style.display = "block";
//       }
//       else {
//             btn.style.display = "none";
//       }
// }


// btn.onclick = function () {
//       window.scrollTo({
//             top: 0,
//             left: 0,
//             behavior: "smooth"
//       })
// }






//     Window.screen


// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);
// console.log(screen.availHeight);
// console.log(screen.colorDepth);
// console.log(screen.pixelDepth);
// console.log(screen.orientation.type);







//     Window.location


//  console.log(location.href);
//  console.log(location.protocol);
//  console.log(location.host);
//  console.log(location.hostname);
//  console.log(location.port);
//  console.log(location.pathname);


//  location.assign("https://www.google.com");
//   location.replace("https://www.google.com");







//         SetTimeout & Setinterval

     
//         SetTimeout

// let stop = setTimeout(function () {
//        console.log("hello");
// },3000)     // 3 sec  ==> create timer for 3 sec for once


// clearTimeout(stop); // stop the timer


// //         Setinterval


// let i = 0;
// let hello = setInterval(function () {
//       console.log(i++);

//        if (i == 5) {
//               clearInterval(hello);
//        }
// },1000)     // 1 sec  ==> create timer for 1 sec for many times







//      localStorage & sessionStorage

// String only
// localStorage.setItem("name","mahmoud");
// localStorage.text = "hello";

// console.log( typeof localStorage.getItem("name"));
// console.log(localStorage.text);





//  Any type

// localStorage.setItem("age", JSON.stringify(22));
// console.log(JSON.parse(localStorage.getItem("age")));


// localStorage.anything = JSON.stringify({  //  Create Object
//        name: "Ali",
//        age: 44
// })

// console.log(JSON.parse(localStorage.anything));



// console.log(localStorage.key(1));  // 0 ==> index ==> get item by index





// // remove item

// localStorage.removeItem("name"); // remove item by name

// localStorage.clear(); // remove all items




//     Keyup & LocalStorage

// let txt = document.getElementById("txt");

// txt.onkeyup = function () {
//        localStorage.setItem("txt",txt.value)
// }


// onload = function () {
//        txt.value = localStorage.getItem("txt")
// }







//    Change Background Color 


// if (localStorage.length > 0) {
//        document.body.style.backgroundColor = localStorage.color;
// }


// function changeColor(color) {

//        localStorage.setItem("color",color)
//        document.body.style.backgroundColor = color;

// }


