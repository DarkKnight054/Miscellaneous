var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    res.send('Current Time '+new Date());
});
module.exports = router;