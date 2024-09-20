import { VotesService } from './votes.service';
import { UpdateVoteDto } from './dto/update-vote.dto';
export declare class VotesController {
    private readonly votesService;
    constructor(votesService: VotesService);
    voteForFoodPack(foodPackId: number): Promise<any>;
    getDailyWinner(): Promise<{
        name: any;
    }>;
    findOne(id: string): string;
    update(id: string, updateVoteDto: UpdateVoteDto): string;
    remove(id: string): string;
}
