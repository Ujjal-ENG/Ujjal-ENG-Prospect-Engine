// app/(home)/page.tsx
import axios from 'axios';
import RestaurantList from '../components/RestaurantList';
import { Restaurant } from '../types';

export default async function HomePage() {
    const { data: restaurants }: { data: Restaurant[] } = await axios.get('/api/restaurants');

    return (
        <div>
            <RestaurantList restaurants={restaurants} />
        </div>
    );
}
