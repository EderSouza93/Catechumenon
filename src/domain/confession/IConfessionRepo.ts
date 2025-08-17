import { Confession } from "./Confession";

export interface IConfessionRepo {
    findAll(): Promise<Confession[]>;
    findById(id: number): Promise<Confession | null>;
    save(confession: Confession): Promise<Confession>;
}