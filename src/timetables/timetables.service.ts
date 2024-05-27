import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Timetable} from "./timetables.model";
import {CreateTimetableDto} from "./dto/create-timetable.dto";

@Injectable()
export class TimetablesService {

    constructor(@InjectModel(Timetable) private timetableRepository: typeof Timetable) {

    }

    async createTimetable(dto: CreateTimetableDto) {
        const timetable = await this.timetableRepository.create(dto);
        return timetable;
    }

    async getAllTimetables() {
        const timetables = await this.timetableRepository.findAll();
        return timetables;
    }
}
