const baseUrl = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city: string) => {
  let url = `${baseUrl}/forecast/daily?q=${city}&cnt=5&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
  return await (await fetch(url)).json();
};