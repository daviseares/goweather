import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Colors from '../../theme/colors';

export const Container = styled(RectButton)`
  height: 50px;
  background-color: ${Colors.button};
  border-radius: 5px;
  margin: 0 25px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${Colors.buttonText};
  font-size: 18px;
`;

export const IconContainer = styled.View`
  position: absolute;
  right: 30px;
`;
