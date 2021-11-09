import { MealModel } from './models';

export type SerializedMeal = {
  id: number,
  title: string,
  description: string;
  img: string;
  tags: string[];
  chefName: string;
  mealTypes: string[];
  price: number;
}

/**
 * Takes in a ORM-type Meals/Chef model and serializes for API
 */
export const MealSerializer = (mealModel: MealModel): SerializedMeal => {
  return {
    id: mealModel.id,
    title: mealModel.title,
    description: mealModel.description,
    img: mealModel.img,
    tags: mealModel.tags,
    chefName: mealModel.chef.name,
    mealTypes: mealModel.mealTypes,
    price: mealModel.price
  }
};
