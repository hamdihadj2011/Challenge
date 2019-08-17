import React from "react";
import _ from 'lodash'
const Pagination = props => {
    const {itemsCount,pageSize,onPageChange}=props
   const pagesCount=Math.ceil(itemsCount/pageSize)
   const pages=_.range(1,pagesCount+1)
  return (
    <nav>
      <ul className='pagination bottom'>
        {
            pages.map(page=>(
                <li className='page-item' key={page}  >
          <a  className='page-link' onClick={()=>onPageChange(page)}>{page} </a>
        </li>
            ))
        }
      </ul>
    </nav>
  );
};

export default Pagination;
