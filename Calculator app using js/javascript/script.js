let result = document.querySelector("#result");
let answer = document.querySelector("#answer");
let k = "";
let calcComplete = false;

let insertNumber = (number) => {
  if (calcComplete == false) {
    result.value += number;
    answer.value = "";
    k += number;
    answer.value = eval(k);
  } else {
    calcComplete = false;
    result.value = "";
    answer.value = "";
    k = "";
    result.value += number;
    k += number;
    answer.value = eval(k);
  }
};

let insertDecimal = (decimal) => {
  if (result.value == "") {
    result.value = "0" + decimal;
    k = "0" + decimal;
  } else if (!result.value.includes(decimal)) {
    result.value += decimal;
    k += decimal;
  }
};

let operator = (op) => {
    calcComplete = false;
  if (result.value != "") {
    let lastChar = result.value.slice(-1);
    if (
      lastChar !== " " &&
      lastChar !== "+" &&
      lastChar !== "-" &&
      lastChar !== "x" &&
      lastChar !== "÷"
    ) {
      if (op == "*") {
        result.value += " " + "x" + " ";
        k += " " + op + " ";
      } else if (op == "/") {
        result.value += " " + "÷" + " ";
        k += " " + op + " ";
      } else {
        result.value += " " + op + " ";
        k += " " + op + " ";
      }
    }
  }
};

let percentage = () => {
  if (result.value != "") {
    result.value = eval(result.value) / 100;
    k = eval(k / 100);
    answer.value = eval(k);
  }
};

let clearResult = () => {
  result.value = "";
  k = "";
  answer.value = "";
};

let backspace = () => {
  result.value = result.value.slice(0, -1);
  k = k.slice(0, -1);
};

let calculate = () => {
  if (result.value == "") {
    result.value = "0";
    k = "0";
  } else {
    let answerValue = eval(k);
    if (answerValue.toString().includes(".")) {
      result.value = answerValue.toFixed(2);
      answer.value = "";
      k = answerValue;
    } else {
      result.value = answerValue;
      answer.value = "";
      k = answerValue;
    }

    calcComplete = true;
  }
};
