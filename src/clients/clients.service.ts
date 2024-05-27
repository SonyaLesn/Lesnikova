import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Client} from "./clients.model";
import {CreateClientDto} from "./dto/create-client.dto";

@Injectable()
export class ClientsService {

    constructor(@InjectModel(Client) private clientRepository: typeof Client) {

    }

    async createClient(dto: CreateClientDto) {
        const client = await this.clientRepository.create(dto);
        return client;
    }

    async getAllClients() {
        const clients = await this.clientRepository.findAll();
        return clients;
    }
}
