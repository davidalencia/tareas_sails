//require
const Promise = require('bluebird');
const _ = require('lodash');


//var and classes


//functions
//--fibonacci
let fibonacci=Promise.promisify((cb) =>{
    console.log(0);
    return cb(null,[ 0,1]);
});
let cuerpoFibonacci=Promise.promisify(([arg1, arg2], cb)=> {
    console.log(arg2);
    return cb(null, [arg2, arg1+arg2]);
});
//--timeout
let timeStart=Promise.promisify((callback)=>{
  var sec=1000;
  return setTimeout(()=>{
    a=Math.floor(new Date()/1000);
    if(a%2)
      console.log(":)");
    else
      console.log(a);
    return callback(null, sec+1000)
  }, sec);
});

let time=Promise.promisify((sec, callback) =>{
  return setTimeout(()=>{
    a=Math.floor(new Date()/1000);
    if(a%2)
      console.log(":)");
    else
      console.log(a);
    return callback(null, sec+1000)
  }, sec);
});

//execution


fibonacci()
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci)
  .then(cuerpoFibonacci);

timeStart()
  .then(time)
  .then(time)
  .then(time)
  .then(time)
  .then(time)
  .then(time)
