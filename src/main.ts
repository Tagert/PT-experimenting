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
