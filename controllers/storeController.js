const mongoose = require('mongoose');
// Model
const Store = mongoose.model('Store');

exports.homePage = async (req, res) => {
  const stores = await Store.find();
  const data = {
    title: '🎶🤷‍♀️✌',
    name: 'David',
    stores,
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

exports.getStores = async (req, res) => {
  // 1.Query the database for a list of stores
  const stores = await Store.find();
  res.render('stores', { title: 'Stores', stores });
};

exports.editStore = async (req, res) => {
  // 1. Find store with given id
  const store = await Store.findOne({ _id: req.params.id });
  // 2. confirm they are the owner of the store
  // 3. Reder out the edit form for so the user can update the info
  res.render('editStore', { title: `Edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  // 1. Find the store with the given id
  // 2. Update and SAve the store
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new store instead of the old store
    runValidators: true, // run the required validators
  }).exec();
  req.flash('success', `Successfully updated <strong>${store.name}</strong>.
    <a href="/stores/${store.slug}">View Store ⏭</a>`);
  // 3. Redirect to
  res.redirect(`/stores/${store._id}/edit`);
};
