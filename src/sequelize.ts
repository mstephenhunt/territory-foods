import { Sequelize } from 'sequelize-typescript'

export const sequelize = new Sequelize(
  'territory-postgres',
  'postgres',
  'mysecretpassword',
  {
    modelPaths: ['.']
  }
);
