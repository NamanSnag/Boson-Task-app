const User =  require("../models/user");
const jwt =  require("jsonwebtoken");

// Register User
const registerUser = async (req, res, next) => {
    const {email, password, name} = req.body;

    try {

        const user = await User.findOne({email: email});

        if(user){
            return res.status(400).json({
                message: 'User already exists, please try again'
            });
        }

        await User.create({
            name: name,
            email: email,
            password: password
        });

        return res.status(200).json({
            message: "Successfully Sign Up"
        });
    } catch (error) {
        next(error); 
    }
};

// Login User
const login = async (req, res, next) => {
    const {email, password} = req.body;

    try {

        const user = await User.findOne({ email: email });

        if(!user) return res.status(404).json({
                message: 'User not found'
            });

        
        if(user.password != password) return res.status(403).json({
                message: 'Invalid Password or Email'
            });

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET_KEY);

        return res
        .cookie("token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ msg: "logIn sucessfully" ,details: { ...user._doc, password: 'undefine' } });
    } catch (error) {
        next(error);
    }
};

// exporting actions
module.exports = {
    registerUser,
    login
}