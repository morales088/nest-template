import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserRepository } from '../repositories/user.repository';
import { Users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository) {}

  async findAll(): Promise<Users[]> {
    return this.userRepo.findAll();
  }

  async findOne(username: string): Promise<Users | null> {
    return this.userRepo.findOneByUsername(username);
  }

  async createUser(userData: Partial<Users>): Promise<Users> {
    return this.userRepo.createUser(userData);
  }
}
