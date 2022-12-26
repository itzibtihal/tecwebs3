// affichage html
/*document.write(' hey haha');
// affichage au console
console.log('fi9 meana a rachid');
let name="ali";
console.log(name.charAt(0));
*/
// if 


/*let num1= 5;
num1= 1212
let num2= 10;

if( num2 > num1){
    console.log('hello')
}*/


/*let num1= prompt('num1');
let num2= prompt('num2');
if( num2 > num1){
    console.log('hello')
}*/



/*let role = prompt('whats your role');
if (role == 'admin'){
    document.write('weeesh a ladmin cv ?');
    document.write('u can update create delete read any product');
}
else if (role == 'moderator'){
    document.write('weeesh a lmoderator cv ?');
    document.write('u can update create  read but u cant delete any product');
}
else {
    document.write('weeesh a lusercv ?');
    document.write(' sorryy u can jst read any product');
}
*/



/*let result = prompt('please dekhul la note dyalk ');

if(result < 10) {
    document.write('a endek ratt')
}
else if( result <= 12){
     document.write('passable');
} else if (result <= 16){
     document.write('bien')
}else if (result <= 18){
     document.write ('t.bien');
}else{
    document.write('excelent!')
}*/


/*let  age = prompt(' whats your age ?');
age >= 18 ?
  document.write('hello usser')
  :document.write("no you're to young ")*/



/*let age = prompt("whats your age ?");
let result = age > 18?
 'hello user'
  :age == 18?
   'you are 18 now wlcm'
   : 'nah duuude you are very young for it';
console.log(result)*/





// --------------------------switch--------
// conditional statements
// switch adat chartya bhal if 


/*let names = prompt('entrer votre nom');
if (names == ibtihal){
    document.write('hey ibtihal hru ?');
}else if (names == rania){
      document.write(' hey rania ?');
}else if( names == none){
     document.write(' hey none :) ');
} else{
     document.write('oh noo ')
}*/


// if we have jst the ==not > not <let namees = prompt('entrer votre nom');
/*switch(namees){
    case 'ibtihal':document.write('hey ibtihal');
      break;
    case 'rania': document.write('hey rania');
      break;
    case 'none': document.write('hey none');
      break;
    default:
        document.write('ops who are u ?')

}*/


// ------------- loop 1
/*console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');
console.log('hello world');*/
// in case we want to repeat the hello world 1000 time so we need to use a loop 
// here we will use the for loop 
// start ,condition, steps
/*for(  let i = 0  ;  i < 3  ;  1  )
{
  console.log('hello world');
}*/

/*let naames=['ahmed','ali','amine','ziad'];
//for ( let i = 0 ; i < 4 ; i++)
for( let i = 0 ; i < naames.length ; i++) 
{
  console.log(naames[i]);
}*/


/*let x = 'ahmed';
for( let i = 0 ; i < x.length ; i++) 
{
  console.log(x[i]);
}*/

/*let x = 'ahmed';
for( let i = 4 ; i < x.length ; i--) 
{
  console.log(x[i]);
}*/

/*function hello()
{
  document.write('hello world')
}
hello();*/



/*function hello(name)
{
  document.write('hello world' +name)
}
//hello('ali');
*/














/*
console.log(hello()) 
console.log (x)
  var x = 10 ;
function hello (){
   return 'hi '
} hello();
*/







// ----- function calc age 
/*function calcAge(age)
{
  let result = age * 365;
  document.write(result);
}
calcAge(19);
calcAge(22);*/


// ----- taxes +tva
/*function prod( price , taxes , ads)
{
 let product = price + taxes;
 let result = product + ads;
 document.write(result);
} 
prod(250,3,5);
prod(870,4.5,50);*/



// bash local variable yweli global
/*function prod( price , taxes , ads)
{
 let product = price + taxes;
 let result = product + ads;
  return result;
} 
 // stockena la valeur dyal resultat f  variable x 
let x= prod(250,3,5);
document.write(x);*/








// same
/* function awallo()
 {
   return 1;
    //console.log('hey');
 }
 // bhal ila nit kan3yto ela 1
 // return huwaa akheer ster mn kolla function manjiwsh o nktbu haja moraha
 console.log(    awallo()     );
*/

// user entre lage program calcul
/*let age = prompt('entrer votre age');
function days (age)
{
  let result = age *365;
  // document.write(result)
  return result ;
}
document.write('<h1> woow its been </h1>');
  days(age);
document.write('<h2> DAYS !</h2>');
 let day = days(age);



function hours(age)
{
 let result = age * 24;
 return result;
}
 let hr = hours( day);
 document.write('and see its more than  ');
 document.write(hr +'hours ');*/




/*
// global

   //var x = 10 ;
  //console.log(x);

// local
  function hello(){
     var x = 10 ;
    //console.log(x)

       
     //function local
  }hello();
    //console.log(x)*/



/*function hello(){}
if(){}
for (){}
while(){}*/


/*
     for (var i = 0 ; i <= 10 ; i++ ){

     }console.log(i)

     */
// ghade ye3tina 100 hit i global variable ohadxi sale7 lkolchi mnghir l functions
// o bash nrj3o dek i local variable maghandeclarywhach ka var ghade nkhdoha b let 
// hade mora la mise a jour dyal js f 2015
// hit ki lcode kychuf lvar kytle3a lfu9 o let mktle3ch lfu9 katb9a blastha salha ghi ldeq l boucle fash khdamin usf


// exemple : nta khdammea chi hed ela nafss l project 
// nnta derty let count =0
// ja cchi hed khdam  meaq f nafss l projet o dar let count =10
// o hit let global var ghady y ovverdaydi ela l8imalwela
// atle3 bhal haqa
// let count =0;
// let count =10;
//o ghade ytle3 lina error hit kima glt likom let mkn3awdoch liha declaration deux fois 


/*(function (){
   console.log('hello');
}())*/

/*console.log (  x()  );
function x(){
  function y(){return 1}
  return y();
  function y(){return 0}
}*/



/*function hello (name = 'ahmed'){
  console.log(`hello ${name}`);
} hello('abderahman') */


/*
     function calcAge(age = 0){
       console.log(age * 365 );
     } calcAge();
*/



/*
     // function calc ( num1, num2)
     function calc ( ...num){
         //console.log( num1 + num2)
         //console.log(num)
            let result = 0;
         for (let i = 0 ; i < num.length ; i++){
           result += num[i];
         }
         console.log(result);
     } calc(10,20,25,14,87)
    
 */


// arrow function == adawal sahmia
/*let x = function (){
  return 1;
}*/
// ghade tweli

/*let x = () => {
  return 1 ;
} */

// ghade tweli 
//let x =() => 1 ;
// ila maendnash tachi parametre 
//let x = _ => 'hello';
//let x = (num) => num*2 ;
//let x = num => num*2;
//console.log(x())






// object

/*let x = prompt('saaaaaalaaam achno smitek');
document.write(`<h1> heeey mr ${x} </h1>`)*/



/*let car ={
       // propreties
     price : 500000 ,
     title : 'bmw',
     model : 2020 ,
     color : ['white','black'],
     // function
     hello:function(){
      return 'hello';
     }
}
console.log(car.color); */

/*let user = {
  // properties
  firstName : 'ibtihal',
  lastName : 'boukhanchouch',
  email : 'testing@gmail.com',
  age : 19 ,
  skills :['html', 'css','js','php','java','spring','angular'],
  active: true,
  phoneNumber :{
      first :'06584157415',
      second :'0578748748',
  },
  adress :{
      agadir:'hay elmohmadi',
      ouarzazat : 'hay elmassira',
  },
  // method
    isActive : function() {
       if ( user.active === true){
       return 'hello user';
       }else {
        return 'sorry yre not active';
      }
    },
    getAge : function(){
      if( user.age >= 18){
         return 'available';
      }else{
         return 'unavaible';
      }
    },
};
console.log(user)
*/



/*let user = {
     name: 'ibtihal'
}; 
user.hello = function(){
  return 'hello';
}
console.log(user.hello())*/
//let user = {};
// new string new number .....boolean
/*let user = {
   title : ' abdo'
};
user.hello = function (){
   return hello;
}
console.log(user.hello());
console.log(user.title);
user.title ='ahmed';
console.log(user.title);*/

// creat object
// let user = {};


//OOP
/*let user = new String();
console.log(user)*/


//----------------------this-------------------------


/*
// this  keyword
// this tochir l object li katntami lih
let user = {
  namee: 'ibtihal',

  getNamee: function () {
    // return user.namee;
    return this.namee;
  }

}
console.log(user.getNamee());
*/



//this as window
//let x = this;
//console.log(x);
//console.log( x == window);
//this.alert();




//this function == window
/*
function hello (){

 return this;
}
*/
//console.log(hello());



// ------------this in function with strict mode -----------


/*
// strict mode
 //let x =  10;
 x = 10;
 console.log(x);*/


// this f strict mode atrje3  undefined

/* "use strict";
function hello(){
  return this;
}
console.log(hello())
*/



//object creat
// b this
/*
// object   old way
let user1 = {
  namee: 'ibtissam',
  getNamee: function () {
    //return `hello ${user1.namee}`;
    return 'hello' + user1.namee;

  }
}
console.log(user1);

// db ander object jded o nder fih gae daqchili kyn f lobject l9dem

let user2 = Object.create(user1);
console.log(user2);
// edit smtg in 1object in the 2sd one
user2.namee = 'ali';
user2.age = 30;
console.log(user2.namee)
console.log(user2.age);*/


// dameg l object

/*
let a1 = {
  num1 :1,
   hello:function (){
    return 'salam khuya ziad ashkat3awed wesh 9rity mzyan?';
   }
}
let a2 = {
  num2 :2,
}
let a3 = {
  num3 :3,
}

let a4 = Object.assign(a1,a2,{
  num4 : 4
})
a4.num1 = 10 ;
a4.r = 100;
// assign object 
console.log(a4)

*/
/*
let part1 = document.getElementById("part1");
//part1.innerHTML = 'test';
//part1.style.color = red ;
console.log( part1 );
*/