
const express=require('express')
const router=express.Router();
const Menu=require('./../model/Menu')


router.post('/save', async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new Menu(data);

        // Save the person to the database
        const savedMenu = await newMenu.save();

        // Respond with success and the saved person
        res.status(200).json({ message: "User saved", savedMenu });
    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while saving Menu", error: err.message });
    }
});


router.get('/find', async (req, res) => {
    try {
        
        const newMenu=await Menu.find();

        // Save the person to the database

        // Respond with success and the saved person
        res.status(200).json({ message: "get menu", newMenu});
    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while fetching", error: err.message });
    }
});


router.get('/find/:type', async (req, res) => {
    try {
         const vegtype=req.params.type;

         if(vegtype=='Veg' || vegtype=='Non-Veg'){
        const newMenu=await Menu.find({type:vegtype});

        // Save the person to the database

        // Respond with success and the saved person
        res.status(200).json({ message: "get menu", newMenu});
         }
         else{
            res.status(404).json({message:'enter correct type'});
         }
    } catch (err) {
        // Send a detailed error message
        res.status(500).json({ message: "Error occurred while fetching", error: err.message });
    }
});
module.exports=router