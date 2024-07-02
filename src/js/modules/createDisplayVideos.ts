import { VideosType } from "../../../@types/videos";
import { handleFavoriteClick } from "./favorites/handleFavorites";
import { isFavorite } from "./favorites/isFavorites";
import { Modal } from "./modal";

export function createDisplayVideos(videos: VideosType[]) {
  const container = document.querySelector(".content__grid");
  container.innerHTML = "";

  videos.forEach((video) => {
    const videoElement = document.createElement("ul");
    videoElement.classList.add("card-video");
    videoElement.innerHTML = `
      <li class="card-video__item">
         <div class="card-video__wrapperImg">
          <img src="${video.thumbnail}" alt="${video.title}">
        </div>
        <article class="card-video__texts">
          <h2 class="card-video__title">${video.title}</h2>
          <p class="card-video__chanel">${video.chanelTitle}</p>
          <span class="card-video__views">${video.views.toLocaleString()} views</span>
          <button class="card-video__favorite" aria-label="favoritar" name="favoritar">
            <i class="fa-solid fa-star card-video__icon ${isFavorite(video.url) ? 'card-video__icon--active' : ''}"></i>
          </button>
        </article>
      </li>`;
    
    const favoriteButton = videoElement.querySelector(".card-video__favorite") as HTMLButtonElement;
    favoriteButton.addEventListener("click", (event) => {
      handleFavoriteClick(event, videoElement, video.url);
    });

    Modal(video.url, videoElement);
    container.appendChild(videoElement);
  });
}
