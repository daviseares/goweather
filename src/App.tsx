import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// this is necessary for show alert Toasts.
import { RootSiblingParent } from 'react-native-root-siblings';

import Routes from './routes';

const App: React.FC = () => (
  <RootSiblingParent>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  </RootSiblingParent>
);

export default App;
