const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//definimos el schema de users

const usersSchema = new mongoose.Schema({
    email:{type: String, required: true, unique: true, trim: true},
    password:{type: String, trim: true, required: true},
    studentsTeach: [{type: mongoose.Types.ObjectId, ref: "students"}],
    edad: {type: Number},
    },
    {
        timestamps: true,
        collection: "users"
    }
);

usersSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

const User = mongoose.model("users" ,usersSchema);
module.exports = User;