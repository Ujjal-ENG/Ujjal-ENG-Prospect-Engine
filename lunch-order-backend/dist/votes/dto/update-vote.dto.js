"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVoteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_vote_dto_1 = require("./create-vote.dto");
class UpdateVoteDto extends (0, swagger_1.PartialType)(create_vote_dto_1.CreateVoteDto) {
}
exports.UpdateVoteDto = UpdateVoteDto;
//# sourceMappingURL=update-vote.dto.js.map