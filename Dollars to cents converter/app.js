const coins = document.querySelectorAll('.coin');
document.querySelector('.btn-convert').addEventListener('click', Convert);
const errorEl = document.querySelector('.error-message');
document.getElementById('quarters').disabled = true;
document.getElementById('dimes').disabled = true;
document.getElementById('nickels').disabled = true;
document.getElementById('pennies').disabled = true;
document.getElementById('total-cents').disabled = true;

function Convert(e) {
  let number = document.getElementById('number').value;
  let totalCents = document.getElementById('total-cents');
  let quarters = document.getElementById('quarters');
  let dimes = document.getElementById('dimes');
  let nickels = document.getElementById('nickels');
  let pennies = document.getElementById('pennies');

  if (number === '' || number == '0') {
    totalCents.value = '';
    quarters.value = '';
    dimes.value = '';
    nickels.value = '';
    pennies.value = '';
    errorEl.style.transform = 'translateY(0vh)';
    setTimeout(() => {
      errorEl.style.transform = 'translateY(-9vh)';
    }, 1800);
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

    for (let i = 0; i < coins.length; i++) {
      coins[i].animate(
        [{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(360deg)' }],
        {
          duration: 2000,
        }
      );
    }
  }

  e.preventDefault();
}
