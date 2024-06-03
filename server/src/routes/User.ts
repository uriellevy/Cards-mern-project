import express from "express";
import { getAllUsers, handleLogin, handleSignup } from "../controllers/User";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/login", handleLogin);
router.post("/signup", handleSignup);

export default router;