const coins = document.querySelectorAll('.coin');
document.querySelector('.btn-convert').addEventListener('click', Convert);
function Convert(e) {
  let number = document.getElementById('number').value;

  let totalCents = document.getElementById('total-cents');
  let quarters = document.getElementById('quarters');
  let dimes = document.getElementById('dimes');
  let nickels = document.getElementById('nickels');
  let pennies = document.getElementById('pennies');

  if (number === '' || number === 0) {
    totalCents.value = '';
    quarters.value = '';
    dimes.value = '';
    nickels.value = '';
    pennies.value = '';
  } else {
    totalCents.value = (number * 100).toFixed(0);
    quarters.value = Math.floor(number * 4);
    dimes.value = Math.floor((totalCents.value - quarters.value * 25) / 10);
    nickels.value = Math.floor(
      (totalCents.value - quarters.value * 25 - dimes.value * 10) / 5
    );
    pennies.value =
      totalCents.value -
      quarters.value * 25 -
      dimes.value * 10 -
      nickels.value * 5;

    coins.forEach((coin) => {
      if (coin) {
        coin.setAttribute('class', 'coin animate-heads');
      } else {
        coin.setAttribute('class', 'coin animate-tails');
      }
    });
  }

  e.preventDefault();
}
