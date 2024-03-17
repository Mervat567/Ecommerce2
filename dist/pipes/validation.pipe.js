"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
class ValidationPipe extends common_1.ValidationPipe {
    transform(value, metadata) {
        try {
            return super.transform(value, metadata);
        }
        catch (error) {
            if (error instanceof common_1.BadRequestException) {
                throw error;
            }
            else if (error instanceof Array && error[0] instanceof class_validator_1.ValidationError) {
                const messages = error[0].constraints;
                throw new common_1.BadRequestException(messages);
            }
            else {
                throw error;
            }
        }
    }
}
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map