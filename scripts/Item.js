/* global cuid */
'use strict';

//Item IIFE - Item module that contains functions to validate and create items
const Item = (function() {
  //validate name function
  const validateName = function(name) {
    if (!name) throw new TypeError('Name does not exist');
  };
  // create function
  const create = function(name) {
    let item = {
      id: cuid(),
      name,
      checked: false
    };
    return item;
  };
  //return to make available global scope
  return {
    validateName,
    create
  };
})();
