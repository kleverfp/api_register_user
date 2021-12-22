import { CreateUserDto } from './dtos/create-user.dto';
import { ReturnUserDto } from './dtos/return-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    createAdminUser(createUserDto: CreateUserDto): Promise<ReturnUserDto>;
}
