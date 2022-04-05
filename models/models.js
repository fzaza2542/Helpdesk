const mongoose = require ('mongoose');

const dataSchema = new mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    description:{
        type: String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true
        
    }
},{
    timestamps:true
}
)

module.exports = mongoose.model('Data',dataSchema)