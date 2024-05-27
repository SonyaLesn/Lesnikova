import {Column, DataType, Model, Table} from "sequelize-typescript";

interface TimetableCreationAttrs {
    data: string;
    service: string;
    payment: string;

}

@Table({tableName: 'timetables'})
export class Timetable extends Model<Timetable, TimetableCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    data: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    service: string;

    @Column({type: DataType.STRING, allowNull: false})
    payment: string;

}