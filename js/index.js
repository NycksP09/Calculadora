const $buttonsNumbers = document.querySelectorAll(
  '.calculator__buttons--number'
);
const $buttonsOperators = document.querySelectorAll(
  '.calculator__buttons--operator'
);
const $inputGetNumbers = document.querySelector('.calculator__display-input');
const $buttonResult = document.querySelector('.calculator__buttons--result');
const $result = document.querySelector('.calculator__display-result');
const $clean = document.querySelector('.clean')

let n1 = null;
let n2 = null;
let operation = null;
let calculate = "";

$buttonsNumbers.forEach(function ($button) {
  $button.addEventListener('click', function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "")
    if (n1 === null) {
      n1 = Number($button.textContent.replaceAll(" ", ""));
    } else {
      n2 = Number($button.textContent.replaceAll(" ", ""));
    }
  });
});

$buttonsOperators.forEach(function ($button) {
  $button.addEventListener('click', function () {
    calculate = calculate + $button.textContent;
    $inputGetNumbers.value = calculate.replaceAll(" ", "")
    if(operation === null) {
      operation = $button.textContent
    }
  });
});

$buttonResult.addEventListener('click', function () {
  
  let result = null
  
  if(operation.includes('+')) {
    result = n1 + n2;
  }
  if(operation.includes('-')) {
    result = n1 - n2;
  }
  if(operation.includes('X')) {
    result = n1 * n2;
  }
  if(operation.includes('÷')) {
    result = n1 / n2;
  }
  if(operation.includes('%')) {
    result = n1 % n2;
  }

   $result.textContent = result;

   console.log(result)
});


$clean.addEventListener('click', function() {
  $inputGetNumbers.value = "";
  $result.textContent = "";
  calculate = "";
  n1 = null;
  n2 = null;
})


// calculate = calculate.replaceAll("x", "*")
// calculate = calculate.replaceAll("÷", "/")
// $result.textContent = eval(calculate)
