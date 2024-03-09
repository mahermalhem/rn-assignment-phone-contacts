
export const SET_FAV_LIST = "SET_FAV_LIST";
export const REMOVE_FROM_FAV_LIST = "REMOVE_FROM_FAV_LIST";
export const ADD_TO_FAV_LIST = "ADD_TO_FAV_LIST";

export const setFavList = (favList: any) => {
  return {
    type: SET_FAV_LIST,
    favList,
  };
};
// export const addtoFavList = (item: any) => {
//   return {
//     type: ADD_TO_FAV_LIST,
//     favList:favList.filter((element)=>item.id !== id),
//   };
// };
export const removeFromFavList = (favList: any) => {
  return {
    type: REMOVE_FROM_FAV_LIST,
    favList,
  };
};