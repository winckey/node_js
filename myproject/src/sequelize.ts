import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'myproject',
  username: 'postgres',
  password: 'admin',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  models: [__dirname + '/models'],
});
