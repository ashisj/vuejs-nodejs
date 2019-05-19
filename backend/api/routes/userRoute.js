const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/checkAuth');
router.get('/home',checkAuth,function(req,res){
  //console.log(req.userData)
  res.status(202).json({
    status:true,
    data:req.userData
  });
});

module.exports = router;
