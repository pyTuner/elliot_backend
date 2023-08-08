const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');

// name validation
const nameVal = {
    type: String,
    minLength: [2, 'must be atleast 2 letters'],
    maxLength: [26, 'too long name'],
    trim: true,
    required: [true, `${this.key} is required`],
    validate(value) {
        const regexPattern = /^[a-zA-Z]+$/;
        if (!regexPattern.test(value)) {
            throw new Error('Make sure you have enter correct user name!')
        }
    }

}
// email validation
const emailVal = {
    type: String,
    required: [true, `${this.key} is required`],
    unique: true,
    validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error("Invalied email!")
        }
    }

}
// mobile number validation
const mobnumVal = {
    type: String,
    required: [true, `${this.key} is required`],
    unique: true,
    validate(value) {
        if (isNaN(value) || value < 5999999999 || value > 9999999999) {
            throw new Error("Invalied Mobile number, Insure your number is correct!")
        }
    }
}
// subscription validation
const subscriptionVal = {
    type: Boolean,
    required: [true, `${this.key} is required`]
}
// set password validation
const passwordVal = {
    type: String,
    validate(value) {
        if (!validator.isStrongPassword(value)) {
            throw new Error("Password doesnt meet minimum requirement!")
        }
    },
    required: [true, 'Password err'],

}

// schema 
const userSchema = new mongoose.Schema({
    fname: nameVal,
    mname: nameVal,
    lname: nameVal,
    email: emailVal,
    mobno: mobnumVal,
    subscription: subscriptionVal,
    passwd: passwordVal
})

// middleware for the password
userSchema.pre('save', async function (next) {
    if (this.isModified('passwd')) {
        this.passwd = await bcrypt.hash(this.passwd, 12);
        // console.log('ecrypted');
    }
    next();
})

// model
const userData = mongoose.model('employees', userSchema);

module.exports = userData;