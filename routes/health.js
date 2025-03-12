const express = require('express');
const router = express.Router();

router.get('/',function(res,req){
    res.send(' Check');
})

module.exports = router;