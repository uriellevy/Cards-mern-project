import express from "express";
import { getAllUsers, getUserById, handleLogin, handleSignup } from "../controllers/User";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post("/login", handleLogin);
router.post("/signup", handleSignup);

export default router;