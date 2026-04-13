import { Injectable, NotFoundException } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { User } from './entities/user.entity'; 
import { CreateUserDto } from './dto/create-user.dto'; 
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
      constructor( 
        @InjectRepository(User) 
        private usersRepository: Repository<User>, 
         ){} 
 
        async create(createUserDto: CreateUserDto): Promise<User> { 
         const user = this.usersRepository.create(createUserDto); 
         return await this.usersRepository.save(user); 
         } 
 
        async findAll(): Promise<User[]> { 
        return await this.usersRepository.find(); 
        } 
 
        async findOne(id: number): Promise<User> { 
         const user = await this.usersRepository.findOne({ where: { id } }); 
         if (!user) throw new NotFoundException(`User with id ${id} not found`); 
         return user; 
         } 
 
        async update(id: number, updateUserDto: UpdateUserDto): Promise<User> { 
         await this.findOne(id);
         await this.usersRepository.update(id, updateUserDto); 
         return await this.findOne(id); 
         } 
   
        async remove(id: number): Promise<{ message: string }> { 
         await this.findOne(id); 
         await this.usersRepository.delete(id); 
         return { message: `User ${id} deleted successfully` }; 
        } 


}

        
   /* private users = [
        {id: 1, name: 'Alice Banda', email: 'alice@library.com', role: 'admin'},
        {id: 2, name: 'Bob Phiri', email: 'bob@library.com', role: 'member'},
        {id: 3, name: 'Carol Tembo', email: 'carol@library.com', role: 'member'},
        {id: 4, name: 'David Mwale', email: 'david@library.com', role: 'admin'}

    ]

    getAllUsers(){
        return this.users;
    }

    getUsersById(id: number){
        const users = this.users.find(user => user.id === id);  //if user is found return it, otherwise return a message saying user not found
        return users || {message: 'User not found'};    //if user is found return it, otherwise return a message saying user not found
    }

    getUsersByRole(role: string){
        const users = this.users.filter(user => user.role.toLowerCase() === role.toLowerCase());     //filter checks all users and returns multiple results toLower.case()  makes comparison case insensitive
        return users.length > 0 ? users : {message: 'No users found with this role'};     //users.length > 0 returns users   users.length means if true return users otherwise return message saying no users found with this role 
    }*/

