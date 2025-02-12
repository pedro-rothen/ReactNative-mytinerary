import axios from 'axios';

export async function fetchCities(): Promise<CitiesResponse> {
    try {
        const response = await axios.get("https://mytinerary-server.onrender.com/api/cities");
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}