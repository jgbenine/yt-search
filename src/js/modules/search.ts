import { GetVideosBySearch } from "./api/videos/searchVideos";

export function Search(){
  const inputValue = document.querySelector('.search__input') as HTMLInputElement;
  const btnSearch = document.querySelector('.search__button') as HTMLButtonElement;

  btnSearch.addEventListener('click', () => {
    const searchQuery = inputValue.value.trim();
    if(searchQuery){
      GetVideosBySearch(searchQuery);
    } else {
      console.log('Erro ao buscar videos.');
    }
  });
}