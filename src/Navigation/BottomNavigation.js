import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome'; // Specify the icon set you want to use

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: '#8e8e8e', // Softer inactive color
        tabBarStyle: {
          backgroundColor: '#1c1c1e', // Darker background for a modern look
          borderTopWidth: 0,
          height: 60,
          paddingBottom: 5,
          elevation: 10, // Adds a shadow effect
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 13,
          paddingBottom: 5,
          fontWeight: '500',
        },
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'History') {
            iconName = 'history';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
