const Crausel= require('../model/carousel.model')
const path= require('path')
const fs = require('fs');


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


// update 

exports.update= (req,res)=>{
    const id = req.body.id
    const name = req.body.name
      
    const image = req.file.filename 

    Crausel.findByIdAndUpdate({_id:id},{$set : {name:name}},{$set: {image: image}})
     .then((response)=>{

      if(!response){
        res.status(401).send({mesage:"error deleting your id"})
      }else{

        // if(response.image) {
          
        //   const imagePath = path.join(__dirname, '../public/carousel', response.image);
        //   fs.unlink(imagePath , (error) => {
        //     if (error) {
        //       console.log(error);
        //     }
        //   });
        // }
        res.status(201).send({message: "updated  successfully"})
      }
      
    })    

      
      

}


exports.admin=(req,res)=>{

    const { username, password } = req.body;

  // Check if the username and password are correct
  if (username === 'admin' && password === 'process.env.ADMIN_PASSWORD') {
    res.send('Login successful');
  } else {
    res.status(401).send('Unauthorized');
  }

}