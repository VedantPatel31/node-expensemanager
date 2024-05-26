const { use } = require("../Routes/ExpenseRoutes");
const userSchema = require("../Schema/UserSchema");
const mailUtil = require('../util/MailUtil');
const passwordUtil = require('../util/PasswordUtil');
const tokenUtil = require('../util/TokenUtil');

const loginUser = async (req, res) => {
    var uEmail = req.body.email;
    var uPassword = req.body.password;
    console.log(uEmail);
    console.log(uPassword);
    const user = await userSchema.findOne({ email: uEmail, password: uPassword });
    console.log(user);
    if (user) {
        res.status(200).json({
            message: "login Success",
            data: user
        })
    } else {
        res.status(404).json({
            message: "Invalid Credentials",
        })
    }
}

const loginUserWithEnc = async (req, res) => {
    var uEmail = req.body.email;
    var uPassword = req.body.password;
    console.log(uEmail);
    console.log(uPassword);
    const user = await userSchema.findOne({ email: uEmail});
    const token = tokenUtil.generateToken(user.toObject());
    console.log(token);
    console.log(user);
    if (user) {
        if (await passwordUtil.comparePassword(uPassword, user.password)) {
            res.status(200).json({
                message: "login Success",
                data: user._id,token
            })
        }
        else {
            res.status(404).json({
                message: "Invalid credentials"
            })
        }
    } else {
        res.status(404).json({
            message: "Invalid Credentials",
        })
    }
}

const registerUser = (req, res) => {
    const user = new userSchema(req.body);
    user.save().then((data) => {

        mailUtil.sendMail(req.body.email, "welcome to our app", "this is test mail from nodejs").then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })

        res.status(201).json({
            message: "user registration is successful",
            data: data,
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

const registerUserWithEnc = async (req, res) => {
    const hashedPassword = await passwordUtil.encryptPassword(req.body.password);
    const userObj = {
        fName: req.body.fName,
        lName: req.body.lName,
        email: req.body.email,
        password: hashedPassword,
        mobileNo: req.body.mobileNo,
        status: req.body.status,
    }
    const user = new userSchema(userObj);
    var token = tokenUtil.generateToken(user.toObject());
    user.save().then((data) => {

        mailUtil.sendMail(req.body.email, "welcome to our app", "this is test mail from nodejs").then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })

        res.status(201).json({
            message: "user registration is successful",
            data: token,
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

module.exports = {
    // loginUser,
    // registerUser
    registerUserWithEnc,
    loginUserWithEnc
}