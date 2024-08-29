document.addEventListener('keydown', function (event) {
    let allowedKeycodes = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'Backspace', 'Enter', '+', '-', '*', '/', '.'
    ];

    if (!allowedKeycodes.includes(event.key)) {
        event.preventDefault();
    }
});

const clr = document.getElementById("clear");
clr.addEventListener('click', () => {
    input.value = '';
});

function appendToScreen(value) {
    let screen = document.getElementById('input');
    screen.value += value;
}

document.getElementById('input').innerHTML = button;

function clearLastCharacter() {
    let screen = document.getElementById('input');
    screen.value = screen.value.slice(0, -1);
}

function calculateMe() {
    let screen = document.getElementById('input');
    let result = eval(screen.value);

    result = parseFloat(result.toFixed(5));
    screen.value = result;
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === '=') {
        calculateMe();
    }
});
