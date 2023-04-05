const mongoose= require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String },
    price: { type: Number  },
    category: { type: String },
    imageurl: { type: String, required: true },
    logo: { type: String, required: true },
    uploadedAt: {
    type: Date,
    default: Date.now,
    required: true
  },

});


const logoSchema= new mongoose.Schema({
    logo: {type: String},
    name:{type:String}

})


const Logo = mongoose.model("logo", logoSchema);



const Products = mongoose.model("Products", productSchema);

module.exports = {
    Logo,
    Products
  };


