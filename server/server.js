const express = require("express");
const app = express();
const router = require("./routes/auth-route");
const connectDb = require("./utils/db");

app.use(express.json());

app.use("/api/auth", router);
const port = 5000;

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
});
