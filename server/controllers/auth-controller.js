const User = require('../models/user-model');

// Home Logic
const home = async (req, res) => {
    try{
        res.status(200).json({message: 'Welcome to MERN App'});
    } catch(e){
        console.log(e);
    }
}

//Register
const register = async (req, res) => {
    try{
        const {username, email, phone, password} = req.body;
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(400).json({msg: "Email already exists"});
        }
        const userCreated = await User.create({username, email, phone, password})
        res.status(200).json({msg: userCreated});
    } catch(e){
        res.status(400).json({msg: "Bad Request"});
    }
};

module.exports = {home, register};