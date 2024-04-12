import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <View style={{flex: 1}}>
      <AppNavigation />
    </View>
  );
};

export default App;
