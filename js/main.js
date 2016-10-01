// Variables of the calculator
// var nombre = prompt("Primero me gustaria saber tu nombre");
// var bienvenida = alert("Bienvenido a la calculadora " + nombre);

var data_one = prompt("Ingresa un número");
if (typeof data_one === 'string' || data_one instanceof String) {
  do {
    prompt("Ingresaste texto, por favor ingresa un número");
  } while (typeof data_one === 'number' || data_one instanceof Number);
}

var data_two = prompt("Ingresa otro número");
if (data_two === String) {
  isString();
}
var operator = prompt("Ingresa un operador");
operator = operator.toUpperCase();

var isString = function(param){
  prompt("Ingresaste texto, por favor ingresa un número");
};
//Comprobate if is a String

//prompts to number
var number_one = parseFloat(data_one);
var number_two = parseFloat(data_two);

//Sum
var sum = function(){
  return result = number_one + number_two;
};

//Substraction
var subs = function(){
  return result = number_one - number_two;
};

//Division
var div= function(){
  return result = number_one / number_two;
};

//Multiply
var mult = function(){
  return result = number_one * number_two;
};

//Module
var mod = function(){
  return result = number_one % number_two;
};

//Switch with operator options
switch(operator){
//Sum multicase
  case "SUMA" : case "SUM" : case "+":
    console.log(sum());
    break;
  case "RESTA": case "SUBTRACTION": case "-":
    console.log(subs());
    break;
  case "MULTIPLICACIÓN": case "MULTIPLICATION": case "*":
    console.log(mult());
    break;
  case "DIVISIÓN" : case "DIVISION": case "/":
  //obtiener first result
      var result=div();
  // evaluates if the result gave isNaN, Infinity or Error
        if (isNaN(result)==true || result===Infinity || result==="Error")
            console.log("Esta operación no es posible");
        else
  //f it's not isNaN, Infinity or Error then print
            console.log(result);
    break;
  case "MÓDULO": case "MODULE" : case "%":
      var result=mod();
        if (isNaN(result)==true || result===Infinity || result==="Error")
            console.log("Esta operación no es posible");
        else
            console.log(result);
    break;
}
