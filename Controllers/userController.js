const users = require('../Model/userModel')



exports.register = async (req, res) => {
    const { username, password, email } = req.body
    console.log(username, password, email);

    try {
        const existingUser = await users.findOne({ email })
        if (!existingUser) {

            const newUser = new users({
                username, password, email
            })
            await newUser.save()

            res.status(200).json(newUser)
        }
        else {
            res.status(404).json("User Already exist!!")
        }
    }
    catch (err) {
        res.status(404).json(err)
    }

}


exports.login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    // res.status(200).json("Login Successfully!!")


    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            res.status(200).json(existingUser)
        }
        else {
            res.status(404).json("Login Failed...Invalid email/password")
        }
    }
    catch (err) {
        res.status(404).json(err)
    }

}