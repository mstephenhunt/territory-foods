import { MealSerializer, SerializedMeal } from './meals.serializer';
import { MealModel } from './models';

export enum MealTags {
  VEGETARIAN = 'VEGETARIAN',
  VEGAN = 'VEGAN',
  PALEO = 'PALEO',
  KETO = 'KETO',
  MEDITERRANEAN = 'MEDITERRANEAN',
  MIXITARIAN = 'MIXITARIAN'
};

export enum MealTypes {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER'
}

type MealFilters = {
  mealTags: string[] | null,
  mealTypes: string[] | null
}

/**
 * This method takes in filtering criteria from the get meals endpoint,
 * retuns serialized meals to the requester.
 */
export class MealService {
  public static async getFilteredMeals(filters: MealFilters): Promise<SerializedMeal[]> {
    const meals: MealModel[] = await MealModel.findAll({
      where: {
        tags: filters.mealTags,
        mealTypes: filters.mealTypes
      }
    });

    return meals.map(meal => {
      return MealSerializer(meal)
    });
  }
}
