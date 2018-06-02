import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { items } from '../imports/api/items.js';
import { properties } from '../imports/api/properties.js';
import { events } from '../imports/api/events.js';

import './main.html';

Template.body.events({
  'submit .new-item'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    const target = event.target;

    //https://www.w3schools.com/js/js_dates.asp
    var timestamp = new Date();
    const type = target.Type.value;
    const manufacturer = target.Manufacturer.value;
    const model = target.Model.value;
    const serial_primary = target.Serial_Primary.value;
    const serial_secondary = target.Serial_Secondary.value;

    // Insert a task into the collection
    // Tasks.insert({
    //   text,
    //   createdAt: new Date(), // current time
    // });
    // console.log("[" + timestamp + ", " + type + "]");
    console.log("[%s, %s, %s, %s]", timestamp, type, manufacturer, model);

    // Clear form
    //target.Type.value = 'Computer';
    target.Manufacturer.value = '';
    target.Model.value = '';
    target.Serial_Primary.value = '';
    target.Serial_Secondary.value = '';
  },
});

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
  dbresults() {
    return items.find({});
  },
  items() {
    return items.find({});
  },
  properties() {
    return properties.find({});
  },
  events() {
    return events.find({});
  }
});
