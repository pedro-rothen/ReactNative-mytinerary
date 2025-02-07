import { ImageBackground, Text, View } from "react-native";

export function City(item: CityProps) {
  return (
    <View>
        <Text>{item.name}</Text>
        <ImageBackground 
            style={{ width: 300, height: 300 }}
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
            />
    </View>
  );
}