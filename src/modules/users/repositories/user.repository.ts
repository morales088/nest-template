import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { AbstractRepository } from 'src/common/repositories/abstract.repository';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Users } from '@prisma/client';

@Injectable()
export class UserRepository extends AbstractRepository<Users> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }

  get modelName(): string {
    return 'Users'; // Specify the Prisma model name for entity
  }

  async findAll(): Promise<Users[]> {
    return this.prisma[this.modelName].findMany();
  }

  async findOneByUsername(username: string): Promise<Users | null> {
    const result = await this.prisma[this.modelName].findUnique({ where: { username } });
    return result
  }

  async createUser(data: Partial<Users>): Promise<Users> {
    return this.prisma[this.modelName].create({ data: data });
  }

}
