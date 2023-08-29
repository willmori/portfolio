const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.json({"users": ["u1", "u2", "u3"]});
})

app.listen(4000, () => {
    console.log("server listening on port 4000");
})