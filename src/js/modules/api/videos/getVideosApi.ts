import { VideosType } from "../../../../../@types/videos";
import { createDisplayVideos } from "../../createDisplayVideos";
import { apiConnect } from "../apiConnect";


export async function getVideosFromApi() {
  try {
    const response = await apiConnect.get("/videos");
    const videos: VideosType[] = response.data;
    createDisplayVideos(videos);
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error.message);
  }
}