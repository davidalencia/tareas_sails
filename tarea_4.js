//require
const async = require('async');


//varibles globales
let second=1000;


//funciones
//--fibonacci
function inicioFibonacci(callback) {
    console.log(0);
    callback(null, 0, 1);
}

function cuerpoFibonacci(arg1, arg2, callback) {
    console.log(arg2);
    callback(null, arg2, arg1+arg2);
}
//--timeout
function time(sec, callback) {
  return setTimeout(()=>{
    a=Math.floor(new Date()/1000);
    if(a%2)
      console.log(":)");
    else
      console.log(a);
    return callback(null, sec+1000)
  }, sec);
}

// execution
async.waterfall([
    inicioFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
    cuerpoFibonacci,
], (err, result) =>{});

async.waterfall([
  (callback)=>{
    var sec=1000;
    return setTimeout(()=>{
      a=Math.floor(new Date()/1000);
      if(a%2)
        console.log(":)");
      else
        console.log(a);
      return callback(null, sec+1000)
    }, sec);
  },
  time,
  time,
  time,
  time,
  time],
  (err, result)=>{}
);
