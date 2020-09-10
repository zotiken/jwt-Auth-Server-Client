const mongoose = require("mongoose");
const Schema =  mongoose.Schema;
const userSchema = new Schema(
    {
        email: {type:String, unique:true, requered: true},
        password: {type:String, requered: true}
    }
);


module.exports = mongoose.model("User", userSchema);