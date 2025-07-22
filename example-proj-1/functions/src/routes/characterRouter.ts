import express from "express"
import { fetchAllCharacters } from "../controllers/characters"
import { verifyFirebaseToken } from "../middleware/auth";

const router = express.Router()

router.get("/", verifyFirebaseToken as any, fetchAllCharacters)

router.get("/ping", (req, res) => {
    res.send("✅ Character router is active");
  });

export default router