const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
require("./connection");

const auth = require("./routes/auth");
const list = require("./routes/list");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", auth);
app.use("/api/v2", list);

app.listen(PORT, () => {
  console.log("server started");
});
