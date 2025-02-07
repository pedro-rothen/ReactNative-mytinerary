import { useLocalSearchParams } from 'expo-router';
import { View, Text, ImageBackground } from 'react-native';

export default function CityDetails() {
    const { name } = useLocalSearchParams();

    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
}