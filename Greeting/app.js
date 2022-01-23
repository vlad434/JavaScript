//variable declarations
const nameField = document.getElementById('name');
const passField = document.getElementById('password');
const form = document.querySelector('form');
const loginBtn = document.getElementById('login');
const message = document.querySelector('.message');

//fetching the ip-api, then return data with all infos about user
async function getIP() {
  let response = await fetch('http://ip-api.com/json/');
  let data = await response.json();
  return data;
}

//function that display the greet message for user
async function greet(user) {
  let json = await getIP();
  let ip = json.query;
  let response = await fetch(`https://fourtonfish.com/hellosalut/?ip=${ip}`);
  let data = await response.json();
  message.textContent = `${data.hello} ${user}, you have successfully logged in!`;
  setTimeout(() => {
    message.textContent = '';
  }, 2000);
}

form.addEventListener('submit', (e) => {
  if (loginBtn.classList.contains('login')) {
    if (
      nameField.value === '' ||
      nameField.value === ' ' ||
      passField.value === '' ||
      nameField.value === ' '
    ) {
      if (nameField.value === '' || nameField.value === ' ') {
        nameField.style.boxShadow = '0 0 0 3px red';
        nameField.style.backgroundColor = 'hsla(9, 86%, 31%, 0.829)';
        message.textContent = 'Please fill the content';
        message.style.color = 'red';
        setTimeout(() => {
          nameField.style.boxShadow = 'none';
          nameField.style.backgroundColor = 'hsla(301, 100%, 6%, 0.6)';
          message.textContent = '';
          message.style.color = 'none';
        }, 1000);
      }

      if (passField.value === '' || nameField.value === ' ') {
        passField.style.boxShadow = '0 0 0 3px red';
        passField.style.backgroundColor = 'hsla(9, 86%, 31%, 0.829)';
        message.textContent = 'Please fill the content';
        message.style.color = 'red';
        setTimeout(() => {
          passField.style.boxShadow = 'none';
          passField.style.backgroundColor = 'hsla(301, 100%, 6%, 0.6)';
          message.textContent = '';
          message.style.color = 'none';
        }, 1000);
      }
    } else {
      console.log('success');
      let userName = nameField.value;
      nameField.disabled = true;
      nameField.value = '';
      passField.disabled = true;
      passField.value = '';
      loginBtn.classList.remove('login');
      loginBtn.classList.add('logout');
      loginBtn.textContent = 'LOG OUT';
      greet(userName);
    }
  } else {
    console.log('Logout');
    message.textContent = '';
    nameField.disabled = false;
    passField.disabled = false;
    loginBtn.classList.remove('logout');
    loginBtn.classList.add('login');
    loginBtn.textContent = 'LOG IN';
  }

  e.preventDefault();
});
