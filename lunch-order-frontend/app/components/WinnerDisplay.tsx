
import { Winner } from '../types';

interface WinnerDisplayProps {
    winner: Winner | null;
}

export default function WinnerDisplay({ winner }: WinnerDisplayProps) {
    return (
        <div className="bg-blue-50 p-6 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-bold text-center mb-4">Today's Winner</h2>
            <p className="text-xl text-center">{winner ? winner.name : 'No votes yet!'}</p>
        </div>
    );
}
