const images = document.querySelectorAll(".wrapper-slide img");
const wrapperImages = document.querySelector(".wrapper-container-slick");

const translate = ({ index }) => {
  const wrapperSlick = document.querySelector(".wrapper-slide");
  const containerIcons = document.querySelector(".container-icons-slick");
  const percentageTranslate = 100 / images.length;

  wrapperSlick.style.transform = `translatex(${index * -percentageTranslate}%)`;
  containerIcons.style.transform = `translatey(${(index - 2) *
    -percentageTranslate}%)`;
};

const createsStructure = () => {
  const newContainerIcons = document.createElement("div");
  newContainerIcons.classList.add("container-icons");

  const newContainerWrapperSclick = document.createElement("div");
  newContainerWrapperSclick.classList.add("container-icons-slick");

  [...images].map((item, index) => {
    const position = parseInt(item.getAttribute("data-position"));
    const newIcon = document.createElement("span");
    newIcon.textContent = index;
    newIcon.classList.add("icon-slick");
    index === 0 && newIcon.classList.add("icon-around");
    index === 1 && newIcon.classList.add("icon-next");
    index === 2 && newIcon.classList.add("icon-selected");
    index === 3 && newIcon.classList.add("icon-next");
    index === 4 && newIcon.classList.add("icon-around");

    item.setAttribute("data-position", index);

    newIcon.addEventListener("click", () => {
      const icons = document.querySelectorAll(".icon-slick");
      icons[0] &&
        [...icons].map(icon => {
          icon.classList.remove("icon-selected");
          icon.classList.remove("icon-next");
          icon.classList.remove("icon-around");
        });


      [...icons][index - 1] && [...icons][index - 1].classList.add("icon-next");
      [...icons][index + 1] && [...icons][index + 1].classList.add("icon-next");
      [...icons][index - 2] &&
        [...icons][index - 2].classList.add("icon-around");
      [...icons][index + 2] &&
        [...icons][index + 2].classList.add("icon-around");
      newIcon.classList.add("icon-selected");

      translate({ index: index, item });
    });

    newContainerWrapperSclick.appendChild(newIcon);
  });

  newContainerIcons.appendChild(newContainerWrapperSclick);
  wrapperImages.appendChild(newContainerIcons);
};

createsStructure();

console.log(images);
