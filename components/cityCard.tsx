import { View, Text, ImageBackground } from 'react-native';

export default function CityCard(item: City) {
  return (
    <View>
      <ImageBackground
        style={{ width: 300, height: 300 }}
        source={{ uri: item.image }}
        resizeMode="cover">
        <View>
          <Text>{item.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}