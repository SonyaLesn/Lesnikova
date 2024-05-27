import {Column, DataType, Model, Table} from "sequelize-typescript";

interface ServiceCreationAttrs {
    name: string;

}

@Table({tableName: 'services'})
export class Service extends Model<Service, ServiceCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

}