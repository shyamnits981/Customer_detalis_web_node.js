import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({

    inventoryid: {
        type:String,
    },
    inventorytype: {
        type:String,
    },
    itemname:{
        type: String,
    },
    avaliblequantity: {
        type:String
    }

})

export default mongoose.model("Inventory", InventorySchema)