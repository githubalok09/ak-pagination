import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ItemList from './Itemlist';
import Pagination from './Pagination';
import { getList } from './export'
import { connect } from 'react-redux'

const AppNew = (props) => {
    const [offset, setOffset] = useState(0);
    const [pageCount, setPageCount] = useState(0);
    const [perPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [filterdata, setFilterdata] = useState(0);

    const [list, setList] = useState([]);

    /* useEffect(() => {
         let mounted = true;
         getList()
           .then(items => {
             if(mounted) {
               setList(items)
               setPageCount(Math.ceil(items.length / perPage)); 
               setTimeout(
                 () =>  getFilterdata(), 
                 300
              );
             }
           })
         return () => mounted = false;
       }, [])
      */

    const getData = () => {
        axios
            .get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {
                const data = res.data;
                //console.log(data);                
                // setList(data);     

               /* props.dispatch({
                    type: 'GET_DATA',
                    payload: data
                })*/


                setPageCount(Math.ceil(data.length / perPage));
                //console.log('pageCount'+pageCount);  
                getFilterdata(data, offset, perPage);
            });
    }
    const getFilterdata = (list, offset, perPage) => {
        const slice = list.slice(offset, offset + perPage)
        setFilterdata(slice);
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        setCurrentPage(selectedPage);
        setOffset(offset);
        console.log('handelClick-list', list)
        getFilterdata(list, offset, perPage);
    }

    //console.log('pagecount: ', pageCount, 'poastData:', 
    //list, 'filterdata:', filterdata, 'offset:',  offset, 'selectedPage:' , currentPage);

    return (
        <div>
            <h2>Pagination - hooks..</h2>
            <button onClick={getData}>GetData</button>
            {filterdata.length > 0 ?
                (filterdata.map(pd =>
                    <ItemList key={pd.id}
                        id={pd.id}
                        title={pd.title}
                        thumbnailUrl={pd.thumbnailUrl}
                    />
                ))
                : console.log('no filter data')
            }
            <Pagination
                dataLength={filterdata.length}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            />
        </div>
    )
};
const mapStateToProps = list => {
    //   console.log('state11', list)
    return { list: list }
}

const mapDispatchToProps = dispatch => {
    return {
        getData: () => dispatch({ type: 'GET_DATA' })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNew)