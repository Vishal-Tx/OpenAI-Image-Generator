import express from "express";

import { generateImage } from "../Controllers/openaiRoutes.js";

const router = express.Router();

router.post("/generateimage", generateImage);

export default router;
