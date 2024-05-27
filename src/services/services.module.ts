import { Module } from '@nestjs/common';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Service} from "./services.model";

@Module({
  controllers: [ServicesController],
  providers: [ServicesService],
  imports: [
    SequelizeModule.forFeature([Service])
  ]
})
export class ServicesModule {}