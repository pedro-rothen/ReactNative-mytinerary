import { View } from '@/components/Themed';
import { Hero } from '@/components/hero';
import { DefaultCarousel } from '@/components/defaultCarousel';

export default function Home() {
  return (
    <View className="h-full w-full bg-green-500">
      <DefaultCarousel/>
      <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
    </View>
  );
}