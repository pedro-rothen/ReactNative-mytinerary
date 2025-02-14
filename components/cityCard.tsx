import { View, Text, ImageBackground } from 'react-native';

export default function CityCard(item: City) {
  return (
    <View className="w-full flex-row">
      <ImageBackground
        style={{ width: 150, height: 150 }}
        source={{ uri: item.image }}
        resizeMode="cover">
      </ImageBackground>
      <View className="flex-1 justify-center p-4">
          <Text className="text-lg font-bold">{item.name}</Text>
          <Text className="text-ml">{item.country}</Text>
          <Text className="text-sm text-gray-500">{item.description}</Text>
        </View>
    </View>
  );
}