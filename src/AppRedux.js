import React from 'react';
import axios from 'axios';
import './App.css';
import ItemList from './Itemlist';
import Pagination from './Pagination';
import { useDispatch, useSelector , connect} from "react-redux";

const AppNewRedux = (props) => {
    const content = useSelector(state => state); //this hook gives us redux store state
    const dispatch = useDispatch(); //this hook gives us dispatch method
    const perPage = 5;
    
    console.log(content);
    //async action
    function getData() {
        return dispatch => {
            axios.get(`https://jsonplaceholder.typicode.com/photos`)
                .then(res =>
                    dispatch({
                        type: "FETCH_DATA",
                        data: res.data,
                        pageCount: Math.ceil(res.data.length / perPage)
                    }),
                    
                );
        };
    }
    function onFetchdata() {
        //invoking action
        dispatch(getData(),
        getFilterdata(content.data, perPage, content.offSet)
        );
      
    }

    const getFilterdata = (data, perPage, offSet = 0 ) => {
        const slice = data.slice(offSet, offSet + perPage)
        dispatch({
            type: "FILTER_DATA",
            filterData:slice,
            offSet: offSet
        });       
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
       // setCurrentPage(selectedPage);
       // setOffset(offset);
        // console.log('handelClick-list', list)
        getFilterdata(content.data, perPage, offset)
    }
  
    return (
        <div>
            <h2>Pagination - hooks-Redux</h2>
            <button onClick={onFetchdata}>GetData</button>
            {content.filterData &&
                (content.filterData.map(pd =>
                    <ItemList key={pd.id}
                        id={pd.id}
                        title={pd.title}
                        thumbnailUrl={pd.thumbnailUrl}
                    />
                ))
            }
            {content.filterData &&
                <Pagination
                    dataLength={content.data.length}
                    pageCount={content.pageCount}
                    handlePageClick={handlePageClick}
                />
            }
        </div>
    )
};

// const mapStateToProps = state => ({
//     ...state
//   });

//export default connect()(AppNewRedux);
export default AppNewRedux;