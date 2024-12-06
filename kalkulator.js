function appendToDisplay(value) {
    const display = document.getElementById('ekran');
    display.value = display.value === '0' ? value : display.value + value;
  }
  
  function clearDisplay() {
    document.getElementById('ekran').value = '0';
  }
  
  function calculateResult() {
    const display = document.getElementById('ekran');
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Błąd';
    }
  }