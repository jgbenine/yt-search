import express from "express";
import { SearchVideos } from "./searchVideos";
const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const query = req.query.q as string; 
    const videos = await SearchVideos(query);
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
