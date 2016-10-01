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

// The print
var print = function(data){
  console.log(data);
};

//The calls
if (operator === "suma"){
  sum(number_one, number_two);
  print(result);
} else if (operator === "resta") {
  subs(number_one, number_two);
  print(result);
}
