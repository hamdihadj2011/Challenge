import React, { Component } from "react";
import axios from "axios";

import Shipment from "./Shipment";
import Pagination from "../common/Pagination";
import Header from './Header'
class Shipments extends Component {
  state = {
    shipments: [],
    pageSize: 20,
    currentPage: 1,
    sort:'id',
    value:''
  };
  async componentWillMount() {
      
    const res = await axios.get(`http://localhost:3001/shipments?_sort=${this.state.sort}`);
    this.setState({
      shipments: res.data
    });
  }

  handlePageChange = page => {
    this.setState({
      currentPage: page
    });
  };
  handleValueChange=value=>{
      this.setState({
        value
      })
  }
  handleSortChange=  (sort)=> {
  
    axios.get(`http://localhost:3001/shipments?_sort=${sort}`)
        .then(res=>{
            this.setState({
                shipments:res.data
            })
        })
    
  };

  filter = () => {
    const filterd = [...this.state.shipments];
    

    return filterd.filter(list =>
      list.id.toLowerCase().includes(this.state.value.toLowerCase())
    );
  };
  render() {
    const { shipments, currentPage } = this.state;

    const newShipments = this.filter().slice(
      (currentPage - 1) * 20,
      20 * currentPage
    );
    return (
        
      
      <React.Fragment>
          <Header onSortChange={this.handleSortChange} onValueChange={this.handleValueChange} />
        <div className='App'>
          {newShipments &&
            newShipments.map(shipment => (
              <Shipment key={shipment.id} shipment={shipment} />
            ))}
        </div>
        <Pagination
          itemsCount={this.state.shipments.length}
          pageSize={this.state.pageSize}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default Shipments;
