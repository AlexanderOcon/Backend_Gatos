import express from "express";
import { registrarPropietario } from "../controllers/propietario.controller.js";

const router = express.Router();

router.post("/propietario", registrarPropietario);

export default router;
