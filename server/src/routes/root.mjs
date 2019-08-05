import express from "express";
import sendSPA from "../controllers/app/app.mjs";

const router = express.Router();

/// send spa
router.get("*", sendSPA.get);

export default router;
