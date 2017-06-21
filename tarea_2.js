//------------------------------------------------------------------------------
//require(s)
const readline= require('readline');

//------------------------------------------------------------------------------
//var, class  and objects
let events=[];
let alfa=0;
class event{
  constructor(Hour, Day, Month, Title, WithWho="nadie"){
    this.hour=Hour;
    this.day=Day;
    this.month=Month;
    this.title=Title;
    this.withwho=WithWho;
  }
}
let input = readline.createInterface({
	input:process.stdin,
	output:process.stdout,
});


//------------------------------------------------------------------------------
//functions
//handler
function handler() {
  console.log("Hola! bienvenido a tu agenda");
  console.log("escribe 'help' y luego enter en cualquier para poder accesar a la lista de programas");
  input.on('line',(line) => {
	//console.log('Hola '+ line);
  if(line=="help"){
    needHelp();
  }
  else if(line=="new"){
    newEvent();
  }
  else if(line=="see"){
    see();
  }
  else if(line=="delete"){
    deleteEvent();
  }
  else if(line== 'exit'){
		process.exit(0);
	}
  });
}
//user help
function needHelp() {
  console.log("\nnew ┘               nuevo evento");
  console.log("see ┘               ver todos los eventos programados");
  console.log("delete ┘            borrar un evento");
  console.log("exit ┘              salir");
}
//new event
function newEvent(){
  var gamma=0;
  var ins="Por favor inserte ";
  var hour, day, month, title, withwho;
  console.log(ins, "la hora en formato 'hh:mm'")
  input.on('line',(line) => {
  if(gamma==0){
    console.log("la hora programada es: ", line);
    hour=line;
    console.log(ins, "el dia en formato dd");
    gamma++;
  }
  else if(gamma==1){
    console.log("el día programado es: ", line);
    day=line;
    gamma++;
    console.log(ins+"el mes  en formato mm");
	}
  else if(gamma==2){
    console.log("el mes programado es: ", line);
    month=line;
    gamma++;
    console.log(ins, "el titulo (si llega a insertar comillas por favor solo utilice las simples '')");
  }
  else if (gamma==3) {
    console.log("titulo: ", line);
    title=line;
    gamma++
    console.log(ins+"si ira con alguien si no ira con nadie puede llenar este campo con nadie")
  }
  else if (gamma==4) {
    console.log("Ira con: ", line);
    withwho=line;
    events[alfa++]= new event(hour, day, month, title, withwho);
    gamma++
    console.log("evento creado");
  }
});
}
//see events
function see() {
  console.log(" indice |  titulo              | hora  | dia | mes | iras con");
  for(var beta=0; beta<alfa; beta++ )
  if(typeof events[beta]=="undefined")
    continue;
  else
    console.log(" "+ beta+"      | "+ events[beta].title+"              | "+events[beta].hour+" | "+events[beta].day+"  |"+ events[beta].month+"   |" +events[beta].withwho);
}
//delete event
function deleteEvent() {
  var beta=0
  console.log("por favor introduzca el indice del eventoa destruir");
  input.on('line',(line) => {
    if(beta==0){
      line=parseInt(line);
      if(line<alfa){
        delete events[line];
        console.log("evento destruido: "+line );
      }
      else
        console.log("eso no es un número")
      beta++;
    }
  });
}
//------------------------------------------------------------------------------
//execution
handler();
events[alfa++]= new event("00:00", "01", "01", "ejemplo");
