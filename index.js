//Get the express library from node_modules which we have just downloaded.
const express = require("express");
const cors = require('cors');
const path = require("path");

const graphqlHTTP = require("express-graphql");

const mongoose = require("mongoose"); //using mongoose to connect with db

//Imports
const schema = require("./schema/schema");

//Making const of express() into a variable (JS function first class Object).
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, "client", "build")))

//Please change mongoDB connection as maybe I have deleted this db on mlab when you are using it.
mongoose.connect("mongodb+srv://ameron:ameron@mycluster-sgzns.mongodb.net/ameron?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true },
() => {
  console.log("Connect with DB successfully.");
});

/*We can use graphql on express server with middlewares, so that whenever
    we need graphql query from frontend, our express server can handle it
    smoothly.
*/
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//When our application starts, it will listen on port 4000
app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
