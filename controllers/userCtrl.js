var us = {
  name: 'dm13',
  count: '29',
  ethnicty: 'diverse',
  age: '25',
  men: '26',
  women: '3'
}

module.exports = {
  getData: function(req, res) {
    res.status(200).json(us);
  },
  addData: function(req, res) {
    us.mood = req.body.mood;
    res.status(200).json(us);
  }





}
