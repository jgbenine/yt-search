export function Modal(url: string, videoElement: HTMLUListElement) {
  const modal = document.querySelector(".modal");
  const iframe = modal.querySelector(".modal__iframe") as HTMLIFrameElement;
  const closeModal = modal.querySelector(".modal__close") as HTMLButtonElement;

  closeModal.addEventListener("click", () => {
    modal.classList.remove("modal--active");
    document.body.classList.remove('no-scroll');
    iframe.src = "";
  });

  videoElement.addEventListener("click", () => {
    modal.classList.add("modal--active");
    document.body.classList.add('no-scroll');
    iframe.src = `https://www.youtube.com/embed/${url.split("v=")[1]}`;
  });

  modal.addEventListener("click", () => {
    modal.classList.remove("modal--active");
    document.body.classList.remove('no-scroll');
    iframe.src = "";
  })
}
