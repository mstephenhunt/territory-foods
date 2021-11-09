import { Model, AllowNull, Column, Unique, ForeignKey } from 'sequelize-typescript';

enum MealTags {
  VEGETARIAN = 'VEGETARIAN',
  VEGAN = 'VEGAN',
  PALEO = 'PALEO',
  KETO = 'KETO',
  MEDITERRANEAN = 'MEDITERRANEAN',
  MIXITARIAN = 'MIXITARIAN'
};

enum MealTypes {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER'
}

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
  price!: number;
}


export class ChefModel extends Model<ChefModel> {
  @Unique
  @AllowNull(false)
  @Column
  id!: number;

  @AllowNull(false)
  @Column
  name!: string;
}
