import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import React from 'react';

export default function Trending() {
  return (

    <SafeAreaView>
      <ScrollView>
        <Text style={styles.headingText}>Trending</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.container}>
          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://m.media-amazon.com/images/M/MV5BNDAyYjZmNjctOWE2Mi00ZDBiLWE2YjEtMWM1YmM0NmYzOGQwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
              }}
            />
          </View>

          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://sportshub.cbsistatic.com/i/2022/07/25/b87bfa41-24d7-4041-8bbe-e219c41aba52/the-sandman-netflix-poster.jpg?auto=webp&width=1500&height=2222&crop=0.675:1,smart',
              }}
            />
          </View>

          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://sportshub.cbsistatic.com/i/2022/07/25/b87bfa41-24d7-4041-8bbe-e219c41aba52/the-sandman-netflix-poster.jpg?auto=webp&width=1500&height=2222&crop=0.675:1,smart',
              }}
            />
          </View>

          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://sportshub.cbsistatic.com/i/2022/07/25/b87bfa41-24d7-4041-8bbe-e219c41aba52/the-sandman-netflix-poster.jpg?auto=webp&width=1500&height=2222&crop=0.675:1,smart',
              }}
            />
          </View>

          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://sportshub.cbsistatic.com/i/2022/07/25/b87bfa41-24d7-4041-8bbe-e219c41aba52/the-sandman-netflix-poster.jpg?auto=webp&width=1500&height=2222&crop=0.675:1,smart',
              }}
            />
          </View>

          <View style={[styles.card, styles.cardElevated]}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://sportshub.cbsistatic.com/i/2022/07/25/b87bfa41-24d7-4041-8bbe-e219c41aba52/the-sandman-netflix-poster.jpg?auto=webp&width=1500&height=2222&crop=0.675:1,smart',
              }}
            />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    shadowOffset: { width: 0, height: 2 },
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
