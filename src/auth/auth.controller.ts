import { Body, Controller,Get,Post,Req,UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { CredentialsDto } from 'src/users/dtos/credentials.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/users/user.entity';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {

    constructor(private  authService:AuthService){}

    @Post('/signup')
    async signUp(@Body(ValidationPipe) createUserDto:CreateUserDto):Promise<{message:string}>{
        
        await this.authService.singUp(createUserDto);
        return{
            message:'usuario cadastrado com sucesso'
        }
    }

    @Post('/signin')
    async signIn(@Body(ValidationPipe) credentialsDto:CredentialsDto):Promise<{token:string}>{
        console.log(credentialsDto);
        return await this.authService.singIn(credentialsDto);
    }

    @Get('/me')
    @UseGuards(AuthGuard())
    getMe(@GetUser() user:User):User{
        return user
    }


}
