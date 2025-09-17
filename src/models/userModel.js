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
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
});

//creating new model or using existing model
const User = mongoose.models.User || mongoose.model("User", userSchema);

//export
export default User;