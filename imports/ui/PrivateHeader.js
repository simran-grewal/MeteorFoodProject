import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import {Accounts} from 'meteor/accounts-base';


export default class PrivateHeader extends React.Component {
  constructor(props) {
    super(props);
  }

    onLogout(){
      console.log('Try To Log Out');
      Accounts.logout();
    }

   renderTitle()  {
    return (
      <h1 className = "header__title">{this.props.title}</h1>
    );
  }
 handleChange() {
    console.log('yoyo')
  }

render(){
  return (
    <div className = "header">
      <div className = "header__content">
        {this.renderTitle()}
        <button className = "button button--link-text" onClick = {this.onLogout.bind(this)}>Logout</button>
          <select

           onChange={this.handleChange.bind(this)}>
          <option value="Orange">Add Category</option>
           <option value="Radish">Add Item</option>
         </select>
      </div>
  </div>
  );
 }
}
