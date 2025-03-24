import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { ERRORS } from 'src/constants';
import { User, UserModelType, UserDocument } from '../domain/user.entity';

@Injectable()
export class ExternalUsersRepository {
  constructor(@InjectModel(User.name) private UserModel: UserModelType) {}

  async findUserById(id: string): Promise<UserDocument> {
    if (!ObjectId.isValid(id))
      throw new NotFoundException(ERRORS.USER_NOT_FOUND);

    const user = await this.UserModel.findOne({
      _id: new ObjectId(id),
      deletedAt: null,
    });

    if (!user) throw new NotFoundException(ERRORS.USER_NOT_FOUND);

    return user;
  }
}
