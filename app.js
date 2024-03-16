require('dotenv').config()
const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
const bodyparser = require("body-parser");
const nounRouter = require("./routes/noun");
const prepositionRouter = require("./routes/preposition");
const homeRouter = require("./routes/home");
// const mongodbConnection = require('./connection/db')



const app = express();

const PORT = process.env.PORT || 3000;

//Static files
app.use(express.static("public"));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
// Set Templating Engine

// app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");

//routes
app.use("/api/v1/", homeRouter);
app.use("/api/v1/", nounRouter);
app.use("/api/v1/", prepositionRouter);




// app.use("/api/v1/",(req, res, next) => {
//   res.status(404).render("404", { IdTitle: "Page Not Found" });
// });

//servers
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

// mongodbConnection(()=>{
   
      
// });
