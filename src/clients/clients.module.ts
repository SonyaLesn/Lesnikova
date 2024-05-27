import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientsService } from './clients.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Client} from "./clients.model";

@Module({
  controllers: [ClientsController],
  providers: [ClientsService],
  imports: [
    SequelizeModule.forFeature([Client])
  ]
})
export class ClientsModule {}
