import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'; 
import { UsersService } from './users.service'; 
import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUserDto } from './dto/update-user.dto'; 
 
@Controller('users') 
export class UsersController { 
  constructor(private readonly usersService: UsersService) {} 
 
    @Post() 
    create(@Body() createUserDto: CreateUserDto) { 
    return this.usersService.create(createUserDto); 
    } 
 
    @Get()
    findAll() { 
    return this.usersService.findAll(); 
    } 
 
    @Get(':id') 
    findOne(@Param('id') id: string) { 
    return this.usersService.findOne(+id); 
    } 
 
    @Patch(':id') 
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) { 
    return this.usersService.update(+id, updateUserDto); 
    } 
 
    @Delete(':id') 
    remove(@Param('id') id: string) { 
    return this.usersService.remove(+id); 
    } 
} 





/*import { Controller, Get, Param } from '@nestjs/common';
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
}*/
