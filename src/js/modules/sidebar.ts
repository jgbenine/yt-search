export function Sidebar(){
  const sidebar = document.querySelectorAll('.sidebar__label');
  const toggleButton = document.querySelector('.header__btn-nav');

  toggleButton.addEventListener('click', () => {
    sidebar.forEach((item)=>{
      item.classList.toggle('sidebar__label--active');
    })
  });
}
