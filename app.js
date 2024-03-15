const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyparser = require("body-parser");
const nounRouter = require("./routes/noun");
const prepositionRouter = require("./routes/preposition");
const homeRouter = require("./routes/home");
// const mongodbConnection = require('./connection/db')



const app = express();

const port = 3000;

//Static files
app.use(express.static("public"));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
// Set Templating Engine

// app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "views");

//routes
app.use("/", homeRouter);
app.use("/", nounRouter);
app.use("/", prepositionRouter);


app.use("/",(req, res, next) => {
  res.status(404).render("404", { IdTitle: "Page Not Found" });
});

//servers
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// mongodbConnection(()=>{
   
      
// });
module.exports = app;