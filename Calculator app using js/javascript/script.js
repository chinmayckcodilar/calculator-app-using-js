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
        result.value += "" + "x" + "";
        k += "" + op + "";
      } else if (op == "/") {
        result.value += "" + "÷" + "";
        k += "" + op + "";
      } else {
        result.value += "" + op + "";
        k += "" + op + "";
      }
    } else {
      if(op=="*"){
        result.value = result.value.slice(0, -1) + "x" + "";
        k = k.slice(0, -1) + op + "";
      }
      else if(op=="/"){
        result.value = result.value.slice(0, -1) + "÷" + "";
        k = k.slice(0, -1) + op + "";
      }
      else if(op=="-"){
        result.value = result.value + op + "";
        k = k + op + "";
      }
      else{
      result.value = result.value.slice(0, -1) + op + "";
      k = k.slice(0, -1) + op + "";
      }
    }
  }
};

function percentage() {

  if(k.includes('+')){
    op = '+';
  }
  else if(k.includes('-')){
    op = '-';
  }
  else if(k.includes('*')){
    op = '*';
  }
  else if(k.includes('/')){
    op = '/';
  }
  else{
    result.value=eval(k/100);
     answer.value=" ";
  }
  oper=k.indexOf(op);
  num1=k.slice(0,oper);
  num2=k.slice(oper+1);
  switch(op) {
    case '+':
      num2=parseFloat((num1 * num2 / 100));
      num1=parseFloat(num1);
      result.value=(num1+num2).toFixed(2);
      k=result.value;
      return answer.value=" ";

    case '-':
      num2=parseFloat((num1 * num2 / 100));
      num1=parseFloat(num1);
      result.value=(num1-num2).toFixed(2);
      k=result.value;
      return answer.value=" ";

    case '*':
      num2=parseFloat(( num2 / 100));
      num1=parseFloat(num1);
      result.value=(num1*num2).toFixed(2);
      k=result.value;
      return answer.value=" ";
    
    case '/':
      num2=parseFloat(( num2 / 100));
      num1=parseFloat(num1);
      result.value=(num1/num2).toFixed(2);
      k=result.value;
      return answer.value=" ";
  }
}



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


let clearResult = () => {
  result.value = "";
  k = "";
  answer.value = "";
};

let backspace = () => {
  result.value = result.value.slice(0, -1);
  k = k.slice(0, -1);
  answer.value=(answer.value).slice(0,-1);
};

