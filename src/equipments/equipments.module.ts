import { Module } from '@nestjs/common';
import { EquipmentsController } from './equipments.controller';
import { EquipmentsService } from './equipments.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Equipment} from "./equipments.model";

@Module({
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
  imports: [
    SequelizeModule.forFeature([Equipment])
  ]
})
export class EquipmentsModule {}