import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
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
}
