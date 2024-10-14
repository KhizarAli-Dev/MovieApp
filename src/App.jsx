import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomNavigation from './Navigation/BottomNavigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor={"#8E0E00"}/>
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </>
  );
}
