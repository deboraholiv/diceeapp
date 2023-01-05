
function roll() {
  const playerOne = Math.floor(Math.random()*(6-1+1)+1)
  const playerTwo = Math.floor(Math.random()*(6-1+1)+1)
  
  document.querySelector(".img1").src="./images/dice"+playerOne+".png"
  document.querySelector(".img2").src="./images/dice"+playerTwo+".png"
  
  if (playerOne > playerTwo) {
    document.querySelector("h1").textContent = "Player 1 win"
  } else if (playerOne < playerTwo) {
    document.querySelector("h1").textContent = "Player 2 win" 
  } else if (playerOne === playerTwo) {
    document.querySelector("h1").textContent = "Draaaaaaw!"
  }
}


