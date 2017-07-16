import React from 'react';
import {Meteor} from 'meteor/meteor';
// import Dropzone from 'react-dropzone';
// import sha1 from 'sha1';
// import superagent from 'superagent'
// import { FilesCollection } from 'meteor/ostrio:files';


export default class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: ''
    };
  }

  addItem(e) {
    e.preventDefault();
    var itemName = this.refs.itemName.value;
    var itemPrice = parseInt(this.refs.itemPrice.value);
    var itemSize = this.refs.itemSize.value;
    var itemDescription = this.refs.itemDescription.value;
    var itemImage = this.refs.itemImage.value;
    Meteor.call('item.insert', itemName, itemPrice, itemSize, itemDescription, itemImage, (err, res) => {
      if(err) {
        console.log(typeof itemPrice);
        this.setState({
          err: err.reason
        })
      } else {
        this.setState({
          err: ''
        });

        this.refs.itemSize.value = '';
        this.refs.itemName.value = '';
        this.refs.itemDescription.value = '';
        this.refs.itemPrice.value = '';
        this.refs.itemImage.value = '';
      }
    })
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
      err:''
    });
  }

  render () {
    return (
      <div className = "item item__content">
        <h1>Add your Item</h1>
        {this.renderError()}
        <form onSubmit = {this.addItem.bind(this)}>
          <input type = "text" placeholder = "Item Name" ref = "itemName"/><br/>
          <input type = "text" placeholder = "Item Price" ref = "itemPrice"/><br/>
          <input type = "text" placeholder = "Item Size" ref = "itemSize"/><br/>
          <textarea rows="4" cols="30" placeholder = "description" ref = "itemDescription"></textarea><br/>
          <input type = "text" placeholder = "Put Image URL here" ref = "itemImage"/><br/>
          <button className = "button button--form">Add Item</button>
        </form>
      </div>
    )
  }
}
