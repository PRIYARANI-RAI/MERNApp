const express = require('express');
const app = express();
const router = require("./routes/auth-route");

app.use(express.json());

app.use("/api/auth", router);

const port = 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});