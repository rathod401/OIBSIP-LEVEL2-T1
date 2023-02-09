let raaji = document.getElementById('raaji');
buttons = document.querySelectorAll('button');
let raajiValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            raajiValue += buttonText;
            raaji.value = raajiValue;
        }
        else if (buttonText == 'C') {
            raajiValue = "";
            raaji.value = raajiValue;
        }
        else if (buttonText == '=') {
            raaji.value = eval(raajiValue);
        }
        else {
            raajiValue += buttonText;
            raaji.value = raajiValue;
        }

    })
}

