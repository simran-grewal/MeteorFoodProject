import React from 'react';
import {Meteor} from 'meteor/meteor';

export default class AddCategory extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        catName:'',
        err: ''
      };
  }
  addCategory(e) {
    e.preventDefault();
    var catName = this.refs.catName.value;

    Meteor.call('category.insert', catName, (err, res) => {

      if(err) {
        this.setState({err: err.reason});
      } else {
        this.setState({catName: '', err: ''});
      }
      this.refs.catName.value = '';
    });
  }
  renderError() {
    if(this.state.err) {
      return (
        <p>{this.state.err}</p>
      )
    }
  }

  componentWillUnmount() {
    this.setState({
      catName: '',
      err:''
    })
  }
  render() {
    return (
      <div className = "item">
        <h1>Add your Category</h1>
        {this.renderError()}
        <form onSubmit = {this.addCategory.bind(this)}>
          <input type = "text" ref = "catName" placeholder = "Category Name"/>
          <button className = 'button'>Add Category</button>
        </form>
      </div>
    );
  }
}
