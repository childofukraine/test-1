import express from "express";
import { Controller } from "../controller/contoller";

export const router = express.Router();

router.get("/hiiiiiii", Controller.hi);
