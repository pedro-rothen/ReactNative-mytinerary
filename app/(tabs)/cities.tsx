import { FlatList, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CityCard from '@/components/cityCard';
import { cities } from '@/components/defaultCarousel';
import { Link } from 'expo-router';

export default function Cities() {
  return (
    <View>
      <FlatList 
      data={cities} 
      renderItem={({ item }) => (
        <Link href={`/${item.name}`}>
            <CityCard {...item} />
        </Link>
      )} 
      />
    </View>
  );
}
