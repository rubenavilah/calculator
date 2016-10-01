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
  result = number_one + number_two;
  return result;
};

//Substraction
var subs = function(){
  result = number_one - number_two;
  return result;
};

//Division
var div= function(){
  return result = number_one / number_two;
};

//Multiply
var mult = function(){
  return result = number_one * number_two;
};

// The print
var print = function(data){
  console.log(data);
};

/*
//The calls
if (operator === "suma"){
  sum(number_one, number_two);
  print(result);

} else if (operator === "resta") {
  subs(number_one, number_two);
  print(result);
}
*/
//Switch with operator options
switch(operator){
//multi case
  case 'SUMA' : case 'SUM' : case "+":
  console.log(sum());
  break;
  case 'RESTA': case "-":
  console.log(subs());
  break;
  case 'DIVISIÓN' : case "/":
  console.log(div());
  break;
  case 'MULTIPLICACIÓN': case "*":
  console.log(mult());
  break;
}
