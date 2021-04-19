import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, UpdateDateColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    task!: string;

    @Column()
    description!: string;
    
    @CreateDateColumn()
    createdAt!: Date;
}