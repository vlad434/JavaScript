const input = document.getElementById('city_input');
const btn = document.getElementById('btn');
const container = document.getElementById('container');

//left side selectors
const cityName = document.getElementById('city-name');
const cityDept = document.getElementById('city-dept');
const degrees = document.getElementById('degrees');
const degrees_unit = document.querySelector('label');

//right side selectors
const wtr_condition = document.getElementById('weather-condition');
const day_night = document.getElementById('day_night');

const updateUI = function (data) {
  const cityDetails = data.cityDetails;
  const weather = data.weather[0];
  // console.log(cityDetails);
  console.log(weather);

  cityName.innerHTML = `${cityDetails.LocalizedName},\ `;
  cityDept.innerHTML = `${cityDetails.AdministrativeArea.LocalizedName}`;
  degrees.innerHTML = `${Math.round(weather.Temperature.Metric.Value)}`;
  degrees_unit.innerHTML = `&#176;${weather.Temperature.Metric.Unit}`;

  switch (weather.WeatherText) {
    case 'Mostly sunny':
    case 'Partly sunny':
      document.body.style.backgroundImage =
        'url(https://images.unsplash.com/photo-1416431168657-a6c4184348ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
      break;

    case 'Cloudy':
      document.body.style.backgroundImage =
        'url(https://images.unsplash.com/photo-1483702721041-b23de737a886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80)';
      break;

    case 'Mostly cloudy':
      document.body.style.backgroundImage =
        'url(https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80)';
      break;

    case 'Light rain':
      document.body.style.backgroundImage =
        'url(https://images.unsplash.com/photo-1519692933481-e162a57d6721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
      break;

    default:
      document.body.style.backgroundImage =
        'url(https://images.unsplash.com/photo-1624247885756-d252feb8da6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)';
      break;
  }

  if (weather.IsDayTime) {
    day_night.innerHTML = '<img src="day.png">';
  } else {
    day_night.innerHTML = '<img src="night.png">';
  }

  wtr_condition.innerHTML = `${weather.WeatherText}`;

  let forecast = {
    city: cityDetails.LocalizedName,
    dept: cityDetails.AdministrativeArea.LocalizedName,
    degrees: weather.Temperature.Metric.Value,
    wtr_condition: weather.WeatherText,
  };

  localStorage.setItem('forecast', JSON.stringify(forecast));
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);

  return {
    cityDetails,
    weather,
  };
};

btn.addEventListener('click', (e) => {
  container.classList.remove('hide');

  const city = input.value;
  updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
  e.preventDefault();
});

input.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    container.classList.remove('hide');

    const city = input.value;
    updateCity(city)
      .then((data) => updateUI(data))
      .catch((err) => console.log(err));
  }
  e.preventDefault();
});
