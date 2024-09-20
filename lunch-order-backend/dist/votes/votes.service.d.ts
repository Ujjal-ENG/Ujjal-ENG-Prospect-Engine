import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class VotesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    voteForFoodPack(foodPackId: number): Promise<any>;
    getDailyWinner(): Promise<{
        name: any;
    }>;
    findOne(id: number): string;
    update(id: number, updateVoteDto: UpdateVoteDto): string;
    remove(id: number): string;
}
