const express = require("express")
const app = express()



var port = process.env.PORT || 3000
app.get('/', (req, res) => res.send('App Setting: ' + process.env.APPSETTING_MyAppSettings + 'Connection String: ' + process.env.CUSTOMCONNSTR_MyConnectionString))
app.listen(port, () => console.log("server running on port "+ port))