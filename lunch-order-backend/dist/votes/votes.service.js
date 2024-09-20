"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VotesService = class VotesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async voteForFoodPack(foodPackId) {
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
        if (!result.length)
            return null;
        const foodPack = await this.prisma.foodPack.findUnique({
            where: { id: result[0].foodPackId },
            include: {
                restaurant: true,
            },
        });
        return foodPack ? { name: foodPack.restaurant.name } : null;
    }
    findOne(id) {
        return `This action returns a #${id} vote`;
    }
    update(id, updateVoteDto) {
        return `This action updates a #${id} vote`;
    }
    remove(id) {
        return `This action removes a #${id} vote`;
    }
};
exports.VotesService = VotesService;
exports.VotesService = VotesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VotesService);
//# sourceMappingURL=votes.service.js.map