import { Confession } from "@/domain/confession/Confession";
import { IConfessionRepo } from "@/domain/confession/IConfessionRepo";
import { Repository } from "typeorm";
import { AppDataSource } from "../db/data-source";

export class ConfessionRepo implements IConfessionRepo {
    private ormRepo: Repository<Confession>;

    constructor() {
        this.ormRepo = AppDataSource.getRepository(Confession);
    }
    findAll(): Promise<Confession[]> {
        return this.ormRepo.find();
    }
    findById(id: number): Promise<Confession | null> {
        return this.ormRepo.findOneBy({ id });
    }
    save(confession: Confession): Promise<Confession> {
        return this.ormRepo.save(confession);
    }
    
}