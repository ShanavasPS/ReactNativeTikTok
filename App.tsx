import React from 'react'
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigators/TabNavigator';
import FloatingActionButtons from './src/screens/FloatingActionButtons';
import { store } from './src/store/data_store';

const App = () => {
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
