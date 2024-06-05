import express from "express";
import { createCard, deleteAllUserCards, deleteCard, editCard, getAllCards, getAllUserCards, toggleCardLike } from "../controllers/Cards";
import { requireAuth } from "../middleware/requireAuth";

const router = express.Router();

//require auth for all todo routes
router.use(requireAuth);

router.get("/", getAllCards);
router.get("/myCards", getAllUserCards);
router.post("/", createCard);
router.delete("/", deleteAllUserCards);
router.delete("/:id", deleteCard);
router.put("/:id", editCard);
router.patch("/:id", toggleCardLike);

export default router;