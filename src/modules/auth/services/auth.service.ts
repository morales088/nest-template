import { Injectable } from '@nestjs/common';
import { HashService } from 'src/common/utils/hash.service';
import { UsersService } from 'src/modules/users/services/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly hashService: HashService,
                private usersService: UsersService) {}
  
    async validateUser(username: string, password: string): Promise<any> {
      const user = await this.usersService.findOne(username);

      if (user && (await this.hashService.comparePassword(password, user.password))) {
        return user;
      }
  
      return null;
    }
      
}
