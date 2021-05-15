
const express = require("express");
const app = express();

const PORT = process.env.PORT || 80

    app.use(express.static(__dirname + "/static"));
 
 
app.listen(PORT, ()=>{
    console.log('Server has been started ...')
});