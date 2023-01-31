const initialState = 0

export const filtersReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FILTERS':
      return action.numberFilter
    default:
      return state
  }
}