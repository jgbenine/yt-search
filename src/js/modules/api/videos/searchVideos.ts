import { VideosType, YouTubeVideoItem } from "../../../../@types/videos";
import { displayVideos } from "../../createDisplayVideos";
import { youtubeApi } from "../apiConfig";

export async function GetVideosBySearch(query: string) {
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
    const videos: VideosType[] = response.data.items.map((item: any) => ({
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.high.url,
      chanelTitle: item.snippet.channelTitle,
      views: 0,
    }));
    displayVideos(videos);
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error.message);
  }
}