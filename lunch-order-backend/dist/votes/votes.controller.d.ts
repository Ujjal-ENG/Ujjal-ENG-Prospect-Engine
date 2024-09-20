import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
export declare class VotesController {
    private readonly votesService;
    constructor(votesService: VotesService);
    create(createVoteDto: CreateVoteDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVoteDto: UpdateVoteDto): string;
    remove(id: string): string;
}
