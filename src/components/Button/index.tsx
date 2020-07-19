import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import Colors from '../../theme/colors';

import { Container, ButtonText, IconContainer } from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, icon = '', ...rest }) => {
  return (
    <Container {...rest}>
      <ButtonText>{children}</ButtonText>
      <IconContainer>
        {icon !== '' && (
          <Icon name={icon} color={Colors.buttonText} size={30} />
        )}
      </IconContainer>
    </Container>
  );
};

export default Button;
