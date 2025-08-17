import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './infrastructure/db/data-source';
import { container } from 'tsyringe';
import { ConfessionRepo } from './infrastructure/repositories/ConfessionRepo';
import { IConfessionRepo } from './domain/confession/IConfessionRepo';
import { confessionRoutes } from './interfaces/http/routes/confession.routes';

const app = express();
app.use(express.json());

container.register<IConfessionRepo>('ConfessionRepo', {
    useClass: ConfessionRepo,
});

app.use('/confessions', confessionRoutes);

AppDataSource.initialize()
    .then(() =>  {
        console.log('📖 Database connected!');
        app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'))
    })
    .catch(err => console.error(err));