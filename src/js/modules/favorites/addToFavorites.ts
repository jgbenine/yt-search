import { VideosType } from "../../../@types/videos";

export function addToFavorites(video: VideosType) {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  favorites.push(video);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}