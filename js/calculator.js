var calculator = {
  result : null,
  operador: null,
  check_input: function(button){
    var self = calculator;
    console.log("Check input");
    var input = document.getElementById("input");
    var input_text = input.textContent;
    var input_number = Number(input_text);
    var errors = document.querySelector("#error");
    if (Number.isNaN(input_number)) {
      input.value = "";
    }
  },
  set_number: function(button){
    return function(){
      var input = document.getElementById("input");
      input.value = "" + input.value + button.textContent;
      console.log(this);
    }; // return
  }, // set_number
  exec_operator: function(button){
    var self = calculator;
    return function() {
      if (self.result === null) {
        self.result = input_number;
      }
      self.operator = button.textContent;
    };
  },
  clear: function(){
    document.getElementById("clear");
    this.result = null;
    this.operator = null;
    var input = document.getElementById("input");
    input.value = "";
  },
};
document.addEventListener("DOMContentLoaded", function(event){
  // Once the Page loads
  var output = document.getElementById("result");
  var controlpad = document.getElementById("controlpad");
  var button_operators = controlpad.querySelectorAll("#operators button");
  var i;
  for (i = 0; i < button_operators.length; i++) {
    button_operators[i].addEventListener("click", calculator.check_input);
  }
  var button_numbers = controlpad.querySelectorAll("#numbers button");
  for (i = 0; i < button_numbers.length; i++) {
    button_numbers[i].addEventListener(
      "click",
      calculator.set_number(button_numbers[i]));
  }//addEventListener
  var button_clear = controlpad.querySelector("#clear");
  button_clear.addEventListener("click", calculator.clear);
  console.log("Initiated");

});
