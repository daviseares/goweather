import React from 'react';
import {
  formatTime,
  formatTemperature,
  formatHumidity,
} from '../../utils/format';

import {
  Container,
  Card,
  CardLeft,
  CardRight,
  Top,
  Down,
  Title,
  Value,
} from './styles';

interface ForecastDetailsProps {
  details: {
    main: {
      feels_like: number;
      humidity: number;
    };
    sys: {
      sunrise: number;
      sunset: number;
    };
  };
}

const ForecastDetails: React.FC<ForecastDetailsProps> = ({ details }) => {
  const { feels_like, humidity } = details.main;
  const { sunrise, sunset } = details.sys;

  return (
    <Container>
      <Card>
        <CardLeft>
          <Top>
            <Title>NASCER DO SOL</Title>
            <Value>{formatTime(sunrise)}</Value>
          </Top>
          <Down>
            <Title>SENSAÇÃO TÉRMICA</Title>
            <Value>{formatTemperature(feels_like)}</Value>
          </Down>
        </CardLeft>
        <CardRight>
          <Top>
            <Title>PÔR DO SOL</Title>
            <Value>{formatTime(sunset)}</Value>
          </Top>
          <Down>
            <Title>UMIDADE</Title>
            <Value>{formatHumidity(humidity)}</Value>
          </Down>
        </CardRight>
      </Card>
    </Container>
  );
};

export default ForecastDetails;
