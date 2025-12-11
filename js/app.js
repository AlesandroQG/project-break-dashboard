/*

*/

const menu = document.getElementById("menu"),
menuList = document.getElementById("menuList");
let menuToggle = false;

const setBackground = () => {
    const num = Math.floor(Math.random() * 10 + 1);
    document.body.style.backgroundImage = `url("./media/img/bg-${num}.jpg")`;
};

setInterval(setBackground, 15000);
setBackground();

menu.addEventListener("click", () => {
    if (menuToggle) {
        menuList.style.display = "none";
    } else {
        menuList.style.display = "block";
    }
    menuToggle = !menuToggle;
});
