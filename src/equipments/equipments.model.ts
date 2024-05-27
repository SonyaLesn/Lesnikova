import {Column, DataType, Model, Table} from "sequelize-typescript";

interface EquipmentCreationAttrs {
    name: string;
    number: number;

}

@Table({tableName: 'equipments'})
export class Equipment extends Model<Equipment, EquipmentCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    number: number;


}