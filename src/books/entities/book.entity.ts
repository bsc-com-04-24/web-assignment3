import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('books')
export class Book {
@PrimaryGeneratedColumn()
id: number;

@Column({ length: 255 })
title: string;

@Column({ length: 255 })
author: string;

@Column()
year: number;

@Column({ length: 100, nullable: true })
genre: string;


@CreateDateColumn()
createdAt: Date;
}