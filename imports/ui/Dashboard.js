import React from 'react';
import PrivateHeader from './PrivateHeader';

import {Link} from 'react-router';

export default (props) => {
    return (
      <div>
        <PrivateHeader title = "Online Food Order"/>

        <div className = "page-content">
          <div>
            <Link className = "button button--link " to = "/addCategory">Add Category</Link>&nbsp;
            <Link className = "button button--link " to = "/addItem">Add Item</Link>&nbsp;
            <Link className = "button button--link " to = "/dashboard">Food Items</Link>
          </div>
          {props.children}
        </div>

      </div>
    );
}
