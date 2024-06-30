export function updateFavoritesCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoritesCount = favorites.length;
  const countBadge = document.querySelector('.sidebar__count') as HTMLElement;
  if (countBadge && favoritesCount > 0) {
    countBadge.innerText = favoritesCount.toString();
  }else{
    countBadge.innerText = '0';
  }
}
document.addEventListener('DOMContentLoaded', updateFavoritesCount);