import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service'; 
import { get } from 'http';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Get('role/:role')
    getUserByRole(@Param('role') role : string){     // @Param('role') role : string means we are expecting a parameter called role in the url and it should be of type string
        return this.usersService.getUsersByRole(role);
    }

    @Get('/:id')
    getUserById(@Param('id') id : string){
        return this.usersService.getUsersById(Number(id));
    }
}
