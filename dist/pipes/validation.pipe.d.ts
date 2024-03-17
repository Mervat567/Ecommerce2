import { ValidationPipe as BaseValidationPipe, ArgumentMetadata } from '@nestjs/common';
export declare class ValidationPipe extends BaseValidationPipe {
    transform(value: any, metadata: ArgumentMetadata): any;
}
