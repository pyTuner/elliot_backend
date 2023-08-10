const userData = require('./model.js');
const { use } = require('./routes.js');

const createUser = async (req) => {
    try {
        const user = new userData(req.body);
        if (user.passwd != user.cpasswd) {
            console.log(user)
            return {
                msg: 'password does not match',
                cpass: user.cpasswd,
                pass: user.passwd,

            }
        } else {
            const createUser = await user.save();
            return {
                msg: 'Successfully created the user!',
                id: createUser._id
            }
        }
    } catch (err) {
        console.log(err.message)
        return {
            error: err.message
        }
    }
}

const readUser = async (req) => {
    try {
        console.log(userData)
        const user = await userData.find({});
        console.log("Innerdone")
        return {
            data: user
        }
    } catch (err) {
        console.log(err.message)
        return {
            error: err.message
        }
    }
}

const updateUser = async (req) => {
    try {
        let userId = req.params._id;
        const user = await userData.updateOne({ "_id": userId }, { $set: req.body }, { runValidators: true });
        return {
            msg: 'Record updated successfully',
            data: user
        }
    } catch (err) {
        console.log(err.message)
        return {
            error: err.message
        }
    }
}

const deleteUser = async (req) => {
    try {
        let userId = req.params.id;
        console.log(req.params)
        const user = await userData.deleteOne({ "_id": userId })
        return {
            msg: 'Record deleted successfully',
            data: user
        }
    } catch (err) {
        console.log(err.message)
        return {
            error: err.message
        }
    }
}


module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}