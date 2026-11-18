const inputA = document.getElementById('valA');
const inputB = document.getElementById('valB');
const screenPanel = document.getElementById('screenPanel');
const screenReadout = document.getElementById('screenReadout');

const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnTimes = document.getElementById('btnTimes');
const btnSplit = document.getElementById('btnSplit');
const btnReset = document.getElementById('btnReset');

function displayError(text) {
  screenPanel.classList.add('is-error');
  screenReadout.textContent = text;
}

function displayValue(number) {
  screenPanel.classList.remove('is-error');
  const formatted = Math.round(number * 100) / 100;
  screenReadout.textContent = formatted;
}

function readInputNumber(inputElement) {
  const cleaned = inputElement.value.trim().replace(',', '.');
  if (cleaned === '') {
    return null;
  }
  const parsed = Number(cleaned);
  if (Number.isNaN(parsed)) {
    return null;
  }
  return parsed;
}

function executeAction(actionType) {
  const a = readInputNumber(inputA);
  const b = readInputNumber(inputB);

  if (a === null || b === null) {
    displayError('Введіть правильні числа в обидва поля');
    return;
  }

  let outcome;

  if (actionType === 'plus') {
    outcome = a + b;
  } else if (actionType === 'minus') {
    outcome = a - b;
  } else if (actionType === 'times') {
    outcome = a * b;
  } else if (actionType === 'split') {
    if (b === 0) {
      displayError('На нуль ділити не можна');
      return;
    }
    outcome = a / b;
  }

  displayValue(outcome);
}

btnPlus.addEventListener('click', function () {
  executeAction('plus');
});

btnMinus.addEventListener('click', function () {
  executeAction('minus');
});

btnTimes.addEventListener('click', function () {
  executeAction('times');
});

btnSplit.addEventListener('click', function () {
  executeAction('split');
});

btnReset.addEventListener('click', function () {
  inputA.value = '';
  inputB.value = '';
  screenPanel.classList.remove('is-error');
  screenReadout.textContent = '0';
});