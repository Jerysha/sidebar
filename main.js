const btnOpen = document.querySelector(".open-icon");
const btnClose = document.querySelector(".close-icon");
const side = document.querySelector(".sidemenu");

btnClose.addEventListener("click", () => {
    side.classList.toggle("active");
    btnOpen.style.display = "flex";
});
btnOpen.addEventListener("click", () => {
    side.classList.toggle("active");
    btnOpen.style.display = "none";
});