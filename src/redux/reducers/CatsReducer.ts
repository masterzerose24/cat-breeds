import { ACTIONS } from '../actions/CatsActions';

export const initState: ReduxModels.ICatsState = {
  breeds: [],
  catsList: [],
  hasLoadMore: true,
  selectedBreed: '',
  currentPage: 1,
  selectedCat: {},
}

export default (
  state: ReduxModels.ICatsState = initState, 
  action: {type: string; payload: ReduxModels.ICatsState })
  : ReduxModels.ICatsState => {
  const { type, payload } = action;
  switch(type) {
    case ACTIONS.GET_BREEDS:
      return { ...state, breeds: payload.breeds};
    case ACTIONS.LOAD_CATS:
      return { ...state, catsList: []};
    case ACTIONS.GET_CATS:
      return {
        ...state, 
        catsList: payload.catsList, 
        hasLoadMore: payload.hasLoadMore,
        selectedBreed: payload.selectedBreed,
      }
    case ACTIONS.SET_DETAILS: 
      return {
        ...state,
        selectedCat: payload.selectedCat,
        selectedBreed: payload.selectedBreed,
      }
    case ACTIONS.ADD_CATS:
      const newCatList = payload.catsList
        .filter((item: any) => !state.catsList.find(x => x.id === item.id) )
      return {
        ...state,
        catsList: [ ...state.catsList, ...newCatList],
        hasLoadMore: !!newCatList.length,
      }
  }
  return state;
};