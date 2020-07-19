import React from 'react';
import { formatTime, formatTemperature } from '../../utils/format';

// styles
import {
  Container,
  Card,
  Hour,
  Icon,
  Temperature,
  List,
  Description,
} from './styles';

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

interface ForecastProps {
  forecastList: HourlyProps[];
}

const Hourly: React.FC<ForecastProps> = ({ forecastList }) => {
  return (
    <Container>
      <List
        data={forecastList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card>
            <Hour>{formatTime(item.dt)}</Hour>
            <Icon
              source={{
                uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
              }}
              resizeMode="contain"
            />
            <Description>{item.weather[0].description}</Description>
            <Temperature>{formatTemperature(item.temp)}</Temperature>
          </Card>
        )}
      />
    </Container>
  );
};

export default Hourly;
