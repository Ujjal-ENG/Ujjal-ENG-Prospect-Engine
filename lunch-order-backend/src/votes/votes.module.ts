// src/modules/votes/votes.module.ts
import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';

@Module({
  imports: [PrismaModule],
  controllers: [VotesController],
  providers: [VotesService],
})
export class VotesModule {}
