const Property = require("../models/Property");
const addProperty = async (req, res) => {
    try {
        const {
            title,
            description,
            location,
            price,
            type,
            image
        } = req.body;

        const property = await Property.create({
            title,
            description,
            location,
            price,
            type,
            image,
            owner: req.user.id
        });

        res.status(201).json({
            message: "Property Added Successfully",
            property
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find().populate("owner", "name email");
        res.status(200).json(properties);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getPropertyById = async (req, res) => {
    try{
        const property = await Property.findById(req.params.id)
            .populate("owner", "name email");

        if(!property){
            return res.status(404).json({
                message: "Property not found"
            });
        }

        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const updateProperty = async (req, res) => {
    try{
        const property = await Property.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );
        if(!property) {
            return res.status(404).json({
                message: "Property not found",
            });
        }
        res.status(200).json({
            message: "Property Updated Successfully",
            property
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteProperty = async (req, res) => {
    try{
        const property = await Property.findByIdAndDelete(req.params.id);

        if(!property){
            return res.status(404).json({
                message: "Property not found"
            });
        }

        res.status(200).json({
            message: "Property Deleted Successfully"
        });

    } catch (error){
        res.status(500).json({
            message: error.message
        });
    }

};

module.exports = {
    addProperty,
    getAllProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
};