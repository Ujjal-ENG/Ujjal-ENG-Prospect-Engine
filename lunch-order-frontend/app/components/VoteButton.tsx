
import { useState } from 'react';
import axios from 'axios';

interface VoteButtonProps {
    foodPackId: number;
}

export default function VoteButton({ foodPackId }: VoteButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleVote = async () => {
        setLoading(true);
        try {
            await axios.post('/api/votes', { foodPackId });
            alert('Vote submitted!');
        } catch (error) {
            console.error(error);
            alert('Error submitting vote.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleVote}
            className={`px-4 py-2 text-white rounded ${loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'}`}
            disabled={loading}
        >
            {loading ? 'Voting...' : 'Vote'}
        </button>
    );
}
