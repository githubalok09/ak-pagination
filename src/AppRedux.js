import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import ItemList from './Itemlist';
import Pagination from './Pagination';
import { useDispatch, useSelector , connect} from "react-redux";

const AppNewRedux = (props) => {
    const content = useSelector(state => state); //this hook gives us redux store state
    const dispatch = useDispatch(); //this hook gives us dispatch method
    const perPage = 5;
    const {data} = content;
    
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

                    // setTimeout(getFilterdata(content.data, perPage, content.offSet),100)
                    
                );
        };
    }

    useEffect(() => {
        console.log("useeffect");
        if (data) {
            getFilterdata(data, perPage, content.offSet);
        }
    },[data]);

    function onFetchdata() {
        //invoking action
        dispatch(getData()
       
        );
      
    }

    const getFilterdata = (data, perPage, offSet = 0 ) => {
        const offSetnew = offSet + perPage;
        const slice = data.slice(offSet, offSetnew)
        dispatch({
            type: "FILTER_DATA",
            filterData:slice,
            offSet: offSetnew
        });       
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
       // setCurrentPage(selectedPage);
       // setOffset(offset);
        // console.log('handelClick-list', list)
        getFilterdata(data, perPage, offset)
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