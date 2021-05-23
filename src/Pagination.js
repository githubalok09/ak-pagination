
import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = (props) => {
    return (
        <div>
            {props.dataLength > 0 ?
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={props.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={props.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
                : console.log('no data')
            }
        </div>
    )
}

export default Pagination;