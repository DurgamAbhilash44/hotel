const express=require('express');
const Person = require('./../model/Person');

const router=express.Router();



router.post('/save', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);

        // Save the person to the database
        const savedPerson = await newPerson.save();

        // Respond with success and the saved person
        res.status(200).json({ message: "User saved", savedPerson });
    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while saving", error: err.message });
    }
});


router.get('/person', async (req, res) => {
    try {
        
        const newPerson=await Person.find();

        // Save the person to the database

        // Respond with success and the saved person
        res.status(200).json({ message: "User saved", newPerson });
    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while saving", error: err.message });
    }
});



router.put('/:id', async (req, res) => {
    try {
        // Get the ID from the URL parameter
        const updateid = req.params.id;
        const data = req.body;

        // Update the person by ID and pass the data to be updated
        const updatedPerson = await Person.findByIdAndUpdate(updateid, data, { new: true });

        // If the user was not found
        if (!updatedPerson) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with success and the updated person
        res.status(200).json({ message: "User updated", updatedPerson });

    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while updating", error: err.message });
    }
});



router.delete('/:id', async (req, res) => {
    try {
        // Get the ID from the URL parameter
        const updateid = req.params.id;

        // Update the person by ID and pass the data to be updated
        const updatedPerson = await Person.findByIdAndDelete(updateid);

        // If the user was not found
        if (!updatedPerson) {
            return res.status(404).json({ message: "User not found" });
        }

        // Respond with success and the updated person
        res.status(200).json({ message: "User deleted"});

    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while deleting", error: err.message });
    }
});






module.exports=router;