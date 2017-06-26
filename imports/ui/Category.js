import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class Category extends React.Component {
  render() {
    return (
      <div className = "item">
        <h2>{this.props.catName}</h2>


        <h2 className = "item__food-item">Your Item here!!</h2>
        <button className = "button button--pill" onClick = {() => {
            Meteor.call('category.delete', this.props._id)
          }}>Delete</button>

      </div>
    )
  }
}
