const Crausel= require('../model/carousel.model')


exports.get = (req, res) => {

    res.status(200).send({ message:"Hello from node js my name is jindal Steel!! Nice to Meet You"})
  };

  exports.postcrausel=(req,res)=>{
     // insert crausel Here 
        try{
            const name = req.body.name;
            const price = req.body.price;
            const image = req.file.filename;
            const crausel = new Crausel({ name, price, image });
            crausel.save()
              .then(() => res.send('Product added successfully'))
              .catch(err => console.log(err));
        }catch(error){
            console.log(error);
        }
       
   
  }

//   getting crausel

exports.getcrausel= (req,res)=>{

    Crausel.find()
  .then((data) => {
    if (data.length === 0) {
      res.status(404).send({
        message: `There are no images in database`,
      });
    } else {
      res.send(data);
    }
  })
  .catch((err) => {
    res.status(500).send({
      message: "Internal server error",
    });
  });

      
      

}