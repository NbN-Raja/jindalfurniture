const {Products,Logo} = require("../model/category.model");
const Contact = require("../model/contact.model");
exports.get = (req, res) => {
  res
    .status(200)
    .send({
      message: "Hello from node js my name is jindal Steel!! Nice to Meet You",
    });
};

exports.post = async (req, res) => {
    try {
        const { name, description, price, category } = req.body;
        const imageurl = req.file.filename;
        const product = new Products({ name, description, price, category, imageurl });
        await product.save();
        res.send("Product added successfully");
      } catch (error) {
        console.log(error);
      }
      
};



exports.updateone=async (req,res)=>{

    try {
        const id = req.params.id
        const updates = { ...req.body, imageurl: req.file.filename }
      
        const response = await Products.findByIdAndUpdate(id, updates, { new: true, useFindAndModify: false })
      
        if (!response) {
          res.status(404).send({ message: "Error updating data" })
        } else {
          res.status(200).send({ message: "Update successful", response })
        }
      } catch (error) {
        res.status(400).send({ message: error.message })
      }
      
}


exports.logo=(req,res)=>{

    try {
        const logo = req.file.filename;
        const product = new Logo({ logo });
         product.save();
        res.send("Product logo added successfully");
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error adding product logo" });
      }
      


}

exports.contact=(req,res)=>{
    try {
        const data = req.body;
        const contact = new Contact(data);
         contact.save();
        res.send("Product logo added successfully");
      } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error adding product logo" });
      }
      




    
}