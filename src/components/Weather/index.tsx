import React from 'react';
import { formatDate, formatTemperature } from '../../utils/format';

import {
  Container,
  Header,
  Title,
  DateInfo,
  Card,
  CardLeft,
  WeatherTitle,
  Temperature,
  CardRight,
  Address,
} from './styles';

interface WeatherProps {
  info: {
    dt: number;
    name: string;
    main: {
      temp: number;
    };
    weather: [
      {
        description: string;
      },
    ];
  };
}

const Weather: React.FC<WeatherProps> = ({ info }) => {
  const { dt, name, main, weather } = info;

  return (
    <Container>
      <Header>
        <Title>Previsão do Tempo</Title>
        <DateInfo>{formatDate(dt)}</DateInfo>
      </Header>
      <Card>
        <CardLeft>
          <WeatherTitle>{weather[0].description}</WeatherTitle>
          <Temperature>{formatTemperature(main.temp)}</Temperature>
        </CardLeft>
        <CardRight>
          <Address>{name}</Address>
        </CardRight>
      </Card>
    </Container>
  );
};

export default Weather;
