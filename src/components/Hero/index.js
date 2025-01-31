import { View, Button, Text } from "react-native";

export function Hero({title, subtitle}) {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Button title="Explore" />
        </View>
    );
}