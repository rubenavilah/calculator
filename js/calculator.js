var calculator = {
  op1 : null,
  op2: null,
  operador: null,
  check_input: function(){
    console.log("Check input");
    var input = document.getElementById("input");
    var input_text = input.textContent;
    var input_number = Number(input_text);
    var errors = document.querySelector("#error");
    if (!Number.isNaN(input_number)) {
      console.log("Is a number");
      if (this.opt1 === null) {
          this.op1 = input_number;
      }else{
        this.op2 = input_number;
      }
    }else{
      console.log("Error");
    }
  },
  set_number: function(button){
    return function(){
      var input = document.getElementById("input");
      input.value = "" + input.value + button.textContent;
      console.log(this);
    }; // return
  }, // set_number
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
  console.log("Initiated");
});
