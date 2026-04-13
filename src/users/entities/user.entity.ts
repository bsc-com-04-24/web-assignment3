import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'; 
@Entity('users') 
export class User { 
@PrimaryGeneratedColumn() 
id: number; 
@Column({ length: 255 }) 
name: string; 

@Column({ unique: true, length: 255 }) 
email: string; 

@Column({ length: 50, default: 'member' }) 
role: string; 

@CreateDateColumn() 
createdAt: Date; 
}