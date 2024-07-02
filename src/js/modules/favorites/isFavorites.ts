import { VideosType } from "../../../../@types/videos";

export function isFavorite(url: string): boolean {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  return favorites.some((video: VideosType) => video.url === url);
}