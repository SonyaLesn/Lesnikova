import { Module } from '@nestjs/common';
import { TimetablesController } from './timetables.controller';
import { TimetablesService } from './timetables.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Timetable} from "./timetables.model";

@Module({
  controllers: [TimetablesController],
  providers: [TimetablesService],
  imports: [
    SequelizeModule.forFeature([Timetable])
  ]
})
export class TimetablesModule {}