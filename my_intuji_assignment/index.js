const blogRoutes = require("./routes/blogRoutes");
const errorHandler = require("./middleware/errorMiddleware");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

let current_id = 0;

const dbUrl = "mongodb://127.0.0.1:27017/blogs";
main()
  .then(() => {
    console.log("db connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

app.use("/blogs", blogRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
