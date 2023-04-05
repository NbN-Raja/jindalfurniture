const mongoose= require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, },
  phone: { type: Number, },
  email: { type: String, },
  message: { type: String,  },
  uploadedAt: {
    type: Date,
    default: Date.now,
    required: true
  },

});


const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;


