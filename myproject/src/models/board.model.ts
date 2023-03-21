import { Model, Column, DataType, ForeignKey, BelongsTo, Table } from 'sequelize-typescript';
import { User } from './user.model';

@Table({
  tableName: 'boards'
})
export class Board extends Model<Board> {
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
  public title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public content!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  public userId!: number;

  @BelongsTo(() => User)
  public user!: User;
}