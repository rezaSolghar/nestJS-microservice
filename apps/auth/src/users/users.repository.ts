import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { AbstractRepository } from '@app/common';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersRepository extends AbstractRepository<User> {
  
  protected readonly logger = new Logger(UsersRepository.name);
  protected readonly model: Model<User>;
  constructor(
    @InjectModel(User.name) userModel: Model<User>,
    @InjectConnection() connection: Connection,
  ) {
    super(userModel, connection);
  }

  async findOne(filter: Partial<User>): Promise<User | null> {
    return this.model.findOne(filter).exec();
  }
}
