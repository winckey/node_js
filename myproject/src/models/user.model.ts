import { Model, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import Board from './board.model';

@Table({
  tableName: 'users'
})
export default class User extends Model<User>{

  @Column({
    type: DataType.UUID,
    primaryKey: true,
    field: 'user_id'
  })
  userId!: string;
  
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    field: 'email'
  })
  email!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    field: 'name'
  })
  name!: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
    field: 'phone'
  })
  phone!: string;

  @HasMany(() => Board)
  boards!: Board[];

}
