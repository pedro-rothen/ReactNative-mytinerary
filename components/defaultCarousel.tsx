import Carousel from "react-native-reanimated-carousel";
import { City } from "./city";
import { useEffect, useState } from "react";
import { fetchCities } from "../services/cities";
import { ActivityIndicator } from "react-native";

export function DefaultCarousel() {
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
            <Carousel
            loop
            autoPlay
            data={cities}
            scrollAnimationDuration={1000}
            width={300}
            height={300}
            renderItem={({ item }) => City(item)}
            />
        );
    }

    return null;
}