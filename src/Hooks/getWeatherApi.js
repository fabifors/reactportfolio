import { useEffect } from 'react';

// API
const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=${process.env.OPENWEATHER_API_KEY}`;

const useWeatherApi = () => {
  const [state, setState] = useState({
    weather: {
      belowZero: false,
      temp: null,
      city: null,
    },
  });

  function updateWeather() {
    fetch(WEATHER_API)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error(res.status);
        }
      })
      .then((json) => {
        const {
          main: { temp },
          name,
        } = json;
        if (temp - 273.15 < 0) {
          setState({
            weather: {
              belowZero: true,
              temp: (temp - 273.15).toFixed(2),
              city: name,
            },
          });
        } else {
          setState({
            weather: {
              belowZero: false,
              temp: (temp - 273.15).toFixed(2),
              city: name,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    updateWeather();
  }, []);

  return { state, updateWeather };
};

export default useWeatherApi;
