const mongoose = require('mongoose');
// Model
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  const data = {
    title: '🎶🤷‍♀️✌',
    name: 'David',
  };
  res.render('hello', data);
};

exports.addStore = (req, res) => {
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  const store = await (new Store(req.body)).save();
  req.flash('success', `Successfully Created ${store.name}. Care to leave a review`);
  res.redirect(`/store/${store.slug}`);
};

exports.getStores = (req, res) => {
  res.render('stores', { title: 'Stores' });
};
