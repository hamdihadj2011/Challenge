import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

export default class ShipmentDetails extends Component {
  state = {
    shipment: {},
    name: ""
  };

  async componentWillMount() {
    const id = this.props.match.params.id;
    const res = await axios.get(`http://localhost:3001/shipments/${id}`);
    this.setState({
      shipment: res.data
    });
  }
  onSubmit = e => {
      const id=this.props.match.params.id
      const {name}=this.state
    //   console.log(name)
    e.preventDefault();
    axios.patch(`http://localhost:3001/shipments/${id}`,{name})
        .then(res=>this.setState({
            name:res.data.name
        }))
        console.log(this.state.name)
  };
  handleChange=e=>{
      this.setState({
          name:e.target.value
      })
  }
  
  render() {
    const { shipment } = this.state;

    return (
      <div className='details'>
        <div>
          <form onSubmit={this.onSubmit}>
            <span>Change the Name:</span> <input type='text' name='' id='' className='form-control' value={this.state.name} onChange={this.handleChange} />
            <button type="submit" className='btn btn-primary'>Change the Name</button>
          </form>
        </div>
        {shipment && (
          <div>
            <p><span  className='item'>id:</span>{shipment.id}</p>
            <p><span className='item'>name:</span>{shipment.name}</p>
            <p><span className='item'>Number of Cargo:{shipment.cargo && shipment.cargo.length}</span></p>
            <span className='cargo item'>Cargo Items:</span>{" "}
            <div className='cargo-items'>
            {shipment.cargo &&shipment.cargo.map((carg,index) => (
              
                  
                <div className='cargo-item' kye={index}>
                  <span>type: {carg.type}</span>
                  <br />
                  <span> description:{carg.description} </span>
                  <br />
                  <span>volume:{carg.volume} </span>
                </div>
              
              ))}</div>
            <p><span  className='item'>type:</span>{shipment.type}</p>
            <p><span className='item'>destination:</span>{shipment.destination}</p>
            <p><span className='item'>origin:</span>{shipment.origin}</p>
          </div>
        )}
        <Link to='/'>Go Back</Link>
      </div>
    );
  }
}
