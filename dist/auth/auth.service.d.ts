import { UserRepository } from 'src/users/users.repository';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { User } from '../users/user.entity';
import { CredentialsDto } from 'src/users/dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    singUp(createUserDto: CreateUserDto): Promise<User>;
    singIn(credentialsDto: CredentialsDto): Promise<{
        token: string;
    }>;
}
