const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
    bookProperty,
    getMyBookings
} = require("../controllers/bookingController");
const router = express.Router();
router.post("/book", protect, bookProperty);
router.get("/my-bookings", protect, getMyBookings);
module.exports = router;