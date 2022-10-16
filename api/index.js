import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import customerRoute from "./routers/costomer.js";
import inventoryRoute from "./routers/inventory.js";

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("connected", () => {
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB connected!")
})


//middlewere
app.use(express.json())


app.use("/api/costomer", customerRoute);
app.use("/api/inventory", inventoryRoute);



app.listen(8000, () => {
    connect()
    console.log("Connected to backend")
})