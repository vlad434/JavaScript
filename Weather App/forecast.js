const key = 'ayvA0V65oDef4OXCm61EoaSeCVvKGyfH';

const getCity = async (cityName) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${cityName}`
  );
  const data = await response.json();
  return data[0];
};

const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/`;
  const query = `${id}?apikey=${key}`;
  const response = await fetch(base + query);
  const data = await response.json();
  return data;
};
