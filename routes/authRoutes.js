import express from "express";
import { Router as router } from "express";
import {register, login} from "../controllers/authController.js";
import { registerValidation, loginValidation } from "../middlewares/validation.js";

// Register route
router.post("/register", registerValidation, register);

// Login route
router.post("/login", loginValidation, login);

export default router