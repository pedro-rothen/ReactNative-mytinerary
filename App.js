import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { DefaultCarousel } from './src/components/Carousel';
import { Hero } from './src/components/Hero';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
      <DefaultCarousel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
