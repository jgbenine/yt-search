import { VideosType } from "../../../../@types/videos";
import { youtubeApi } from "../../api";

export async function SearchVideos(query: string) {
  try {
    const response = await youtubeApi.get("/search", {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 20,
        regionCode: "BR",
      },
    });
    const videos: VideosType[] = response.data.items.map((item) => ({
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      chanelTitle: item.snippet.channelTitle,
      views: 0,
    }));
   return videos;
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error.message);
  }
}