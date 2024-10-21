const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let valorInserido = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;

        if (buttonText === 'C') {
            valorInserido = '';
            display.textContent = '0';
        } else if (buttonText === 'DEL') {
            valorInserido = valorInserido.slice(0, -1);
            display.textContent = valorInserido || '0';
        } else if (buttonText === '=') {
            valorInserido = 'Este cauculo já existe';
            display.textContent = valorInserido;
        } else {
            if (valorInserido === '0') {
                valorInserido = buttonText;
            } else {
                valorInserido += buttonText;
            }            
            display.textContent = valorInserido;
        }
    });
});
