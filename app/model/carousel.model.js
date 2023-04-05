const mongoose= require('mongoose');

const crauselSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  uploadedAt: {
    type: Date,
    default: Date.now,
    required: true
  },

});






const Crausel = mongoose.model("crausel", crauselSchema);

module.exports = Crausel;


