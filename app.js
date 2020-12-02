const express = require("express")
const app = express()



var port = process.env.PORT || 3000
app.get('/', (req, res) => res.send(process.env))
app.listen(port, () => console.log("server running on port "+ port))