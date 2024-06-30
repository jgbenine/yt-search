import { addToFavorites } from "./addToFavorites";
import { isFavorite } from "./isFavorites";
import { removeFromFavorites } from "./removeFromFavorites";
import { updateFavoritesCount } from "./updateFavorites";

export function handleFavoriteClick(event: MouseEvent, videoElement: HTMLElement, url: string) {
  const target = event.target as HTMLElement;

  if (target.closest(".card-video__favorite")) {
    event.stopPropagation();

    if (isFavorite(url)) {
      removeFromFavorites(url);
      target.classList.remove("card-video__icon--active");
    } else {
      const video = {
        url,
        title: (videoElement.querySelector(".card-video__title") as HTMLElement).innerText,
        thumbnail: (videoElement.querySelector("img") as HTMLImageElement).src,
        chanelTitle: (videoElement.querySelector(".card-video__chanel") as HTMLElement).innerText,
        views: (videoElement.querySelector(".card-video__views") as HTMLElement).innerText,
      };
      addToFavorites(video);
      target.classList.add("card-video__icon--active");
    }

    updateFavoritesCount();
    return true;
  }
  return false;
}