import { VideosType, YouTubeVideoItem } from "../../../../@types/videos";
import { youtubeApi } from "../../api";


export async function GetVideos() {
  try {
    const response = await youtubeApi.get("/videos", {
      params: {
        part: "snippet, statistics",
        chart: "mostPopular",
        maxResults: 20,
        regionCode: "BR",
      },
    });
    const videos: VideosType[] = response.data.items.map((item: YouTubeVideoItem) => ({
      url: `https://www.youtube.com/watch?v=${item.id}`,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.standard.url,
      chanelTitle: item.snippet.channelTitle,
      views: item.statistics.viewCount,
    }));
    return videos;
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error.message);
  }
}

