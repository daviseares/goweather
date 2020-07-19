import React, { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';
import { useRoute } from '@react-navigation/native';

import { showToast } from '../../utils/showToast';

import Button from '../../components/Button';
import Loading from '../../components/Loading';
import Weather from '../../components/Weather';
import Hourly from '../../components/Hourly';
import ForecastDetails from '../../components/ForecastDetails';

import api from '../../services/api';
import constants from '../../services/constants';

import { Container, Wrapper } from './styles';

interface Params {
  coordinates: [number, number];
}

interface WeatherProps {
  dt: number;
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: [
    {
      description: string;
    },
  ];
}

interface HourlyProps {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
}

const Forecast: React.FC = () => {
  const route = useRoute();
  const { coordinates } = route.params as Params;

  const [currentWeather, setCurrentWeather] = useState<WeatherProps>();
  const [hourlyWeather, setHourlyWeather] = useState<HourlyProps[]>();
  const [coords, setCoords] = useState<[number, number]>(coordinates);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Carregando...');

  useEffect(() => {
    /**
     * @api {get}/weather
     * @api {get}/onecall
     * get Forecast information
     */
    async function getWeather(): Promise<void> {
      const [lat, lon] = coords;

      const params = {
        appid: constants.APPID,
        lat,
        lon,
        lang: 'pt_br',
        units: 'metric',
      };

      const current = await api.get(constants.CURRENT_WEATHER, { params });
      const hourly = await api.get(constants.HOURLY_WEATHER, { params });

      Promise.all([current, hourly])
        .then(values => {
          setCurrentWeather(values[0].data);
          setHourlyWeather(values[1].data.hourly);
          setIsLoading(false);
        })
        .catch(error => {
          showToast({ msg: 'Algo deu errado, tente novamente' });
          setIsLoading(false);
        });
    }

    getWeather();
  }, [coords, isLoading]);

  /**
   * update Forecast
   */
  function handleUpdate(): void {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCoords([latitude, longitude]);
        setLoadingMessage('Atualizando...');
        setIsLoading(true);
      },
      error => {
        if (error.PERMISSION_DENIED) {
          showToast({ msg: 'Não foi possivel acessar sua localização.' });
        }
      },
      { enableHighAccuracy: true, timeout: 1000 },
    );
  }

  if (hourlyWeather && currentWeather && !isLoading) {
    return (
      <Container>
        <Wrapper>
          <Weather info={currentWeather} />
          <Button onPress={() => handleUpdate()}>Atualizar</Button>
          <Hourly forecastList={hourlyWeather} />
          <ForecastDetails details={currentWeather} />
        </Wrapper>
      </Container>
    );
  }

  return <Loading>{loadingMessage}</Loading>;
};

export default Forecast;
