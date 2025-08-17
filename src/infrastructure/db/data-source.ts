import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Confession } from '@/domain/confession/Confession';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'confession',
    synchronize: true,
    logging: false,
    entities: [Confession],
    migrations: [],
    subscribers: [],
})