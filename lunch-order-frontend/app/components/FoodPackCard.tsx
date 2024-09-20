
import { FoodPack } from '../types';
import VoteButton from './VoteButton';

interface FoodPackCardProps {
    foodPacks: FoodPack[];
}

export default function FoodPackCard({ foodPacks }: FoodPackCardProps) {
    return (
        <div>
            {foodPacks.map((foodPack) => (
                <div key={foodPack.id} className="flex justify-between items-center py-2">
                    <span className="font-semibold">{foodPack.name}</span>
                    <VoteButton foodPackId={foodPack.id} />
                </div>
            ))}
        </div>
    );
}
