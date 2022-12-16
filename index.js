const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require('fs');
const bodyParser = require("body-parser");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer  = require('multer');
const image = require("./models/image");
const YouTube = require("./models/YouTube");
const NavBar = require("./models/NavBar");
const Quest = require("./models/Question");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true })); //Urlencoded will allow us to extract the data from the form by adding her to the body property of the request.
// app.use(bodyParser. text({type: '/'}));
const dotenv = require("dotenv");
const Question = require("./models/Question");
dotenv.config();
app.use(bodyParser.urlencoded(
  { extended:true }))
app.use("/static", express.static("public"));
app.use(fileUpload());
//connection to db
// mongoose.set('useFindAndModify', true);
mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("Connected to db!");
    app.listen(8080, () => console.log("Server Up and running 8080"));
  }
);

app.set("view engine", "ejs");

// GET METHOD
app.get("/youtube", (req, res) => {
  YouTube.find({}, (err, tasks) => {
    res.render("youtube.ejs", { youTube: tasks });
  });
});

// POST METHOD
app.post("/youtube", async (req, res) => {
  const youTube = new YouTube({
    ...req.body,
  });

  try {
    await youTube.save();
    res.redirect("/youtube");
  } catch (err) {
    res.redirect("/youtube");
  }
});


app.post("/upload", (req, res) => {
  // Get the file that was set to our field named "image"
  const { image } = req.files;
  // If no image submitted, exit
  if (!image) return res.sendStatus(400);
  // Move the uploaded image to our upload folder
  const img = image.mv(__dirname + "/youtube/" + image.name);
  res.sendStatus(200);
});
// UPDATE
app
  .route("/youtube/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    YouTube.find({}, (err, data) => {
      res.render("youtubeEdit.ejs", { youTube: data, idData: id });
    });
  })
  .post((req, res) => {
    const id = req.params.id;
    YouTube.findByIdAndUpdate(id, { 
      ...req.body
    }, (err) => {
      if (err) return res.status(500).send(err);
      res.redirect("/youtube");
    });
  });

//DELETE
app.route("/youtube/remove/:id").get((req, res) => {
  const id = req.params.id;
  YouTube.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/youtube");
  });
});

///////////////////////////templates//////////////////////////////
// GET ROUTE FOR RESUME
// app.get("/resume", function (req, res) {
//   res.render("resume");
// });
// app.get('/resume', (req, res) => {
//   NavBar.find({}, function(err, nav){
//     res.render('resume.ejs', {
//       nnavBar: nav
//     });
//   });
// });
// // POST ROUTE FOR RESUME
// app.post("/resume", function (req, res) {
//   console.log(req.body.content2);
//   const contact = new NavBar({
//     ...req.body,
//   });
//   contact.save(function (err) {
//     if (err) {
//       throw err;
//     } else {
//       res.redirect("/resume");
      
//     }
//   });
// });

// app.get('/navbar', (req, res) => {
//   Question.find({}, function(err, data){
//     res.render("navbar.ejs",
//      { questioning: data });
//     // res.render('/', {
//     //   questionDetails: data
//     // });
//   });
// });
// // POST ROUTE FOR RESUME
// app.post("/navbar", function (req, res) {
//   console.log(req.body.questionn);
//   const question = new Quest({
//     ...req.body,
//   });
//   question.save(function (err) {
//     if (err) {
//       throw err;
//     } else {
//       res.redirect("/");
      
//     }
//   });
// });
// images
// var upload = multer({ storage: storage });
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.resolve(__dirname, 'uploads'));
//     // cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname + '-' + Date.now())
//   }
// })


// //Routes
// app.get("/image",(req,res)=>{
//   res.render("image");
// })

// app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
//   var img = fs.readFileSync(req.file.path);
//   var encode_img = img.toString('base64');
//   var final_img = {
//       // contentType:req.file.mimetype,
//       image:Buffer.from(encode_img,'base64')
//   };
//   image.create(final_img,function(err,result){
//       if(err){
//           console.log(err);
//       }else{
//           console.log(result.img.Buffer);
//           console.log("Saved To database");
//           res.contentType(final_img.contentType);
//           res.send(final_img.image);
//       }
//   })
// })