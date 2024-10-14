import {StyleSheet, ScrollView, Image, View, TextInput} from 'react-native';
import React from 'react';
import Movies from '../Components/Movies';
import Series from '../Components/Series';
import Trending from '../Components/Trending';

export default function HomeScreen() {
  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={styles.profileIcon}
            source={{
              uri: 'https://www.citypng.com/public/uploads/preview/profile-user-round-white-icon-symbol-png-701751695033499brrbuebohc.png',
            }}
            
          />

           <Image
            style={styles.searchIcon}
            source={{
              uri: 'https://www.citypng.com/public/uploads/preview/white-search-icon-button-png-img-735811696240431a0p3ex0i2v.png',
            }}
            
          />
        </View>
        <Trending />
        <Movies />
        <Series />
  
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  profileIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  headerContainer: {
   display:'flex',
   justifyContent:'space-between',
   alignItems:'center',
   flexDirection:'row'
  },
  searchIcon:{
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 20,
    marginTop: 10,
  }
});
