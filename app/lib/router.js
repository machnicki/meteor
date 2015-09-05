Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('cars'); }
});

Router.map(function() {
  this.route('carsList', {path: '/'});

  this.route('carPage', {
    path: '/cars/:_id',
    data: function() { return Cars.findOne(this.params._id); }
  });

  this.route('carEdit', {
    path: '/cars/:_id/edit',
    data: function() { return Cars.findOne(this.params._id); }
  });

  this.route('carSubmit', {
    path: '/submit'
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }

    this.stop();
  } else {
    this.next();
  }
};

Router.before(requireLogin, {only: 'carSubmit'});