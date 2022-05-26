const express = require("express");
const router = express.Router();
const multer = require("multer");
const files = require("../Models/AddCart");
const Cart = require("../Models/Cart");

//const Cart = new Map();

const storage = multer.diskStorage({
    destination: (req, file, callback)=>{
        callback(null, "../frontend/public/uploads/");
    },
    filename: (req, file, callback)=> {
        callback(null, file.originalname);
    },
});

const upload = multer({storage: storage});

router.post("/save/images", upload.single("file"), (req, res) => {
    const file = new files({
        name: req.body.name,
        price: req.body.price,
        quentity: req.body.quentity,
        image: req.file.originalname
    });

    file
     .save()
     .then(()=> res.json("success"))
     .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/getimage").get((req,res)=>{

    files.find().then((image)=>{
         res.json(image)
    }).catch((err)=>{
         console.log(err)
    })
})

router.post("/addcart", (req,res) =>{

    let newMark = new Cart(req.body);

    newMark.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Mark saved successfully"
        });
    });
}); 

//get a specipic post
router.get("/cart/:id",(req,res) =>{
    let postId = req.params.id;

    files.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false, err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});


router.get('/getimage/:id',(function (req, res) {
    id = req.params.id;
    files.findById({ _id: req.params.id }, function (err, student) {
        console.log(id);
        res.json(student);
    });
}));
//get cart

router.get('/getcart', (req,res) =>{
    Cart.find().exec((err,files)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:files
        });
    });
});

//get posts

router.get('/getcarts', (req,res) =>{
    files.find().exec((err,files)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:files
        });
    });
});

router.route("/deletecartitem/:id").delete(async (req, res) =>{

    let userId = req.params.id;

    await Cart.findByIdAndDelete(userId).then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})

router.route("/deletecart").delete(async (req, res) =>{

    await Cart.deleteMany().then(()=>{
        res.status(200).send({status: "User Delete"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})



module.exports = router;