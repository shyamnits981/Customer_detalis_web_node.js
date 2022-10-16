import express from "express"
import Costomer from "../model/Costomer.js"
const router = express.Router();

//CREATE CUSTOMER DETAILS
router.post("/", async (req, res) => {
    const newCostomer = new Costomer(req.body)
    try {
        const savedCostomer = await newCostomer.save()
        res.status(200).json(savedCostomer);
    } catch (err) {
        res.status(500).json(err)
    }
});



export default router;