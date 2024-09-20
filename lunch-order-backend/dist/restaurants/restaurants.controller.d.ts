import { RestaurantsService } from './restaurants.service';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
export declare class RestaurantsController {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    createRestaurant(name: string): Promise<any>;
    getRestaurants(): Promise<any>;
    findOne(id: string): string;
    update(id: string, updateRestaurantDto: UpdateRestaurantDto): string;
    remove(id: string): string;
}
