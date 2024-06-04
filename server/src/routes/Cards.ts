import express from "express";
import { createCard, getAllCards } from "../controllers/Cards";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

//require auth for all todo routes
router.use(requireAuth);

router.get("/", getAllCards);
router.post("/", createCard);
router.delete("/", (req,res) => {res.json({message:"delete all my cards"})});
router.delete("/:id", (req,res) => {res.json({message:"delete card by id"})});
router.put("/:id", (req,res) => {res.json({message:"edit card by id"})});
router.patch("/:id", (req,res) => {res.json({message:"patch card property by id"})});

export default router;