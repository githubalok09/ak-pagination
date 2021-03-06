import { createStore, applyMiddleware  } from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
//const initialState = {list:[]}

function reducer(state = { data: "" }, action) {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        data: action.data,
        pageCount: action.pageCount,
        offset:0
      };
      case "FILTER_DATA":
      console.log('FILTER_DATA', action.filterData);
      return {
        ...state,
        filterData: action.filterData,
      };
      
    default:
      return state;
  }
}

// const initalState = {

// }
// const middleware = [thunk]
// const store = createStore(reducer, initalState, composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store