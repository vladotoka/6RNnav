import React from 'react';
import { useSelector } from 'react-redux';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const { test, categoryId } = props.route.params; //react navigation v6

  // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId); //{selectedCategory.title}

  //get state data from redux
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
