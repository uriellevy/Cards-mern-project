import express from "express";

const router = express.Router();

router.get("/", (req,res) => {res.json({message:"get cards"})});
router.post("/", (req,res) => {res.json({message:"create card"})});
router.delete("/", (req,res) => {res.json({message:"delete all my cards"})});
router.delete("/:id", (req,res) => {res.json({message:"delete card by id"})});
router.put("/:id", (req,res) => {res.json({message:"edit card by id"})});
router.patch("/:id", (req,res) => {res.json({message:"patch card property by id"})});

export default router;