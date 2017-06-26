import React from 'react';
import {Meteor} from 'meteor/meteor';
import FlipMove from 'react-flip-move';

import {Categories} from './../api/Category';
import Category from './Category';


export default class FoodItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    console.log('ComponentDidMount Categories');
    this.categoriesTracker = Tracker.autorun(() => {
      Meteor.subscribe('categories');
    var categories = Categories.find().fetch();
      this.setState({ categories })
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount categories');
    this.categoriesTracker.stop();
  }

  renderCategoriesList() {
    var {categories} = this.state;
      if(categories.length == 0){
        return (
          <div className = "item">
          <p className = "item__status-message">No Category is Added Yet</p>
          </div>
        )
      } else {
        return categories.map((category) => {
            return <Category key = {category._id} {...category}/>
        })
      }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight = {true}>
        {this.renderCategoriesList()}
      </FlipMove>
      </div>
    );
  }
}
