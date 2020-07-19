import styled from 'styled-components/native';
import Colors from '../../theme/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Header = styled.View`
  padding: 20px 0;
  margin-right: 25px;
  align-self: flex-end;
`;

export const Logo = styled.Image`
  max-width: 175px;
  max-height: 30px;
`;

export const Body = styled.View``;

export const Sun = styled.Image`
  max-height: 310px;
  width: 420px;
`;

export const Title = styled.Text`
  font-family: 'Roboto-Bold';
  line-height: 33px;
  width: 223px;
  font-size: 28px;
  color: ${Colors.title};
  margin-left: 25px;
`;

export const Footer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding-bottom: 25px;
`;
