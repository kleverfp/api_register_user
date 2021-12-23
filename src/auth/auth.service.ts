import { Injectable,UnauthorizedException,UnprocessableEntityException } from '@nestjs/common';
import { UserRepository } from 'src/users/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import {User} from '../users/user.entity';
import { UserRole } from 'src/users/user-roles.enum';
import { CredentialsDto } from 'src/users/dtos/credentials.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository:UserRepository,
        private jwtService:JwtService 
    ){}

    async singUp(createUserDto:CreateUserDto):Promise<User>{
        if(createUserDto.password != createUserDto.passwordConfirmation)
            throw new UnprocessableEntityException('passwords don\'t matches');
        else
            return await this.userRepository.createUser(createUserDto,UserRole.USER);
    }

    async singIn(credentialsDto:CredentialsDto){
        const user = await this.userRepository.checkCredentials(credentialsDto);
        if(user === null)
            throw new UnauthorizedException('invalid credentials');

        const jwtPayload = {
            id:user.id
        }

        const token = await this.jwtService.sign(jwtPayload);

        return {token}
    }
}