import { VideosType } from "../../@types/videos";
import { GetVideos } from "./api/videos/getVideos";
import { displayVideos } from "./createDisplayVideos";

export function LoadData(): VideosType[] {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path === "/favorites.html") {
    const favorites = LoadData();
    displayVideos(favorites);
  } else {  
    GetVideos();
  }
});