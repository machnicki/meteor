//data by fixtures.js
Template.carsList.helpers({
  cars: function() {
    return Cars.find({}, {sort: {added: -1}});
  }
});