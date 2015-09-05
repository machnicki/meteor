Template.carEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentCarId = this._id,
        $target = $(e.target),
        car = {
          name: $target.find('[name=name]').val(),
          producer: $target.find('[name=producer]').val(),
          url: $target.find('[name=url]').val()
        };

    Cars.update(currentCarId, {$set: car}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('carPage', {_id: currentCarId});
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm('Delete this car?')) {
      var currentCarId = this._id;
      Cars.remove(currentCarId);
      Router.go('carsList');
    }
  }
});