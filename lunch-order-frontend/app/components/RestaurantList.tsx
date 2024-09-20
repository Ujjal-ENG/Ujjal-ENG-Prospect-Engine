
import { Restaurant } from '../types';
import FoodPackCard from './FoodPackCard';

interface RestaurantListProps {
    restaurants: Restaurant[];
}

export default function RestaurantList({ restaurants }: RestaurantListProps) {
    return (
        <div className="container mx-auto py-6">
            <h2 className="text-2xl font-semibold mb-4">Available Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurants.map((restaurant) => (
                    <div key={restaurant.id} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold">{restaurant.name}</h3>
                        <FoodPackCard foodPacks={restaurant.foodPacks} />
                    </div>
                ))}
            </div>
        </div>
    );
}
