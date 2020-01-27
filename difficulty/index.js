const employees = [
  {
    name: "Marcão",
    image: "./images/Screenshot_7.png",
    difficulties: [
      "Não sei usar o for (in)",
      "Não sei usar nenhum display além do flex e none",
      "Não sei pra que serve o aling-content",
      "Não sei fazer manipulações SVG por código",
      "Não sei usar o table no HTML"
    ]
  },
  {
    name: "Na",
    image: "./images/Screenshot_1.png",
    difficulties: [
      "Não entedo bem o Map do JS",
      "Não entendo bem o em do CSS (unidade relativa)",
      "Me perco em Javascript OO (Orientada a Objetos)",
      "O que é prototype em JS?",
      "Diferença entre LET e VAR para declaração de variáveis"
    ]
  },
  {
    name: "Marquinho",
    image: "./images/Screenshot_2.png",
    difficulties: [
      "Object.Assign",
      "Regex avançado",
      "Design Patterns",
      "Math.sign",
      "Event bubbling"
    ]
  },
  {
    name: "Dave",
    image: "./images/Screenshot_3.png",
    difficulties: [
      "MAP",
      "Filter",
      "if Ternário",
      "displays",
      "Conceito de dicionário"
    ]
  },
  {
    name: "Galego",
    image: "./images/Screenshot_4.png",
    difficulties: [
      "Display table",
      "Vertical align",
      "Recursividade",
      "Prototypes",
      "Canvas"
    ]
  },
  {
    name: "Tutu",
    image: "./images/Screenshot_5.png",
    difficulties: [
      "Nao sei Map",
      "Preciso entender melhor a tag picture",
      "Nao sei lidar bem com animation e transicion, principalmente lidando com percentual de progresso do evento",
      "Nao sei lidar bem com canvas no JS, apesar de conhecer um.tico",
      "Gostaria de entender um pouco mais sobre requisicoes de API"
    ]
  },
  {
    name: "Teteu",
    image: "./images/Screenshot_6.png",
    difficulties: [
      "Não sei oq map é, oq faz e para que serve",
      "O mesmo para filter",
      "O mesmo para reduce",
      "O mesmo para async/await",
      "Requisições Ajax sem jquery"
    ]
  }
];
const arrayMentors = [];
const boxDifficulty = document.querySelector('.difficulty-wrapper');
const buttonRandomMentor = document.querySelector('.mentor-button');
const buttonNext = document.querySelector('.next');

let count = 0;
let delay = 1;

const init = () =>{
  const name = document.querySelector('.name');
  const avatar = document.querySelector('.avatar');

  name.textContent = employees[count].name;
  avatar.src = employees[count].image;
  
  boxDifficulty.innerHTML = '';
  employees[count].difficulties.map((difficulty, index) =>{
    const newDifficulty = document.createElement('span');
    newDifficulty.style.animationDelay = `${index * 50}ms`
    newDifficulty.classList.add('difficulty-text');
    newDifficulty.textContent = difficulty;

    boxDifficulty.appendChild(newDifficulty);
  })
  
}

const randomMentor = () =>{
  const randomNumber = Math.floor(Math.random() * employees.length);
  if (randomNumber === count || arrayMentors.indexOf(employees[randomNumber].name) !== -1) return randomMentor();
  console.log(arrayMentors);
  const lastAvatar = document.querySelector('.mentor .avatar');
  const boxMentor = document.querySelector('.mentor');
  const newImage = document.createElement('img');
  newImage.classList.add('avatar');
  newImage.src = employees[randomNumber].image;

  lastAvatar.remove();
  boxMentor.appendChild(newImage);

  if (delay === 501) return arrayMentors.push(employees[randomNumber].name)
  delay += 10;
  setTimeout(randomMentor, delay)
}

buttonRandomMentor.addEventListener('click', () =>{
  delay = 1;
  randomMentor();
})

buttonNext.addEventListener('click', () =>{
  const lastAvatar = document.querySelector('.mentor .avatar');
  lastAvatar.src = './images/2753.png'
  count++;
  init();
})

init();
