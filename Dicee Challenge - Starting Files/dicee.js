const btn = document.querySelector("button");
const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  // for image1
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const diceRan = `dice${randomNumber1}.png`;
  const dice = `images/${diceRan}`;
  image1.setAttribute("src", dice);

  //   for image2
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;
  const diceRan2 = `dice${randomNumber2}.png`;
  const dice2 = `images/${diceRan2}`;
  image2.setAttribute("src", dice2);

  randomNumber1 > randomNumber2
    ? (h1.innerHTML = `Player 1 wins 🎉`)
    : (h1.innerHTML = `Player 2 wins 🎉`);

  console.log();
});
