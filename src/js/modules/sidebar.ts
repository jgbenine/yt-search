export function Sidebar(){
  const sidebar = document.querySelector('.sidebar');
  const toggleButton = document.querySelector('.header__btn-nav');
  const sidebarItem = document.querySelectorAll('.sidebar__item');

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar--active');
  });

  sidebarItem.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      sidebarItem.forEach(item =>{
        item.classList.remove('sidebar__item--active');
      })
      item.classList.add('sidebar__item--active');
    });
  });

}