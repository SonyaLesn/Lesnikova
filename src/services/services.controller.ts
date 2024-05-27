import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateServiceDto} from "./dto/create-service.dto";
import {ServicesService} from "./services.service";

@Controller('services')
export class ServicesController {

    constructor(private servicesService: ServicesService) {
    }

    @Post()
    create(@Body() serviceDto: CreateServiceDto) {
        return this.servicesService.createService(serviceDto);
    }

    @Get()
    getAll() {
        return this.servicesService.getAllServices();
    }
}