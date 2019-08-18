import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div>
          <span>Sort By: </span>
          <select
            name='Sorting'
            id=''
            onChange={e => this.props.onSortChange(e.target.value)}
          >
            <option value='id'>id</option>
            <option value='status'>status</option>
            <option value='total'>total</option>
            <option value='name'>name</option>
          </select>
        </div>
        <div>
          <span>Search by Id </span>{" "}
          <input type='text' name='' placeholder='Type To Search' onChange={e => this.props.onValueChange(e.target.value)}/>
        </div>
      </div>
    );
  }
}

export default Header;
