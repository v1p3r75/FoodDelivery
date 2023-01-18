import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigations/AuthNavigator';
import { StatusBar } from 'react-native';
import COLORS from './src/constants/colors';
import SplashScreen from 'react-native-splash-screen';

export default function App() {

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.red} />
      <AuthNavigator />
    </NavigationContainer>
  );
}