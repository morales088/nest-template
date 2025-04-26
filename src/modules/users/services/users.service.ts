import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserRepository } from '../repositories/user.repository';
import { Users } from '@prisma/client';
import { HashService } from 'src/common/utils/hash.service';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UserRepository,
    private readonly hashService: HashService) {}

  async findAll(): Promise<Users[]> {
    return this.userRepo.findAll();
  }

  async findOne(username: string): Promise<Users | null> {
    return this.userRepo.findOneByUsername(username);
  }

  async createUser(userData: Partial<Users>): Promise<Users> {
    if (!userData.password) {
      throw new Error('Password is required');
    }
    const hashedPassword = await this.hashService.hashPassword(userData.password);
    const updatedUserData = {
      ...userData,
      password: hashedPassword,
    };
  
    return this.userRepo.createUser(updatedUserData);
  }
}
