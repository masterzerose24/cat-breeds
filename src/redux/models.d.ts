declare namespace ReduxModels {
  interface ICatsState  {
    breeds: any[];
    catsList: any[];
    hasLoadMore: boolean;
    selectedBreed: string;
    currentPage: number;
    selectedCat: any;
  };

  interface IDefaultState { 
    cats: ICatsState
  };
}