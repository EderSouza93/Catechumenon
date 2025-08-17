import { Confession } from "@/domain/confession/Confession";
import { IConfessionRepo } from "@/domain/confession/IConfessionRepo";
import { inject, injectable } from "tsyringe";

@injectable()
export class ConfessionService {
    constructor(
        @inject('ConfessionRepo') private confessionRepo: IConfessionRepo
    ) {}

    async getAll(): Promise<Confession[]> {
        return this.confessionRepo.findAll();
    }

    async getById(id: number): Promise<Confession | null> {
        return this.confessionRepo.findById(id);
    }
}