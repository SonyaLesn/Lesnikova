import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Service} from "./services.model";
import {CreateServiceDto} from "./dto/create-service.dto";
import {ServicesController} from "./services.controller";

@Injectable()
export class ServicesService {

    constructor(@InjectModel(Service) private serviceRepository: typeof Service) {

    }

    async createService(dto: CreateServiceDto) {
        const service = await this.serviceRepository.create(dto);
        return service;
    }

    async getAllServices() {
        const services = await this.serviceRepository.findAll();
        return services;
    }
}
