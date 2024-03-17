import { ValidationPipe as BaseValidationPipe, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class ValidationPipe extends BaseValidationPipe {
  transform(value: any, metadata: ArgumentMetadata): any {
    try {
      return super.transform(value, metadata);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      } else if (error instanceof Array && error[0] instanceof ValidationError) {
        const messages = error[0].constraints;
        throw new BadRequestException(messages);
      } else {
        throw error;
      }
    }
  }
}
