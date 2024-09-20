// app/types.ts

export interface FoodPack {
    id: number;
    name: string;
}

export interface Restaurant {
    id: number;
    name: string;
    foodPacks: FoodPack[];
}

export interface Vote {
    foodPackId: number;
}

export interface Winner {
    id: number;
    name: string;
}
