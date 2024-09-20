import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  async voteForFoodPack(foodPackId: number) {
    return this.prisma.vote.create({
      data: {
        foodPackId,
      },
    });
  }

  async getDailyWinner() {
    const result = await this.prisma.vote.groupBy({
      by: ['foodPackId'],
      _count: {
        foodPackId: true,
      },
      orderBy: {
        _count: {
          foodPackId: 'desc',
        },
      },
      take: 1,
    });

    if (!result.length) return null;

    const foodPack = await this.prisma.foodPack.findUnique({
      where: { id: result[0].foodPackId },
      include: {
        restaurant: true,
      },
    });

    return foodPack ? { name: foodPack.restaurant.name } : null;
  }

  findOne(id: number) {
    return `This action returns a #${id} vote`;
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    return `This action updates a #${id} vote`;
  }

  remove(id: number) {
    return `This action removes a #${id} vote`;
  }
}
