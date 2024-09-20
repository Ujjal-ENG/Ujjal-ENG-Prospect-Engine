import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { VotesModule } from './votes/votes.module';
import { VotesModule } from './votes/votes.module';
import { PrismaModule } from './prisma/prisma.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [RestaurantsModule, VotesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
