function search() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('search-box');
  filter = input.value.toUpperCase();
  ul = document.getElementById("all");
  li = ul.getElementsByClassName("student-card");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h3")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

gsap.fromTo(
  ".loading-page",
  { opacity: 1 },
  {
    opacity: 0,
    display: "none",
    duration: 1.5,
    delay: 4.5,
  }
);
gsap.fromTo(
  ".logo-name",
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 2,
    delay: 0.5,
  }
);

const konteksMenu = document.querySelector(".wrapper"),
shareMenu = konteksMenu.querySelector(".share-menu");

window.addEventListener("contextmenu", e => {
    e.preventDefault();
    let x = e.offsetX, y = e.offsetY,
    winWidth = window.innerWidth,
    winHeight = window.innerHeight,
    cmWidth = konteksMenu.offsetWidth,
    cmHeight = konteksMenu.offsetHeight;

    if(x > (winWidth - cmWidth - shareMenu.offsetWidth)) {
        shareMenu.style.left = "-200px";
    } else {
        shareMenu.style.left = "";
        shareMenu.style.right = "-200px";
    }

    x = x > winWidth - cmWidth ? winWidth - cmWidth - 5 : x;
    y = y > winHeight - cmHeight ? winHeight - cmHeight - 5 : y;
    
    konteksMenu.style.left = `${x}px`;
    konteksMenu.style.top = `${y}px`;
    konteksMenu.style.visibility = "visible";
});

document.addEventListener("click", () => konteksMenu.style.visibility = "hidden");
document.addEventListener("scroll", () => konteksMenu.style.visibility = "hidden");

const myText = new SplitType('#teks')

gsap.to('.char', {
    y: 0,
    stagger: 0.05,
    delay: 0.2,
    duration: .1
})