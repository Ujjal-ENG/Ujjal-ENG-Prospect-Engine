// app/(results)/page.tsx
import axios from 'axios';
import WinnerDisplay from '../components/WinnerDisplay';
import { Winner } from '../types';

export default async function ResultsPage() {
    const { data: winner }: { data: Winner | null } = await axios.get('/api/votes/result');

    return (
        <div className="container mx-auto py-6">
            <WinnerDisplay winner={winner} />
        </div>
    );
}
