import { VideosType } from "../../../../../@types/videos";
import { createDisplayVideos } from "../../createDisplayVideos";
import { apiConnect } from "../apiConnect";

export async function GetVideosSearchApi(query: string) {
  try {
    const response = await apiConnect.get("/search", {
      params: {
        q: query,
      },
    });
    const videos: VideosType[] = response.data;
    createDisplayVideos(videos);
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error.message);
  }
}