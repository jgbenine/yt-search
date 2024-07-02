import { VideosType } from "../../../../@types/videos";
import { createDisplayVideos } from "../createDisplayVideos";
import { getVideosFromApi } from "./videos/getVideosApi";

export function LoadData(): VideosType[] {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path === "/favorites.html") {
    const favorites = LoadData();
    createDisplayVideos(favorites);
  } else {  
    getVideosFromApi();
  }
});