const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({ extended: true }))

app.post("/new-message", (req, res) => {
    const {message} = req.body ;
    if(!message || message.text.toLowerCase.indexOf("abdul") < 0){
        return res.end();
    }
})


axios
    .post(
        "https://api.telegram.org/bot6370130482:AAHR9OxWnxjSmK_u9fh0nMn05DR544DJniU/sendMessage",
        {
            chat_id: message.chat.id,
            text: "Heyyy!!",
        }
    )
    .then((response) => {
        console.log("message posted");
        res.end("ok") ;
    })
    .catch((err) => {
        console.log("Error: " + err);
        res.end("Error: " + err) ;
    })


    app.listen(3000, function(){
        console.log("App listening on port 3000");
    });

