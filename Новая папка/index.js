"use strict";

let arr = [
  {name: 'Ilyusha', age: 19},
  {name: 'Sofi', age: 18},
  {name: 'Nicon', age: 15},
  {name: 'Olga', age: 12},
  {name: 'Tjoma', age: 'как среднестатистический пидор!'},
  ];

function funfor(){
    for(let i = 0; i < arr.length; i++) {
    console.log(`Человек по имени ${arr[i]['name']} смог прожить ${arr[i].age}`);
  }
}

funfor();

function funof(){
  for(const item of arr){
    console.log(`Человек по имени ${item.name} смог прожить ${item.age}`);
  }
}

funof();

function funin(){
  for(const nom in arr){
    console.log(`Человек по имени ${arr[nom].name} смог прожить ${arr[nom].age}`);
  }
}

funin();

function funwh(){

  let i = 0;

  while(i<arr.length){
    console.log(`Человек по имени ${arr[i].name} смог прожить ${arr[i].age}`);
    i++;
  }
}

funwh();