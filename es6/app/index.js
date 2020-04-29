// console.log("Hello Webpack");
// console.log("Webpack Config");
// const arr=['aman','aradhya']
// arr.pop();
// console.log(arr);
// const a=20;
// a=30;
// console.log(a+"Outside value");


// function Wizard(name,house,pet){
//     this.name=name;
//     this.house=house;
//     this.pet=pet;
//     this.greet = () => `I'm ${this.name} from   ${this.house}`
// }
// Wizard.prototype.pet_name;
// Wizard.prototype.info=function(){
//     return `I have ${this.pet} named ${this.pet_name}`
// };
// let harry=new Wizard("Harry Potter","Griffyndoor","Owl");
// harry.pet_name="Hedwig";
// console.log(harry.info());
// let string='abbccddeefff';
// let letters=new Map();
// for(let i=0;i<string.length;i++){
//     let letter=string[i];
//     if(!letters.has(letter)){
//         letters.set(letter,1)
//     }
//     else{
//         letters.set(letter,letters.get(letter)+1);
//     }
// }

// console.log(letters);
// let products=x=>y=>x*y;
// let d=products(5);
// console.log(d(2));


// const budget=()=>{
//     let balance=0;
//     let changeBal=(val)=>{
//         return balance+=val;
//     }
//     const deposit20=()=>changeBal(20);
//     const withdraw20=()=>changeBal(-20);
//     const check=()=>balance;
//     return{deposit20,withdraw20,check}
// }
// let wallet=new budget();
// wallet.deposit20();
// wallet.withdraw20();
// wallet.deposit20();
// console.log(wallet.check());

// function* gen(){
//     yield 'a';
//     yield 'b';
//     yield 'c';
// }
// let p=gen();
// console.log(p.next().value);
// console.log(p.next().value);
// console.log(p.next().value);

// let p=new Promise((resolve,reject)=> {
//     setTimeout(()=>reject('Rejected Promise Data'),3000);
    
// })
// p.then(response => console.log(response))
//     .catch(error=>console.log(error));

// const root='https://jsonplaceholder.typicode.com/posts/1';
// fetch(root,{method:"GET"})
//     .then(response => response.json())
//     .then(json => console.log(json));

// let a=Math.pow(2,5);
// let a=2**5;
// console.log(a);
// let a=[2,4,5,6,7].includes(7);
// console.log(a);

// let ob={1:'one',2:'two',3:'three'};
// let val=Object.values(ob);
// console.log(val);

// var a=10;
// function xyz(){
//     var b=10;
//     return c*b;
// }
// var a=20;
// console.log(xyz());

import {fell,areaOfCircle} from './fellowship';
console.log(fell);
console.log(areaOfCircle(5));
// console.log("Hello");
