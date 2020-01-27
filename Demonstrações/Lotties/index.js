const buttonCloseMincart = document.querySelector(".minicart-button-close");
const containerMinicart = document.querySelector(".minicart-container");
const startMinicart = document.querySelector(".start-minicart");
const minicartProduct = document.querySelectorAll(".minicart-product");
const trashList = document.querySelectorAll(".lottie-trash");
const minicartButtonBuy = document.querySelector(".minicart-button-buy");

const setAnimationDelay = props => {
  const { minicartProduct } = props;

  [...minicartProduct].map((product, index) => {
    product.style.animationDelay = `${index * 100 + 500}ms`;
  });
};

const setClickTrashList = () => {
  [...minicartProduct].map(product => {
    product.addEventListener("click", ({ target }) => {
      target.setAttribute("autoplay", true);
      startLottie({ lottie: target });
      if (target.classList.contains("lottie-trash")) {
        product.classList.add("minicart-product-close");
        product.style.animationDelay = "0ms";
        product.addEventListener("animationend", () => {
          product.remove();
        });
      }
    });
  });
};

const startLottie = ({ parent, lottie }) => {
  const innerLottie = lottie.innerHTML;
  const attributes = innerLottie.replace("<lottie-player", "").replace(
    `>
  </lottie-player>`,
    ""
  );

  console.log(innerLottie);
};

setClickTrashList();
setAnimationDelay({ minicartProduct });

minicartButtonBuy.addEventListener("click", ({ target }) => {
  const textButton = minicartButtonBuy.querySelector(
    ".minicart-button-buy-text"
  );
  minicartButtonBuy.classList.add("button-clicked");
  textButton.textContent = "";
  setTimeout(() =>{
    textButton.innerHTML = `
    <lottie-player class='lottie-cart'
    src="https://assets9.lottiefiles.com/datafiles/uoZvuyyqr04CpMr/data.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"    autoplay >
</lottie-player>
    `
  },500)
});

buttonCloseMincart.addEventListener("click", () => {
  containerMinicart.classList.add("minicart-container-close");
});
