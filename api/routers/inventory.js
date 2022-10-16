import express from "express"
import Inventory from "../model/Inventory.js"
const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
    const newInventory = new Inventory(req.body)
    try {
        const savedInventory = await newInventory.save()
        res.status(200).json(savedInventory);
    } catch (err) {
        res.status(500).json(err)
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
        const updatedInventory = await Inventory.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedInventory);
    } catch (err) {
        res.status(500).json(err)
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Inventory.findByIdAndDelete(req.params.id);
        res.status(200).json("Inventory has been deleted");
    } catch (err) {
        res.status(500).json(err)
    }
});


//GET
router.get("/:id", async (req, res) => {
    try {
        const Inventory = await Inventory.findById(req.params.id);
        res.status(200).json(Inventory);
    } catch (err) {
        res.status(500).json(err)
    }
});


//GET ALL
router.get("/", async (req, res) => {
    try {
        const Inventorys = await Inventory.find();
        res.status(200).json(Inventorys);
    } catch (err) {
        res.status(500).json(err)
    }
});

export default router;