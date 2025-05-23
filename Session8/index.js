const express = require('express')
const path = require('path')


const app = express();

app.use(express.static(__dirname+"../Session7"));

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "../Session7", "index.html"));
})

app.listen(3000, () => console.log('Server started on port 3000'));