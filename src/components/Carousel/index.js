import Carousel from "react-native-reanimated-carousel";
import { City } from "../City";

export function DefaultCarousel() {
    const cities = [
        {
            name: "Brisbane",
            imageUrl: "https://cdn.concreteplayground.com/content/uploads/2022/02/Airbnb_Bluey-house_01_Hannah-Puechmarin_supplied-1024x576.jpg"
        },
        {
            name: "Brisbane",
            imageUrl: "https://cdn.concreteplayground.com/content/uploads/2022/02/Airbnb_Bluey-house_01_Hannah-Puechmarin_supplied-1024x576.jpg"
        },
        {
            name: "Brisbane",
            imageUrl: "https://cdn.concreteplayground.com/content/uploads/2022/02/Airbnb_Bluey-house_01_Hannah-Puechmarin_supplied-1024x576.jpg"
        }
    ];
    return (
        <Carousel
        loop
        autoplay
        data={cities}
        scrollAnimationDuration={1000}
        width={300}
        height={300}
        renderItem={({ item }) => City(item)}
        />
    );
}