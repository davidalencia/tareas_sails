//varibles globales
let second=1000;

//funciones
function fibonacci(err, val1, val2, cb) {
  if(val1==0){
    console.log(val1);
    console.log(val2);
  }
  else
    console.log(val2);
  return cb(null, val2, val1+val2);
}

function time(err, sec, cb) {
  return setTimeout(()=>{
    a=Math.floor(new Date()/1000);
    if(a%2){
      console.log(":)   ");
    }
    else
    console.log(a)
    return cb(null, sec+1000)
  }, sec);
}


//---------------------------------------------------------------
fibonacci(null, 0, 1,
  (error, val1, val2)=>{
    console.log(val2);
    return fibonacci(null, val2, val1+val2, (error, val1, val2)=>{
      console.log(val2);
      return fibonacci(null, val2, val1+val2,(error, val1, val2)=>{
        console.log(val2);
        return fibonacci(null, val2, val1+val2, (error, val1, val2)=>{
          console.log(val2);
          return fibonacci(null, val2, val1+val2,(error, val1, val2)=>{
            console.log(val2);
            return fibonacci(null, val2, val1+val2, (error, val1, val2)=>{
              console.log(val2);
              return fibonacci(null, val2, val1+val2,(error, val1, val2)=>{
                console.log(val2);
              });
            });
          });
        });
      });
    });
  });


time(null, second, (err, sec)=>{
  return setTimeout(()=>{
    a=Math.floor(new Date()/1000);
    if(a%2)
      console.log(":)   ");
    else
      console.log(a)
    return time(null, sec+1000, (err, sec)=>{
      return setTimeout(()=>{
        a=Math.floor(new Date()/1000);
        if(a%2)
          console.log(":)   ");
        else
          console.log(a)
        return time(null, sec+1000, (err, sec)=>{
          return setTimeout(()=>{
            a=Math.floor(new Date()/1000);
            if(a%2)
              console.log(":)   ");
            else
              console.log(a)
            return;
          }, sec);})
      }, sec);})
  }, sec);
});
