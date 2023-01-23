const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const User = require('../model/user.model');
exports.signup = async (request,response,next)=>{
  const errors  =  validationResult(request);
  if(!errors.isEmpty())
    return response.status(400).json({error: errors.array()});
  
  let saltKey = await bcrypt.genSalt(10);
  let encryptedPassword = await bcrypt.hash(request.body.password,saltKey);
  User.create({
      email: request.body.email,
      password: encryptedPassword
  }).then(result=>{
      return response.status(201).json(result);
  }).catch(err=>{
      return response.status(500).json({error: 'Server Error'});
  });
}