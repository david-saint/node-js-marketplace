const slug = require('slugs');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name!',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

storeSchema.pre('save', (next) => {
  if (!this.isModified('name')) {
    return next(); // skip it stop this function from continuing
  }
  this.slug = slug(this.name);
  return next();
});

module.exports = mongoose.model('Store', storeSchema);
