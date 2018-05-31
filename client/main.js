import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { items } from '../imports/api/items.js';
import { properties } from '../imports/api/properties.js';
import { events } from '../imports/api/events.js';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.body.helpers({
  items() {
    return ITEM.find({});
  },
  properties() {
    return PROPERTY.find({});
  },
  events() {
    return EVENTS.find({});
  }
});
