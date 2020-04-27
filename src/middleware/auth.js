const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = jwt.verify(token, 'firstjwt')
    const user = await User.findOne({_id: decoded._id, 'tokens.token': token})

    if (!user) { 
      throw new Error()
    }
    
    req.token = token
    req.user = user
    next()
    
  } catch (e) {
    res.status(401).send({error: 'Please Authenticate!'})
  }
}


module.exports = auth















// Maintanace Status

// app.use((req, res, next)=> {
//   res.status(503).send('The website is currently down. Please Check back after 1:00 A.M')
//  })
