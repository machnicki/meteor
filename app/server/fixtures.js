if (Cars.find().count() === 0) {
  Cars.insert({
    name: 'Cordoba',
    producer: 'Seat',
    url: 'http://seat.com'
  });

  Cars.insert({
    name: 'A5',
    producer: 'Audi',
    url: 'http://audi.com'
  });

  Cars.insert({
    name: 'Q7',
    producer: 'BMW',
    url: 'http://bwm.com'
  });
}