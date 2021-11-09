import express from 'express';
import { MealService } from './service';

const app = express();
const port = 8080;

// @ts-ignore
app.get('/', (request, response) => {
    console.log(request.body)
    response.send('Hello world!');
});

/**
 * Endpoint to return requested meals. Will filter by both tags
 * and meal types.
 *
 * Sample request
 * GET api/meals?tags=['VEGETARIAN'],types=['KETO']
 */
app.get('/api/meals', (request, response) => {
    // Parse incoming filter params
    const mealTypes = request.query.types ?
      request.query.types as string[] :
      null;

    const mealTags = request.query.tags ?
      request.query.tags as string[] :
      null;

    const serializedMeals = await MealService.getFilteredMeals({
      mealTypes,
      mealTags
    });

    response.send(serializedMeals);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});
