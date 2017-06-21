//require
const readline= require('readline');


//classes
class cake {
  constructor(flavour, size){
    this.flavour=flavour;
    this.size=size;
  }
}


//var
let alfa=0;
let cakes=[];
let input = readline.createInterface({
	input:process.stdin,
	output:process.stdout,
});


//functions
function flavour() {
  return new Promise((resolve) => {
    input.question('cual es el  sabor del pastel? ', (flavour) => {
      resolve(flavour)
    });
  })
}

function size(flavour) {
  return new Promise((resolve) => {
    input.question('cual es el  tamaño del pastel? ', (size) => {
      return resolve([flavour, size] );
    });
  })
}

function saveTheCake([flavour, size]) {
  cakes[alfa++]= new cake(flavour, size);
  console.log("pastel ordenado con sabor "+flavour+" y de tamaño "+ size);
}

function doYou() {
  return new Promise((resolve) => {
    input.question('\nquieres un pastel? n/s ', (bien) => {
      if(bien=="s")
        resolve();
      else if(bien=="n"){
        if((alfa%3==0)&&alfa!=0)
          console.log("tu orden a sido rechazada por ser multiplo de 3");
        else  if((alfa%2)==0){
          saveTheCake([" sin sabor y  "," sin tamaño por ser multiplo de dos"])
          showCakes();
        }
        else
          showCakes();
        process.exit(0);
      }
      else
        throw "eso no es una opcion"
    });
  })
}

function showCakes() {
  console.log(" sabor          | tamaño ");
  for(var beta=0; beta<alfa; beta++)
        console.log(cakes[beta].flavour+"  |  "+cakes[beta].size);
}

function order() {
  return doYou().then(flavour).then(size).then(saveTheCake).catch((err)=>{
    console.log(err)
  }).then(()=>{
    order();
  })
}


//execution
console.log("Hola! bienvenido a la pasteleria");
order();
