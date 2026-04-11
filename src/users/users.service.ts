import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

        
    private users = [
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
    }
}
