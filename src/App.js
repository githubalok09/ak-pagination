import React, { Component } from 'react'
import axios from 'axios'
import './App.css';
import ItemList from './Itemlist'
import Pagination from './Pagination'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0,
      filterdata: 0,
     };
    this.receivedData = this.receivedData.bind(this);
    this.getFilterdata = this.getFilterdata.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  receivedData(){  
      axios
        .get(`https://jsonplaceholder.typicode.com/photos`)
        .then(res => {
          const data = res.data;
          this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData: data           
          })
          // console.log(this.state.postData);
          this.getFilterdata();
        });

       
    }

  getFilterdata() {
    const slice = this.state.postData.slice(this.state.offset, this.state.offset + this.state.perPage)
    // const slice = data.slice((this.state.offset - 1) * this.state.perPage, this.state.offset * this.state.perPage)
    console.log(slice);
    this.setState({
      filterdata:slice,
    })   
}

handlePageClick = (e) => {
  const selectedPage = e.selected;
  const offset = selectedPage * this.state.perPage;

  this.setState({
    currentPage: selectedPage,
    offset: offset
  }, () => {
    this.getFilterdata()
  });

}
/*componentDidMount() {
  this.receivedData()
}*/
  render() {
    return (    
      <div>
        <h1>Pagination Demo..</h1>
        <button onClick={this.receivedData}>GetData</button>
       
        {this.state.filterdata.length > 0 ? 
                    
         (this.state.filterdata.map(pd =>
            <ItemList key={pd.id}
              id={pd.id}
              title={pd.title}
              thumbnailUrl={pd.thumbnailUrl}
            />
         ))      
          : console.log('no data')
        }
       
        <Pagination
          dataLength={this.state.filterdata.length}
          pageCount={this.state.pageCount}
          handlePageClick={this.handlePageClick}
        />
     
      </div>
     
    );
  }
}
export default App;

