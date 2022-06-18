// code your solution here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun());

const fn = function (){
  return ("Yet more razzling");
}
console.log(fn());

const mondayWork = function (place = "go to the office"){
  return `This Monday, I will ${place}.`
}
console.log(mondayWork());

let wrapAdjective = function(style = "*") {
  return function (adjective = "special"){
    return `You are ${style}${adjective}${style}!`
  } 
}
console.log(wrapAdjective())

function invokeThing(thing){
  return thing();
}
console.log(invokeThing(function(){
  return 4+5;
}))