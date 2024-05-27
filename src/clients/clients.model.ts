import {Column, DataType, Model, Table} from "sequelize-typescript";

interface ClientCreationAttrs {
    surname: string;
    name: string;
    gender: string;
    data: string;
    numb: number;
    series: number;

}

@Table({tableName: 'clients'})
export class Client extends Model<Client, ClientCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    surname: string;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    gender: string;

    @Column({type: DataType.STRING, unique: true, allowNull: false})
    data: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    numb: number;

    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    series: number;

}