import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
export const Categories = new Mongo.Collection('categories');

if(Meteor.isServer) {
  Meteor.publish('categories', function(){
    return Categories.find();
  });
}


Meteor.methods({
  'category.insert'(catName) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    new SimpleSchema({
      catName: {
        type: String,
        label: 'Your Category',
        min: 1
      }
    }).validate({ catName });

     Categories.insert({ catName });
  },

  'category.delete'(_id) {
    if(!this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Categories.remove({ _id });
  }


})
