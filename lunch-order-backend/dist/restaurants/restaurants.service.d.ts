import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class RestaurantsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createRestaurant(name: string): Promise<any>;
    getAllRestaurants(): Promise<any>;
    findOne(id: number): string;
    update(id: number, updateRestaurantDto: UpdateRestaurantDto): string;
    remove(id: number): string;
}
