export function updateFavoritesCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoritesCount = favorites.length;
  const countBadge = document.querySelector('.sidebar__count') as HTMLElement;
  const messageFavorite = document.querySelector('.favorite__menssage') as HTMLElement;
  const gridFavorites = document.querySelector('.content__grid--favorites') as HTMLElement;
  
  if (countBadge && favoritesCount > 0) {
    countBadge.innerText = favoritesCount.toString();
  }else{
    countBadge.innerText = '0';
    messageFavorite.style.display = 'block';
    gridFavorites.style.display = 'none';
  }
}
document.addEventListener('DOMContentLoaded', updateFavoritesCount);