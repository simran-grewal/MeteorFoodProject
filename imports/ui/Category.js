import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class Category extends React.Component {
  render() {
    return (

      <div className = "item item__grid">

        <h2>Product title</h2>
          <div>
            <img className="list-group-image" height = "250" width = "400" src="https://static.pexels.com/photos/365459/pexels-photo-365459.jpeg" alt="" />
              <div>
                <h1>{this.props.catName}</h1>
                <p>Product description... Lorem ipsum dolor sit amet, consectetu</p>
                <p>$21.000</p>
                <div className = "button--align">
                  <a className="button button--link" >Order Online</a>
                  <button className = "button button--pill" onClick = {() => {
                      Meteor.call('category.delete', this.props._id)
                    }}>Delete</button>
                </div>
              </div>
            </div>
          </div>

    )
  }
}
