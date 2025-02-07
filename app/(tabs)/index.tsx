import { View } from '@/components/Themed';
import { Hero } from '@/components/hero';
import { DefaultCarousel } from '@/components/defaultCarousel';

export default function Home() {
  return (
    <View>
      <Hero title="MyTinerary" subtitle="Find your perfect travel itinerary" />
      <DefaultCarousel />
    </View>
  );
}