Cars = new Meteor.Collection('cars');

Cars.allow({
  //insert: function(userId, doc) {
  //  //only allowed for logged in users
  //  return !! userId;
  //},
  update: ownsDocument,
  remove: ownsDocument
});

Cars.deny({
  update: function(userId, car, fieldNames) {
    //may only edit the following three fields:
    return (_.without(fieldNames, 'url', 'name', 'producer').length > 0);
  }
});

Meteor.methods({
  car: function(carAttr) {
    var user = Meteor.user(),
        carWithSameName = Cars.findOne({name: carAttr.name, producer: carAttr.producer});

    // ensure the user is logged in
    if (!user) {
      throw new Meteor.Error(401, 'You need to login to add new car');
    }

    // ensure that car has a name
    if (!carAttr.name) {
      throw new Meteor.Error(422, 'Please add the name');
    }

    // ensure that car has a producer name
    if (!carAttr.producer) {
      throw new Meteor.Error(422, 'Please add a producer');
    }

    //check that there are now cars with the same name (producer + name)
    if (carWithSameName) {
      throw new Meteor.Error(302, 'We have that car in our database', carWithSameName._id);
    }

    // pick out the whitelisted keys
    var car = _.extend(_.pick(carAttr, 'name', 'producer', 'url'), {
      userId: user._id,
      author: user.username,
      added: new Date().getTime()
    });

    var carId = Cars.insert(car);

    return carId;
  }
});