import { Request, Response } from "express";
import { container } from "tsyringe";
import { ConfessionService } from "@/application/services/ConfessionService";


export class ConfessionController {
    static async getAll(req: Request, res: Response) {
        const service = container.resolve(ConfessionService);
        const data = await service.getAll();
        return res.json(data);
    }
}