import { GetVideosSearchApi } from "./api/videos/getVideosSearchApi";


export function Search(){
  const inputValue = document.querySelector('.search__input') as HTMLInputElement;
  const btnSearch = document.querySelector('.search__button') as HTMLButtonElement;
  const titlePesquisa = document.querySelector('.content__title') as HTMLTitleElement;

  if(!inputValue) return;

  function searchVideos() {
    const searchQuery = inputValue.value.trim();
    if (searchQuery) {
      GetVideosSearchApi(searchQuery);
      titlePesquisa.innerText = `Videos: ${searchQuery}`;
    } else {
      console.log('Erro ao buscar videos.');
    }
  }

  inputValue.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      searchVideos();
    }
  });
  
  btnSearch.addEventListener('click', () => {
    searchVideos();
  });
}