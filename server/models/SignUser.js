import mongoose from 'mongoose'

// const { Schema } = mongoose;
// mongoose.Promise = global.Promise;

const UserSignupSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        registration: {
            type: String,
            required: true,
            unique: true,
        },
        branch: {
            type: String,
            required: true,
        },
        idCard: {
            type: String,
            required: true,
        },
        mobile: {
            type: Number, 
          },
          profile_pic: {
            type: String,
          },
          interests: {
            type: String,
            required: true,
        },
        password: {
            type: String,
          },
          isVerified:{
            bool: false,
          }
          

})


UserSignupSchema.pre("save", async function () {
  try {
    const User = this.constructor;
    const userExists = await User.find({
      name: this.get("name"),
    })
      .lean()
      .exec();
    if (userExists.length > 0) {
      throw new Error(errorHandler.errors.REGISTER_USERNAME_EXISTS);
    }
  } catch (err) {
    throw new Error(errorHandler.errors.REGISTER_USERNAME_EXISTS);
  }
});

 module.exports = mongoose.models.User || mongoose.model('UserInfo', UserSignupSchema)