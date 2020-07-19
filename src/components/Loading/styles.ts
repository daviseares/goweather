import styled from 'styled-components/native';
import Colors from '../../theme/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  font-family: 'Roboto-Regular';
  color: ${Colors.title};
  font-size: 18px;
  margin-top: 10px;
`;
export const Spinner = styled.ActivityIndicator.attrs({
  size: 'large',
  color: Colors.button,
})``;
