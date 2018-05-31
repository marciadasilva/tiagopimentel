import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  category: '',
  visualization: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_CATEGORY_FILTER':
      return {
        ...state,
        category: action.category
      };
    case 'SET_VISUALIZATION_FILTER':
      return {
        ...state,
        visualization: action.visualization
      };
    case 'SORT_BY_CATEGORY':
      return {
        ...state,
        sortBy: 'category'
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_DATE_REVERSE':
      return {
        ...state,
        sortBy: 'dateReverse'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

export default filtersReducer;
