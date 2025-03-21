import { HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { APIErrorResultResponse } from '../../../users/api/swagger/create-user.swagger';

export const NewPasswordSwagger = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    ApiOperation({
      summary: 'Set new password',
      description:
        'Sets a new password using the recovery code received via email.',
    })(target, propertyKey, descriptor);
    ApiResponse({
      status: HttpStatus.NO_CONTENT,
      description: 'Password successfully updated.',
    })(target, propertyKey, descriptor);
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'Invalid input data or recovery code.',
      type: APIErrorResultResponse,
    })(target, propertyKey, descriptor);
    ApiResponse({
      status: HttpStatus.TOO_MANY_REQUESTS,
      description:
        'More than 5 attempts from one IP-address during 10 seconds.',
    })(target, propertyKey, descriptor);
    return descriptor;
  };
};
