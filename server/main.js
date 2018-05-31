import { Meteor } from 'meteor/meteor';
import '../imports/api/items.js'
import '../imports/api/properties.js'
import '../imports/api/events.js'

Meteor.startup(() => {
  // code to run on server at startup
  // import { Mongo } from 'meteor/mongo';
  // export const ITEM = new Mongo.Collection('ITEM');
  // //ItemNum : Timestamp
  //
  // export const PROPERTY = new Mongo.Collection('PROPERTY');
  // //PropertyNum : ItemNum : PropertyKey : PropertyVal
  //
  // export const EVENT = new Mongo.Collection('EVENT');
  // //EventNum : ItemNum : Timestamp : Type : PropertyKey : Description
});
