const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const bodyParser = require("body-parser");
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");
const image = require("./models/image");
const YouTube = require("./models/YouTube");
const YouTubeHeaderOne = require("./models/YouTubeHeaderOne");
const NavBar = require("./models/NavBar");
const Quest = require("./models/YouTubeQuestion");
const LandingModel = require("./models/LandingModel");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({ extended: true })); //Urlencoded will allow us to extract the data from the form by adding her to the body property of the request.
// app.use(bodyParser. text({type: '/'}));
const dotenv = require("dotenv");
const Question = require("./models/YouTubeQuestion");
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
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

//------------/////////////
//--YOUTUBE CRUDE---//
//------------//////////////
// YOU TUBE GET METHOD
app.get("/youtube", (req, res) => {
  YouTube.find({}, (err, tasks) => {
    res.render("youtube.ejs", { youTube: tasks });
  });
});
// YOU TUBE POST METHOD
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
// YOU TUBE UPDATE
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
    YouTube.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      (err) => {
        if (err) return res.status(500).send(err);
        res.redirect("/youtube");
      }
    );
  });
//DELETE
app.route("/youtube/remove/:id").get((req, res) => {
  const id = req.params.id;
  YouTube.findByIdAndRemove(id, (err) => {
    if (err) return res.send(500, err);
    res.redirect("/youtube");
  });
});



//------------/////////////
//--YOUTUBE CRUD HEADER TITLE---//
//------------//////////////

// YOU TUBE GET headertitle
// app.get("/youtube/title", (req, res) => {
//   YouTubeHeaderOne.find({}, (err, headerTitle) => {
//     res.render("youtube.ejs", { youTubeHeaderOne: headerTitle });
//   });
// });
// // YOU TUBE POST header
// app.post("/youtube/title", async (req, res) => {
//   const youTube = new YouTubeHeaderOne({ homeTitle: req.body.homeTitle });
//   try {
//     await youTube.save();
//     res.redirect("/youtube");
//   } catch (err) {
//     res.redirect("/youtube");
//   }
// });
// // YOU TUBE UPDATE header
// app
//   .route("/youtube/title/edit/:id")
//   .get((req, res) => {
//     const id = req.params.id;
//     YouTubeHeaderOne.find({}, (err, headerTitle) => {
//       res.render("youtubeEdit.ejs", { youTubeHeaderOne: headerTitle, idData: id });
//     });
//   })
//   .post((req, res) => {
//     const id = req.params.id;
//     YouTubeHeaderOne.findByIdAndUpdate(
//       id,{ homeTitle: req.body.homeTitle },
//       (err) => {
//         if (err) return res.status(500).send(err);
//         res.redirect("/youtube");
//       }
//     );
//   });
// //DELETE header
// app.route("/youtube/title/remove/:id").get((req, res) => {
//   const id = req.params.id;
//   YouTubeHeaderOne.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(500, err);
//     res.redirect("/youtube");
//   });
// });


// //------------//
// //--LANDING ---//
// //------------//

// // Get method
// app.get("/landing", (req, res) => {
//   LandingModel.find({}, (err, data) => {
//     res.render("landing.ejs", { LandingModel: data });
//   });
// });

// // POST METHOD
// app.post("/land", async (req, res) => {
//   const landing = new LandingModel({
//     ...req.body,
//   });

//   try {
//     await landing.save();
//     res.redirect("/landing");
//   } catch (err) {
//     res.redirect("/landing");
//   }
// });

// // Update or edit route

// // ///////////////
// app
//   .route("/landing/edit/:id")
//   .get((req, res) => {
//     const id = req.params.id;
//     LandingModel.find({}, (err, data) => {
//       res.render("landingEdit.ejs", { landingModel: data, idData: id });
//     });
//   })
//   .post((req, res) => {
//     const id = req.params.id;
//     LandingModel.findByIdAndUpdate(
//       id,
//       {
//         ...req.body,
//       },
//       (err) => {
//         if (err) return res.status(500).send(err);
//         res.redirect("/landing");
//       });
//   });

// // DELETE
// app.route("/landing/remove/:id").get((req, res) => {
//   const id = req.params.id;
//   LandingModel.findByIdAndRemove(id, (err) => {
//     if (err) return res.send(500, err);
//     res.redirect("/landing");
//   });
// });


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
