import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserRole } from './user-roles.enum';
import { CredentialsDto } from './dtos/credentials.dto';
export declare class UserRepository extends Repository<User> {
    createUser(createUserDto: CreateUserDto, role: UserRole): Promise<User>;
    private hashPassword;
    checkCredentials(credentialsDto: CredentialsDto): Promise<User>;
}
