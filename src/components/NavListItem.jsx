import React from 'react';
import './sideMenu.css';

function NavListItem({ item, navOnClick }){
    return (
     <li>
<a
          href="/"
          className={`${item.active ? 'active' : undefined}`}
          onClick={(e) => {
            e.preventDefault();
            navOnClick(item._id, item.target);
          }}
        >
          <i className={`bi ${item.icon}`}></i>
          <span className="navName">{item.name}</span>
        </a>
            </li>
    )

}

export default NavListItem;