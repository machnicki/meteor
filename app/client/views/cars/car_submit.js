Template.carSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var $target = $(e.target),
        car = {
          name: $target.find('[name=name]').val(),
          producer: $target.find('[name=producer]').val(),
          url: $target.find('[name=url]').val()
        };

    Meteor.call('car', car, function(error, id) {
      if (error) {
        throwError(error.reason);

        if (error.error === 302) {
          Router.go('carPage', {_id: error.details});
        }
      } else {
        Router.go('carPage', {_id: id});
      }
    });
  }
});