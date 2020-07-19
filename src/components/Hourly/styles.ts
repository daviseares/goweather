import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import Colors from '../../theme/colors';

interface ForecastItem {
  dt: number;
  temp: number;
  weather: [
    {
      icon: string;
      description: string;
    },
  ];
}

export const Container = styled.View`
  margin-top: 20px;
`;

export const List = styled(FlatList as new () => FlatList<ForecastItem>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { marginLeft: 25 },
})``;

export const Card = styled.View`
  width: 100px;
  border-radius: 5px;
  background: ${Colors.card};
  padding: 10px 0px;
  margin-right: 15px;

  align-items: center;
  justify-content: space-between;
`;

export const Hour = styled.Text`
  color: ${Colors.title};
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const Icon = styled.Image`
  width: 69px;
  height: 69px;
`;

export const Temperature = styled.Text`
  color: ${Colors.title};
  font-family: 'Roboto-Regular';
  font-size: 16px;
`;

export const Description = styled.Text`
  color: ${Colors.title};
  font-family: 'Roboto-Regular';
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;
