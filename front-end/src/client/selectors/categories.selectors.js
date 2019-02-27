import { createSelector } from 'reselect';
import { filter, forEach, keyBy, set } from 'lodash/fp';

export const getCategories = state => state.categories;

export const getCategoriesTree = createSelector(
  getCategories,
  categories => {
    const categoriesTree = keyBy('id', filter(category => !category.parent, categories));

    forEach(category => {
      categoriesTree[category.id] = set('children', filter({ parent: category.id }, categories), category);
    }, categoriesTree);

    return categoriesTree;
  }
);