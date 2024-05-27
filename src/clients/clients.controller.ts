import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateClientDto} from "./dto/create-client.dto";
import {ClientsService} from "./clients.service";

@Controller('clients')
export class ClientsController {

    constructor(private clientsService: ClientsService) {
    }

    @Post()
    create(@Body() clientDto: CreateClientDto) {
        return this.clientsService.createClient(clientDto);
    }

    @Get()
    getAll() {
        return this.clientsService.getAllClients();
    }
}