import React from 'react';

import { Container, Message, Spinner } from './styles';

interface LoadingProps {
  children: string;
}

const Loading: React.FC<LoadingProps> = ({ children }) => (
  <Container>
    <Spinner animating />
    <Message>{children}</Message>
  </Container>
);

export default Loading;
