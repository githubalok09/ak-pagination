import { createStore } from 'redux'
import axios from 'axios'
const initialState = {list:[]}
  
  const testReducer = (state = initialState, action) => {
     if (action.type === 'GET_DATA') {
      return {
        axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
            const data = res.data;           
            setPageCount(Math.ceil(data.length / perPage));           
            getFilterdata(data, offset, perPage);
        });
        list:state.list
      }
    }
    return state
  }

const store = createStore(testReducer)

export default store