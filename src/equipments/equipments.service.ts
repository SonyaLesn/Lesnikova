import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Equipment} from "./equipments.model";
import {CreateEquipmentDto} from "./dto/create-equipment.dto";

@Injectable()
export class EquipmentsService {

    constructor(@InjectModel(Equipment) private equipmentRepository: typeof Equipment) {

    }

    async createEquipment(dto: CreateEquipmentDto) {
        const equipment = await this.equipmentRepository.create(dto);
        return equipment;
    }

    async getAllEquipments() {
        const equipments = await this.equipmentRepository.findAll();
        return equipments;
    }
}
