import { View, Button, Text } from "react-native";

interface HeroProps {
    title: string;
    subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
    return (
        <View>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Button title="Explore" />
        </View>
    );
}