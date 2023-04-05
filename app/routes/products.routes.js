module.exports=function(app){
    const router = require("express").Router();
    const productcontroller= require("../controller/productcontroller")
    const multer= require('multer')
    const path = require('path');

    const storage= multer.diskStorage({
        destination:function (req,file,cb) {
            cb(null,path.join(__dirname,'../public/category' ) )
            
        },
        filename:function(req,file,cb){
            const uniqueSuffix= Date.now()+ '-'+ file.originalname;
            cb(null,uniqueSuffix)
        }
    })
    
    const upload= multer({storage: storage})

    router.get("/products",productcontroller.get)
    router.post("/post",upload.single('imageurl'),productcontroller.post)
    router.put("/updateone/:id",upload.single('imageurl'),productcontroller.updateone)

    router.post("/logo",upload.single('logo'),productcontroller.logo)

    router.post("/contact",productcontroller.contact)

    
    

    app.use("/api", router);


}