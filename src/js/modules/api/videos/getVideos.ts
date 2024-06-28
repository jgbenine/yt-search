import { VideosType, YouTubeVideoItem } from "../../../../@types/videos";
import { displayVideos } from "../../createDisplayVideos";
import { youtubeApi } from "../apiConfig";

export async function GetVideos() {
  try {
    const response = await youtubeApi.get("/videos", {
      params: {
        part: "snippet, statistics",
        chart: "mostPopular",
        // chanelId: 'UCZxr48h7_qEXuM1imy6NcCg',
        maxResults: 20,
        regionCode: "BR",
        // type : "video",
      },
    });
    const videos: VideosType[] = response.data.items.map((item: YouTubeVideoItem) => ({
      url: `https://www.youtube.com/watch?v=${item.id}`,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.standard.url,
      chanelTitle: item.snippet.channelTitle,
      views: item.statistics.viewCount,
    }));
    displayVideos(videos);
  } catch (error) {
    console.error("Erro ao buscar vídeos:", error.message);
  }
}

