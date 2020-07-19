import styled from 'styled-components/native';
import Colors from '../../theme/colors';

export const Container = styled.View`
  margin: 0 25px 20px 25px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: ${Colors.title};
`;

export const DateInfo = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  color: ${Colors.title};
`;

export const Card = styled.View`
  background: ${Colors.card};
  border-radius: 5px;
  height: 120px;
  margin-top: 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const CardLeft = styled.View`
  align-items: center;
`;

export const WeatherTitle = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 14px;
  color: ${Colors.title};
`;

export const Temperature = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 48px;
  color: ${Colors.title};
`;

export const CardRight = styled.View``;

export const Address = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 18px;
  color: ${Colors.title};
`;
