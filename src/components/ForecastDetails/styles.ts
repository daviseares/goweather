import styled from 'styled-components/native';

import Colors from '../../theme/colors';

export const Container = styled.View`
  margin: 20px 25px 0 25px;
`;

export const Card = styled.View`
  height: 185px;
  background: ${Colors.card};
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const CardLeft = styled.View``;

export const CardRight = styled.View``;

export const Top = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Down = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Regular';
  font-size: 14px;
  color: ${Colors.title};
`;

export const Value = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: 20px;
  color: ${Colors.title};
`;
