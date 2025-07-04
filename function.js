const tempin = document.getElementById('temperature');
const cel = document.getElementById('cel');
const fa = document.getElementById('fa');
const sub = document.getElementById('submit');
const sol = document.getElementById('solution');


sub.onclick = function(){
 const temp = parseInt(tempin.value);
  if (isNaN(temp)) {
    sol.textContent = 'Please enter something before submitting!!';
  } else if (cel.checked) {
    sol.textContent = ((temp - 32) * 5 / 9).toFixed(2) + ' °C'; // Fahrenheit to Celsius
  } else if (fa.checked) {
    sol.textContent = ((temp * 9 / 5) + 32).toFixed(2) + ' °F'; // Celsius to Fahrenheit
  } else {
    sol.textContent = 'Please select a conversion option.';
  }
};