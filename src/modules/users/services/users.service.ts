import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  private readonly users = [
    {
      userId: 1,
      username: 'neil',
      password: '123456789',
    },
  ];

  async findOne(username: string) {
    return this.users.find(user => user.username === username);
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async createUser(data: { username: string; password: string }) {
    return this.prisma.user.create({
      data,
    });
  }
}
