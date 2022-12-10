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

 