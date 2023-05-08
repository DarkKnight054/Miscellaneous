var express = require('express');
var router = express.Router();
router.get('/',function(req,res){
    res.send('It\'s a Node.js server-side application which allows developers to build fast and scalable web applications using JavaScript on the server-side.');
});
module.exports = router;