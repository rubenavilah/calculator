// Variables of the calculator
// var nombre = prompt("Primero me gustaria saber tu nombre");
// var bienvenida = alert("Bienvenido a la calculadora " + nombre);
var data_one = prompt("Ingresa un número");
var data_two = prompt("Ingresa otro número");
var operator = prompt("Ingresa un operador");

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
