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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VotesController = void 0;
const common_1 = require("@nestjs/common");
const votes_service_1 = require("./votes.service");
const update_vote_dto_1 = require("./dto/update-vote.dto");
let VotesController = class VotesController {
    constructor(votesService) {
        this.votesService = votesService;
    }
    async voteForFoodPack(foodPackId) {
        return this.votesService.voteForFoodPack(foodPackId);
    }
    async getDailyWinner() {
        return this.votesService.getDailyWinner();
    }
    findOne(id) {
        return this.votesService.findOne(+id);
    }
    update(id, updateVoteDto) {
        return this.votesService.update(+id, updateVoteDto);
    }
    remove(id) {
        return this.votesService.remove(+id);
    }
};
exports.VotesController = VotesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('foodPackId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "voteForFoodPack", null);
__decorate([
    (0, common_1.Get)('result'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VotesController.prototype, "getDailyWinner", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VotesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_vote_dto_1.UpdateVoteDto]),
    __metadata("design:returntype", void 0)
], VotesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VotesController.prototype, "remove", null);
exports.VotesController = VotesController = __decorate([
    (0, common_1.Controller)('votes'),
    __metadata("design:paramtypes", [votes_service_1.VotesService])
], VotesController);
//# sourceMappingURL=votes.controller.js.map