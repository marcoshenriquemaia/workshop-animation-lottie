const informationField = document.querySelector(".informaions-field");
const informaionsArea = document.querySelector(".informations-area");

const letterTest = ({ letter }) => {
  const forbiddenLetters = [219, 222, 16, 18, 17, 13, 9, 20];

  if (forbiddenLetters.indexOf(letter) !== -1) return false;
  if (forbiddenLetters.indexOf(letter) === -1) return true;
};

const backSpace = () => {
  const arrayLetters = [...informationField.value];
  const lastLetter = arrayLetters[arrayLetters.length - 1];
  const letters = document.querySelectorAll('.letter');

  arrayLetters.pop();
  letters[letters.length -1].classList.add('removing')
  setTimeout(() =>{
    letters[letters.length -1].remove();
  }, 30)
};

informationField.addEventListener("keydown", ({ which }) => {
  if (!letterTest({ letter: which })) return;
  console.log(which);
  if (which === 8) return backSpace();

  const arrayLetters = [...informationField.value];
  const lastLetter = arrayLetters[arrayLetters.length - 1];
  const newLetterSpan = document.createElement("p");
  newLetterSpan.textContent = lastLetter;
  newLetterSpan.classList.add("letter");
  informaionsArea.appendChild(newLetterSpan);

});
