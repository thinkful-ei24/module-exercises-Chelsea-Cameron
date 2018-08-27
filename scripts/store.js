/* global cuid, Item */
'use strict';

//IIFE return value in global 'store' variable.
const store = (function() {
  const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';
  // find by id passed in
  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };
  // add item by name passed in
  const addItem = function(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (error) {
      console.log(`Can not add item: ${error.message}`);
    }
  };
  // find and toggle checked items
  const findAndToggleChecked = function(id) {
    this.findById(id).checked = !this.findById(id).checked;
  };
  // find and update name method
  const findAndUpdateName = function(id, newName) {
    try {
      Item.validateName(newName);
      this.findById(id).name = newName;
    } catch (error) {
      console.log(`Can not update name: ${error.message}`);
    }
  };
  // find and delete method
  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };
  // toggled checked filter
  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };
  // set search term
  const setSearchTerm = function(query) {
    this.searchTerm = query;
  };
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
})();
