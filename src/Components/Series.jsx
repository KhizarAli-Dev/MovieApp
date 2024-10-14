import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';

export default function Series() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {/* Heading Section */}
        <View>
          <Text style={styles.headingText}>Series</Text>
        </View>

        {/* Horizontal Scroll for Movie Cards */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          {/* Movie Cards */}
          {movieData.map((movie, index) => (
            <View key={index} style={[styles.card, styles.cardElevated]}>
              <Image style={styles.cardImage} source={{uri: movie.image}} />
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const movieData = [
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_.jpg',
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BODg3ZTM2YWQtZDE5Ny00NGNiLTkzYjgtYWVlYjNkOTg5NDI1XkEyXkFqcGc@._V1_.jpg',
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BM2U0MTJiYTItMjNiZS00MzU4LTkxYTAtYTU0ZGY1ODJhMjRhXkEyXkFqcGc@._V1_.jpg',
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BNGE0NmYxMWItODg1Yy00ZmRhLTgwNjktNzVhZjQ2ZmZkZmE5XkEyXkFqcGc@._V1_.jpg',
  },
  {
    image:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg',
  },
];

const styles = StyleSheet.create({
  // Safe Area for better layout on various devices
  safeArea: {
    backgroundColor: '#000', // Black background for a modern look
    flex: 1,
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold', // Bolder text for better readability
    color: 'white',
    paddingHorizontal: 16,
    marginTop: 20,
    paddingBottom: 10, // Spacing under the heading
  },
  card: {
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden', // Ensures the image doesn't exceed the card boundaries
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    backgroundColor: '#1c1c1e', // Slight gray for the card background
  },
  cardElevated: {
    elevation: 5, // Adds a slight shadow for depth on Android
  },
  cardImage: {
    width: 120,
    height: 170, // Increased height for better image proportion
    borderRadius: 10, // Rounded corners for the card
  },
  container: {
    paddingHorizontal: 12,
  },
});
