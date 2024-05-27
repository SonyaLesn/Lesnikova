import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateTimetableDto} from "./dto/create-timetable.dto";
import {TimetablesService} from "./timetables.service";

@Controller('timetables')
export class TimetablesController {

    constructor(private timetablesService: TimetablesService) {
    }

    @Post()
    create(@Body() timetableDto: CreateTimetableDto) {
        return this.timetablesService.createTimetable(timetableDto);
    }

    @Get()
    getAll() {
        return this.timetablesService.getAllTimetables();
    }
}