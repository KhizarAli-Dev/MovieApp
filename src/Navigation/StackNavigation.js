// import {StatusBar, StyleSheet, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/stack';
// import HomeScreen from '../Screens/HomeScreen';

// const Stack = createNativeStackNavigator();

// export default function StackNavigation() {
//   return (
//     <>
//       <StatusBar backgroundColor={'gray'} />
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Login" />
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={({navigation}) => ({
//               headerRight: () => (
//                 <TouchableOpacity
//                   onPress={() => {
//                     navigation.navigate('Profile');
//                   }}>
//                   <Text>Profile</Text>
//                 </TouchableOpacity>
//               ),
//               headerTitle: 'Homescreen',
//               headerStyle: {
//                 backgroundColor: 'orange',
//               },
//             })}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({});
