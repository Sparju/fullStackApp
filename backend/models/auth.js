const mangoose=require('mongoose')
const authSchema=new mangoose.Schema({
   
    email: {
        type: String,
        required: true,
        unique: true  
    },
    password: {
        type: String,
        required: true
    },
})
const auth=mangoose.model("auth",authSchema);
module.exports = auth;