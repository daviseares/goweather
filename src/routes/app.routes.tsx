import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Colors from '../theme/colors';

import Start from '../pages/Start';
import Forecast from '../pages/Forecast';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: Colors.background },
    }}
  >
    <Stack.Screen name="StartScreen" component={Start} />
    <Stack.Screen name="ForecastScreen" component={Forecast} />
  </Stack.Navigator>
);

export default Routes;
