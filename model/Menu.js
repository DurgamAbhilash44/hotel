const mongoose = require('mongoose');

// Define the schema for the MenuItem
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['Starters', 'Main Course', 'Desserts', 'Beverages'],
    required: true
  },
  type: {
    type: String,
    enum: ['Veg', 'Non-Veg'],
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
});

// Create the MenuItem model using the schema
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;