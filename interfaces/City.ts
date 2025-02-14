interface CitiesResponse {
  data: City[];
}

interface City {
  name: string;
  image: string;
  country: string;
  description: string;
}