import { IsString, IsNumber, IsOptional, IsNotEmpty } from 'class-validator'; 

export class CreateBookDto { 
  @IsString() 
  @IsNotEmpty() 
  title: string; 

  @IsString() 
  @IsNotEmpty() 
  author: string; 

  @IsNumber() 
  year: number; 
  
  @IsString() 
  @IsOptional() 
  genre?: string; 
} 