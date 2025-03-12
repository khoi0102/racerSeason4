const express = require ('express')
const router = express.Router();
const fs = require('fs');
const {join} = require("node:path");
const path = require('path');


router.get('/',async function(req,res) {
    const filePath = path.join(__dirname, '../public/khoile.mp3');
    res.sendFile(filePath)

})
    module.exports = router;