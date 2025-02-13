import { ImageBackground, Text, View } from "react-native";

export function City(item: City) {
  return (
    <View className="bg-blue-500">
        <ImageBackground 
            className="w-full h-full justify-center items-center"
            source={{ uri: item.image }}
            resizeMode="cover">
                <View className="absolute top-0 left-0 w-full h-full bg-black/50" />
                <Text className="text-white text-4xl font-bold">{item.name}</Text>
            </ImageBackground>
    </View>
  );
}