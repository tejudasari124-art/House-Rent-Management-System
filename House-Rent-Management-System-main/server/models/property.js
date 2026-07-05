const mongoose = require("mongoose");
const propertySchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    type: {
        type: String,
        enum: ["Apartment", "House", "Villa", "PG"],
        required: true
    },

    image: {
        type: String,
        default: ""
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    status: {
        type: String,
        enum: ["Pending", "Approved", "Rejected"],
        default: "Pending"
    }

},
{
    timestamps: true
});

module.exports = mongoose.model("Property", propertySchema);