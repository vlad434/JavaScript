document.querySelector('.btn-convert'). addEventListener('click', Convert);

document.getElementById('total-cents').disabled = true;
document.getElementById('quarters').disabled = true;
document.getElementById('dimes').disabled = true;
document.getElementById('nickels').disabled = true;;
document.getElementById('pennies').disabled = true;;

function Convert(e){

    let number = document.getElementById('number').value;
    
    let totalCents = document.getElementById('total-cents');
    let quarters = document.getElementById('quarters');
    let dimes = document.getElementById('dimes');
    let nickels = document.getElementById('nickels');
    let pennies = document.getElementById('pennies');
  

    

    totalCents.value = (number * 100).toFixed(0);

    quarters.value = Math.floor(number * 4);
    
    dimes.value = Math.floor((totalCents.value - (quarters.value*25))/10);
   
    nickels.value = Math.floor((totalCents.value - (quarters.value*25) - (dimes.value*10))/5);

    pennies.value = totalCents.value - quarters.value*25 - dimes.value*10 - nickels.value*5;
    e.preventDefault();
}