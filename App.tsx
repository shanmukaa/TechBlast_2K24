/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/Screens/Home.screen';
import Header from './src/Components/Header.Component';
import Volunteers from './src/Screens/Volunters.Screen';
import PixelPerfect from './src/Screens/Pixel.Perfect';
import CodeConflux from './src/Screens/CodeConflux.screen';
import HighTechChase from './src/Screens/HighTechChase.screen';
import SlideView from './src/Screens/TechnicalSlideView.screen';
import ProjectExpo from './src/Screens/ProjectExpo.screen';
const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
            }, 
          }} />
          <Stack.Screen name="Volunteers" component={Volunteers} options={{ headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
          },}} />
          <Stack.Screen name="PixelPerfect" component={PixelPerfect} options={{headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
            }, 
          }} />
          <Stack.Screen name="CodeConflux" component={CodeConflux} options={{headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
            }, 
          }} />
          <Stack.Screen name="HighTechChase" component={HighTechChase} options={{headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
            }, 
          }} />
          <Stack.Screen name="SlideView" component={SlideView} options={{headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
            }, 
          }} /><Stack.Screen name="Project" component={ProjectExpo} options={{headerTitle: () => <Header />,headerStyle: {
            backgroundColor: '#A0D7F6',
            }, 
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
