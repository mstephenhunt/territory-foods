import { Table, Model, AllowNull, Column, Unique, ForeignKey } from 'sequelize-typescript';
import { MealTags, MealTypes } from './service';

@Table
export class MealModel extends Model<MealModel> {
  @Unique
  @AllowNull(false)
  @Column
  id!: number;

  @AllowNull(false)
  @Column
  title!: string;

  @AllowNull(false)
  @Column
  description!: string

  @AllowNull(false)
  @Column
  img!: string

  @AllowNull(false)
  @Column
  tags!: MealTags[]

  @AllowNull(false)
  @ForeignKey(() => ChefModel)
  chef!: ChefModel

  @AllowNull(false)
  @Column
  mealTypes!: MealTypes[]

  @AllowNull(false)
  @Column
  price!: number;
}

@Table
export class ChefModel extends Model<ChefModel> {
  @Unique
  @AllowNull(false)
  @Column
  id!: number;

  @AllowNull(false)
  @Column
  name!: string;
}
