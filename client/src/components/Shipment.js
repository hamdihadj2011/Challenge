import React, { Component } from 'react'
import {Link} from 'react-router-dom'
 class Shipment extends Component {
     
    render() {
        const {id,name,total}=this.props.shipment
        return (
            <div className='shipment' >
                <p><span>Shipment Id:</span>{id}</p>
                <p><span>Shipment Name:</span>{name}</p>
                <p><span>Shipment Total:</span>{total}</p>
                <Link to={`/${id}`}>Go to Details</Link>
            </div>
        )
    }
}

export default Shipment