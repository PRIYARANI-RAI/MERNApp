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
        res.status(200).json({message: req.body});
    } catch(e){
        res.status(400).jsin({msg: "Bad Request"});
    }
};

module.exports = {home, register};