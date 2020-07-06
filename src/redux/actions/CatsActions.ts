import apiService from './helper/apiService';
export const ACTIONS = {
  GET_BREEDS: 'GET_BREEDS',
  GET_CATS: 'GET_CATS',
  ADD_CATS: 'ADD_CATS',
  GET_DETAILS: 'GET_DETAILS',
  SET_DETAILS: 'SET_DETAILS',
  LOAD_CATS: 'LOAD_CATS',
}


export const getCatBreeds = () => async (dispatch: any) => {
  const res = await apiService.get(`/breeds`);
  dispatch({ type: ACTIONS.GET_BREEDS, payload: { breeds: res.data}});
}

export const getCatList = (id: string, page: number) => async (dispatch: any) => {
  dispatch({ type: ACTIONS.LOAD_CATS });
  const res = await apiService.get(`images/search?page=${page}&limit=10&breed_id=${id}`);
  const catsList: any[] = res.data;
  const hasLoadMore: boolean = res.data && res.data.length === 10;
  const selectedBreed: string = id;
  dispatch({ type: ACTIONS.GET_CATS, payload: {hasLoadMore, catsList, selectedBreed} });
}

export const addToCatList = (selectedBreed: string , page:number) => async (dispatch: any) => {
  const res = await apiService.get(`images/search?page=${page}&limit=10&breed_id=${selectedBreed}`);
  dispatch({type: ACTIONS.ADD_CATS, payload: {catsList: res.data}});
}

export const setCatDetails = (catDetails: any) => (dispatch: any) => {
  dispatch({type: ACTIONS.SET_DETAILS, 
    payload: {
      selectedBreed: catDetails.breeds[0].id,
      selectedCat: catDetails
    }});
}

export const getCatDetails = (selectedCat: string) => async (dispatch: any) =>  {
  const res = await apiService.get(`/images/${selectedCat}`)
  dispatch(setCatDetails(res.data));
}

export default {
  getCatBreeds,
  getCatList,
}