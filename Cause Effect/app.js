const fullName = document.getElementById('name');
const street = document.getElementById('street');
const city = document.getElementById('city');
const state = document.getElementById('state');
const country = document.getElementById('country');
const phone = document.getElementById('phone');
const image = document.getElementById('image');

async function getData() {
  const data = await fetch('people.json');
  const myData = await data.json();

  const listOfPeople = document.querySelectorAll('.person');
  listOfPeople.forEach((person) => {
    person.addEventListener('click', () => {
      listOfPeople.forEach((pers) => pers.classList.remove('selected'));
      person.classList.add('selected');
      for (let i = 0; i < myData.length; i++) {
        if (myData[i].name == person.textContent) {
          changeInfo(i);
        }
      }
      let path = person.textContent.toLocaleLowerCase();
      path = path.replace(/ /g, '_');
      image.style.background = `url('./img/${path}.jpg') no-repeat center center / cover`;
    });
  });

  function changeInfo(index) {
    fullName.innerHTML = myData[index].name;
    street.innerHTML = myData[index].street;
    city.innerHTML = myData[index].city;
    state.innerHTML = myData[index].state;
    country.innerHTML = myData[index].country;
    phone.innerHTML = myData[index].phone;
  }
}

getData();
