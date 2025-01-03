const mongoose=require('mongoose');


const PersonSchema=new mongoose.Schema({

    name:{
        type:String,
        require:true
    },

    age:{
        type:Number
    },

    work:{
        type:String,
        enum:['waiter','chef','manager'],
        require:true
    },
    mobile:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true
    }
     
});


const Person=mongoose.model('Person',PersonSchema);

module.exports=Person;