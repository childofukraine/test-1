import express from "express";
import { Controller } from "../controller/contoller";

export const router = express.Router();

router.get("/bye", Controller.hi);
router.get("/hi", Controller.hi);

