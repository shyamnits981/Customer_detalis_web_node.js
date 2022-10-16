import mongoose from "mongoose";

const CostomerSchema = new mongoose.Schema({

    costomerId: {
        type:String,
        
    },
    costomerName: {
        type:String,
    },
    email:{
        type: String,
    },
   

})

export default mongoose.model("Costomer", CostomerSchema)