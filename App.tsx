import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';
import FloatingActionButtons from './src/screens/FloatingActionButtons';
import { store } from './src/store/data_store';
import { Platform, StatusBar } from 'react-native';

const App = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator></TabNavigator>
        <FloatingActionButtons />
      </NavigationContainer>
    </Provider>
    
  )
}

export default App
