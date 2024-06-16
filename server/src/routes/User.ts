import express from "express";
import { getAllUsers, getUserById, handleLogin, handleSignup, deleteAllUsers, getUserByEmail } from "../controllers/User";

const router = express.Router();

router.get("/", getAllUsers);
// router.get("/filter", getUserByEmail);
router.get("/:id", getUserById);
router.post("/login", handleLogin);
router.post("/signup", handleSignup);
router.delete("/", deleteAllUsers);

export default router;