export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

export const setCategoryFilter = (category = '') => ({
  type: 'SET_CATEGORY_FILTER',
  category
});

export const setVisualizationFilter = (visualization = '') => ({
  type: 'SET_VISUALIZATION_FILTER',
  visualization
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByDateReverse = () => ({
  type: 'SORT_BY_DATE_REVERSE'
});

export const sortByCategory = () => ({
  type: 'SORT_BY_CATEGORY'
});

export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
