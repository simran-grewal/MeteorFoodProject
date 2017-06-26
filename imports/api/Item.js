import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
export const Items = new Mongo.Collection('items');


Meteor.methods({
  'item.insert'(itemName, itemPrice, itemSize, itemDescription) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      itemName: {
        type: String,
        label: 'Your Item',
        min: 1,
        required: true
      },
      itemPrice: {
        type: Number,
        label: 'Your Price',
        min: 0,
        required: true
      },
      itemSize: {
        type: String,
        label: 'Your Size',
        min: 1,
        max: 20,
        required: false
      },
      itemDescription: {
        type: String,
        label: 'Your Description',
        required: false
      }
    }).validate({ itemName, itemPrice, itemSize, itemDescription });

    Items.insert({itemName, itemPrice, itemSize, itemDescription });
  }
})
