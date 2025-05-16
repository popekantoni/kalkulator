function pokazNaEkranie(value) {
    const display = document.getElementById('ekran');
    display.value = display.value + value;
}

function wyczyscEkran() {
    document.getElementById('ekran').value = '';
}

function oblicz() {
    const display = document.getElementById('ekran');
    try {
        const expression = display.value;

        const liczby = expression.match(/-?\d+(\.\d+)?/g) || [];

        let maxDecimalPlaces = 0;
        liczby.forEach(liczba => {
            const parts = liczba.split('.');
            if (parts.length === 2) {
                maxDecimalPlaces = Math.max(maxDecimalPlaces, parts[1].length);
            }
        });

        let result = eval(expression);

        if (maxDecimalPlaces > 0) {
            result = parseFloat(result.toFixed(maxDecimalPlaces));
        }

        display.value = result;
    } catch (error) {
        display.value = 'Błąd';
    }
}

function obliczPierwiastek() {
    const display = document.getElementById('ekran');
    try {
        let value = parseFloat(display.value);
        if (value < 0) {
            display.value = 'Błąd';
        } else {
            display.value = Math.sqrt(value);
        }
    } catch (error) {
        display.value = 'Błąd';
    }
}

function otworzOkienko() {
    document.getElementById("Okienko").style.display = "flex";
}

function zamknijOkienko() {
    document.getElementById("Okienko").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("Okienko");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.', '^', '(', ')'];

    if (allowedKeys.includes(key)) {
        pokazNaEkranie
            (key === '^' ? '**' : key);
    } else if (key === 'Enter') {
        oblicz();
    } else if (key === 'Backspace') {
        const ekran = document.getElementById('ekran');
        ekran.value = ekran.value.slice(0, -1);
        if (ekran.value.length === 0) ekran.value = '0';
    } else if (key === 'Escape') {
        wyczyscEkran();
    }
});

function openKawa() {
    window.open("kawa.html");
}