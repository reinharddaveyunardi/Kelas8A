let popUp = document.getElementById("cookiePopup");
document.getElementById("acceptCookie").addEventListener("click", () => {
  let d = new Date();
  d.setMinutes(2 + d.getMinutes());
  document.cookie = "myCookieName=thisIsMyCookie; expires = " + d + ";";
  popUp.classList.add("hide");
  popUp.classList.remove("show");
});
const checkCookie = () => {
  let input = document.cookie.split("=");
  if (input[0] == "myCookieName") {
    popUp.classList.add("hide");
    popUp.classList.remove("show");
  } else {
    popUp.classList.add("show");
    popUp.classList.remove("hide");
  }
};
window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 2000);
};