let Hr = document.getElementById("Hr");
let Min = document.getElementById("Min");
let Sec = document.getElementById("Sec");
let AM_PM = document.getElementById("AM_PM");



function Current_Date_Time(){
let hours = new Date().getHours();
let Mins = new Date().getMinutes();
let Secs  = new Date().getSeconds();
let Am_pm;

if(hours>12){
    hours = hours-12;
    Am_pm = "Pm";
}
else{
    Am_pm = "Am"
}
if(hours<10){
    hours = "0"+hours;
}
if(Mins<10){
    Mins  = "0"+Mins;
}
if(Secs<10){
    Secs = "0"+Secs;
}

Hr.innerText = hours;
Min.innerText = Mins;
Sec.innerText = Secs;
AM_PM.innerText = Am_pm;


setTimeout (() =>{
    Current_Date_Time()},1000);
}
Current_Date_Time();
