import { Model, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import Board from './board.model';

@Table({
  tableName: 'users'
})
export default class User extends Model<User>{
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  })
  public id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  public name!: string;

  @HasMany(() => Board)
  public boards!: Board[];
}
