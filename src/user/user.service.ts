import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { throwError } from 'rxjs';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async createUsers(user: CreateUserDTO): Promise<User> {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }

  async getUsersbyid(id: string): Promise<User> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(
        'your id is not a valid record identifier',
        {
          cause: new Error(),
          description: 'Use valid id',
        },
      );
    }
    return await this.userModel.findById(id);
  }

  async updateUserbyid(id: string, name: UpdateUserDTO): Promise<User> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(
        'your id is not a valid record identifier',
        {
          cause: new Error(),
          description: 'Use valid id',
        },
      );
    }
    const finduser = await this.userModel.findByIdAndUpdate(id, name, {
      new: true,
    });
    return finduser;
  }

  async DeleteUserbyid(id: string): Promise<User> {
    if (!isValidObjectId(id)) {
      throw new BadRequestException(
        'your id is not a valid record identifier',
        {
          cause: new Error(),
          description: 'Use valid id',
        },
      );
    }
    const user = await this.userModel.findByIdAndRemove(id, { new: true });
    return user;
  }
}
