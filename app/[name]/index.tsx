import { useLocalSearchParams } from 'expo-router';
import { View, Text, ImageBackground } from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function CityDetails() {
    const { name } = useLocalSearchParams();
    const navigation = useNavigation();

    useEffect(() => {
        if (name) {
            navigation.setOptions({ title: name });
        }
    }, [name, navigation]);

    return (
        <View>
            <Text>{name}</Text>
        </View>
    );
}