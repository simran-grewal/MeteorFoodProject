import React from 'react';
import PrivateHeader from './PrivateHeader';

import {Link, browserHistory} from 'react-router';

export default (props) => {
    return (
      <div>
        <PrivateHeader title = "Online Food Order"/>
          <div className = "page-content page-content--top">
            <Link className = "button button--link " to = "/dashboard">Food</Link>&nbsp;
            <Link className = "button button--link " to = "/addCategory">Add Category</Link>&nbsp;
            <Link className = "button button--link " to = "/addItem">Add Item</Link>&nbsp;
              
          </div>
        <div className = "page-content">


        </div>
          {props.children}
      </div>
    );
}
