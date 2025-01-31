import { ImageBackground, Text, View } from "react-native";

export function City(item) {
  return (
    <View>
        <Text>{item.name}</Text>
        <ImageBackground 
            source={{ uri: item.imageUrl }}
            resizeMode="contain"
            />
    </View>
  );
}