import { View, Text, ImageBackground } from 'react-native';

export default function CityCard(item: CityProps) {
  return (
    <View>
      <ImageBackground
        style={{ width: 300, height: 300 }}
        source={{ uri: item.imageUrl }}
        resizeMode="cover">
        <View>
          <Text>{item.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}