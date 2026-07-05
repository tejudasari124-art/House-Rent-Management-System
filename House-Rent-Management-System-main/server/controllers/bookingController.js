const Booking = require("../models/Booking");
const bookProperty = async (req, res) => {
    try {
        const { property } = req.body;
        const booking = await Booking.create({
            user: req.user.id,
            property
        });
        res.status(201).json({
            message: "Property Booked Successfully",
            booking
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
            .populate("property");
        res.status(200).json(bookings);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    bookProperty,
    getMyBookings
};