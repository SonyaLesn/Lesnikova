import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateEquipmentDto} from "./dto/create-equipment.dto";
import {EquipmentsService} from "./equipments.service";

@Controller('equipments')
export class EquipmentsController {

    constructor(private equipmentsService: EquipmentsService) {
    }

    @Post()
    create(@Body() equipmentDto: CreateEquipmentDto) {
        return this.equipmentsService.createEquipment(equipmentDto);
    }

    @Get()
    getAll() {
        return this.equipmentsService.getAllEquipments();
    }
}