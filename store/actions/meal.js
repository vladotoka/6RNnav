export const TOGGLE_FAVORITE = 'TOOGLE_FAVORITE';

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};
