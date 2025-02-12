import { FlatList, StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import CityCard from '@/components/cityCard';
import { Link } from 'expo-router';
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { fetchCities } from '@/services/cities';

export default function Cities() {
  const [cities, setCities] = useState<City[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCities = async () => {
        try {
            const data = (await fetchCities()).data;
            setCities(data);
        } catch (error) {
            console.error('Error fetching city details:', error);
        } finally {
            setLoading(false);
        }
    };

    getCities();
  });

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (cities !== null) {
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
  
  return null;
}
