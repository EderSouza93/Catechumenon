import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('confessions')
export class Confession {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    section!: string;

    @Column()
    answer!: string;
}