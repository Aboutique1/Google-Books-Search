const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

var app = Express();
Mongoose.connect("mongodb://localhost/GoogleBooks");

// const PersonModel = Mongoose.model("person", {
//     firstname: String,
//     lastname: String
// });

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.post("/book", async (request, response) => {

});
app.get("/books", async (request, response) => {
    
});
app.get("/book/:id", async (request, response) => {});
app.put("/book/:id", async (request, response) => {});
app.delete("/book/:id", async (request, response) => {});

app.listen(3000, () => {
    console.log("Listening at :3000...");
});