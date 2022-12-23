import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateAccountDto } from 'src/accounts/dto/update-account.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create_user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}
  root(): string {
    return 'hello world zlf';
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.user.create(createUserDto);
    return await this.user.save(user);
  }
  async findAll() {
    return await this.user.find();
  }
  async findOne(id: number): Promise<User> {
    return await this.user.findOne({ where: [{ id: id }] });
  }
  async update(id: number, updateUserDto: UpdateAccountDto) {
    return await this.user.update(id, updateUserDto);
  }
}
