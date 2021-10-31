const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const User = require('./../models/user.model');
const Role = require('./../models/role.model');
const { secret } = require('./../config');
const { token_expired } = require('./../config');

const generateAccessToken = (id, roles) => {
  const payload = {id, roles};
  return jwt.sign(payload, secret, {expiresIn: token_expired});
}

class AuthController {
  async registration(req, res) {
    try {
      //handle errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({message: 'Registration error', errors})
      }

      const {username, password} = req.body;

      //check existing username
      const candidate = await User.findOne({username});
      if (candidate) {
        return res.status(400).json({message: 'A user with the same name already exists'});
      }
      //crypt password 
      const salt = bcrypt.genSaltSync(7);
      const hashedPassword = bcrypt.hashSync(password, salt);
      // create and save a new user
      const userRole = new Role();
      const newUser = new User({username, password: hashedPassword, roles: [userRole.value]});
      await newUser.save();
      return res.status(200).json({message: 'User registered successfully'})
    } catch (e) {
      console.error(e);
      res.status(400).json({message: 'Registration error'});
    } 
  }

  async login(req, res) {
    try {
      const {username, password} = req.body;
      // find user in mongoDB 
      const user = await User.findOne({username});
      if (!user) {
        return res.status(400).json({message: `User with username ${username} was not found`});
      }
      // comparing passwords of users
      const validPassword = bcrypt.compareSync(password, user.password);
      if (!validPassword) {
        return res.status(400).json({message: `Invalid password`});
      }
      // generate token
      const token = generateAccessToken(user._id, user.roles);
      return res.status(200).json({token});
    } catch (e) {
      console.error(e);
      res.status(400).json({message: 'Login error'});
    }
  }
  
  async getUsers(req, res) {
    try {

      // TODO: do not delete it temporary, please
      // const userRole = new Role();
      // const adminRole = new Role({value: 'admin'});
      // await userRole.save();
      // await adminRole.save();

      const users = await User.find();
      res.json(users);
    } catch (e) {
      console.error(e);
      res.status(400).json({message: 'Ger users error'});
    }
  }
}

module.exports = new AuthController();