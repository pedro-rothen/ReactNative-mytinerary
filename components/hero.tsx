import { Link } from "expo-router";
import { View, Button, Text } from "react-native";

interface HeroProps {
    title: string;
    subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
    return (
        <View className="bg-white-500 justify-center items-center p-4">
            <Text className="text-2xl font-bold text-center mb-2">{title}</Text>
            <Text className="text-lg text-center mb-4">{subtitle}</Text>
            <Link href="/cities">
                <Button title="Explore" />
            </Link>
        </View>
    );
}