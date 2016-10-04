calculator = {
  op1 : null,
  op2: null,
  operador: null,
  check_input: function(){
    var input = document.getElementById("input");
    var input_text = input.textContent;
    var input_number = Number(input_text);
    var errors = document.querySelector("#error");
    if (input_number !== NaN) {
      if (this.opt1 === null) {
          this.op1 = input_number;
      }else{
        this.op2 = input_number;
      }
    }else{
      console.log("Error");
    }
  },
};
document.addEventListener("DOMContentLoaded", function(event){
  var output = document.getElementById("result");
  var controlpad = document.getElementById("controlpad");
  var button_operators = document.querySelectorAll("#operators");
  var i = 0;
  for (i = 0; i < button_operators.length; i++) {
    button_operators[i].addEventListener("click", calculator.check_input());
  }
});
