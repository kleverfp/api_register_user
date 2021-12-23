import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from 'src/users/dtos/credentials.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(createUserDto: CreateUserDto): Promise<{
        message: string;
    }>;
    signIn(credentialsDto: CredentialsDto): Promise<{
        token: string;
    }>;
}
