const userData = require('./model.js');

const createUser = async (req) => {
    try {
        const user = new userData(req.body);
        if (user.passwd != user.cpasswd) {
            return { msg : 'password does not match'}
        } else {
            const createUser = await user.save();
            return {
                msg: 'Successfully created user!',
                id: createUser._id
            }
        }
    } catch (err) {
        console.log(err.message)
    }
}


module.exports = {
    createUser
}