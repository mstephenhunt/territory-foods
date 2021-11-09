// import { MealSerializer, SerializedMeal } from './meals.serializer';
// import { MealModel } from './models';

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

// type MealFilters = {
//   tags: MealTags[],
//   mealTypes: MealTypes[]
// }

/**
 * This method takes in filtering criteria from the get meals endpoint,
 * retuns serialized meals to the requester.
 */
export class MealService {
  // public static async getFilteredMeals(): Promise<SerializedMeal> {

  // }
}
