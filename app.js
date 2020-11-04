let result = document.querySelector('.result')
let equalButton = document.querySelector('.equal');

equalButton.addEventListener('click', () => result.value = eval(result.value))