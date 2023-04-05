module.exports = function(app) {
    var router = require("express").Router();
    const multer= require('multer')
    const path = require('path');
    const indexcontroller= require("../controller/indexcontroller")


    const storage= multer.diskStorage({
        destination:function (req,file,cb) {
            cb(null,path.join(__dirname,'../public/carousel' ) )
            
        },
        filename:function(req,file,cb){
            const uniqueSuffix= Date.now()+ '-'+ file.originalname;
            cb(null,uniqueSuffix)
        }
    })
    
    const upload= multer({storage: storage})

    router.post('/carousel',upload.single('image'),indexcontroller.postcrausel)

    // get images here 
    router.get('/carousel',indexcontroller.getcrausel)






  app.use("/api", router);

}