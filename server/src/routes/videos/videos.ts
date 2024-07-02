import express from "express";
import { GetVideos } from "./getVideos";

const router = express.Router();

router.get("/videos", async (req, res) => {
  try {
    const videos = await GetVideos();
    res.header('Access-Control-Allow-Origin', '*'); 
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
