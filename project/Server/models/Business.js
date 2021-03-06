const mongoose = require("mongoose");
const businessSchema = new mongoose.Schema({
    name: {
        type: mongoose.SchemaTypes.String, required: true, validate: {
            validator: function (value) {
                return value.length >= 2 && value.length <= 11;
            },
            message: value => "minimum 2 chars and max 11 chars" + value
        }
    },
    phoneNamber: { type: [String], required: true },
    email: { type: mongoose.SchemaTypes.String, required: true, unique: true },
    adress: { type: mongoose.SchemaTypes.String, required: true },
    img: { type: mongoose.SchemaTypes.String },
    advertising: { type: [mongoose.SchemaTypes.String] },
    userId: { type: mongoose.SchemaTypes.ObjectId, ref: "users", require: true },
    listCategory: { type: [String], required: true }
});
const Business = mongoose.model("business", businessSchema);
module.exports = Business;