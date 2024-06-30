import { VideosType } from "../../../@types/videos";

export function removeFromFavorites(url: string) {
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favorites = favorites.filter((video: VideosType) => video.url !== url);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}