const findOut = document.getElementById("findOut") as HTMLAnchorElement;

const clickToSecondPage = () => {
  const secondPage = document.getElementById("secondPage") as HTMLDivElement;

  if (secondPage) {
    window.scrollTo({
      top: secondPage.offsetTop,
      behavior: "smooth",
    });
  }
};

findOut.addEventListener("click", clickToSecondPage);

const sections = document.querySelectorAll(".section") as NodeListOf<HTMLDivElement>;
console.log(sections);

const checkScroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

window.addEventListener("scroll", checkScroll);
