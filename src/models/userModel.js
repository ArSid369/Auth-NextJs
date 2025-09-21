import mongoose from 'mongoose';

//creating database schema/object of user class
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    }, email: {
        type: String,
        required: [true, "Please provide a e-mail"],
        unique: true,
    }, password: {
        type: String,
        required: [true, "Please provide a password"],
        unique: true,
    }, isVerified: {
        type: Boolean,
        default: false,
    }, isAdmin: {
        type: Boolean,
        default: false,
    }, 
    forgotPasswordToken: {
        type: String,
        default: null,
    },
    forgotPasswordTokenExpiry: {
        type: Date,
        default: null,
    },
    verifyToken: {
        type: String,
        default: null,
    },
    verifyTokenExpiry: {
        type: Date,
        default: null,
    },
});

//creating new model or using existing model
const User = mongoose.models.User || mongoose.model("User", userSchema);

//export
export default User;