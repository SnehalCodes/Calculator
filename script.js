let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      string = eval(string);
      inputField.value = string;
    } else if (e.target.innerHTML === 'C') {
      string = "";
      inputField.value = string;
    } else if (e.target.innerHTML === '←') {
      string = string.slice(0, -1); // Remove the last character
      inputField.value = string;
    } else {
      string = string + e.target.innerHTML;
      inputField.value = string;
    }
  });
});
