let playerScore = 0;
let scoreElem = document.querySelector("#cheeseCount");
let pickaxeClickElem = document.querySelector("#pickaxeAvailable");
let shovelClickElem = document.querySelector("#shovelAvailable");
let teammateClickElem = document.querySelector("#teammateAvailable");
let roverClickElem = document.querySelector("#roverAvailable");
let pickaxePrice = document.querySelector("#buyPickaxe");
let shovelPrice = document.querySelector("#buyShovel");
let teammatePrice = document.querySelector("#buyTeammate");
let roverPrice = document.querySelector("#buyRover");
// let amountPerSecond = document.querySelector("#amountPerSecond");

let clickUpgrades = {
  pickaxe: {
    price: 5,
    quantity: 0,
    multiplier: 1
  },
  shovel: {
    price: 10,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  teammate: {
    price: 10,
    quantiy: 0,
    multiplier: 4
  },
  rover: {
    price: 10,
    quantity: 0,
    multiplier: 8
  }
};

function mine() {
  if (clickUpgrades.pickaxe.quantity > 0) {
    playerScore += clickUpgrades.pickaxe.multiplier;
  }
  if (clickUpgrades.shovel.quantity > 0) {
    playerScore += clickUpgrades.shovel.multiplier;
  }
  playerScore++;
  update();
}

function buyPickaxe() {
  let pickaxe = clickUpgrades.pickaxe;
  if (playerScore >= pickaxe.price) {
    playerScore -= pickaxe.price;
    update();
    pickaxe.quantity++;
    pickaxeClickElem.textContent = pickaxe.quantity.toString();
    pickaxe.price = Math.ceil((pickaxe.price + 5) * 1.1);
    pickaxePrice.textContent = pickaxe.price.toString();
  }
}

function buyShovel() {
  let shovel = clickUpgrades.shovel;
  if (playerScore >= shovel.price) {
    playerScore -= shovel.price;
    update();
    shovel.quantity++;
    shovelClickElem.textContent = shovel.quantity.toString();
    shovel.price = Math.ceil((shovel.price + 10) * 1.1);
    shovelPrice.textContent = shovel.price.toString();
  }
}

function buyTeammate() {
  let teammate = automaticUpgrades.teammate;
  if (playerScore >= teammate.price) {
    playerScore -= teammate.price;
    update();
    teammate.quantiy++;
    teammateClickElem.textContent = teammate.quantiy.toString();
    teammate.price = Math.ceil((teammate.price + 10) * 1.2);
    teammatePrice.textContent = teammate.price.toString();
  }
}

function buyRover() {
  let rover = automaticUpgrades.rover;
  if (playerScore >= rover.price) {
    playerScore -= rover.price;
    update();
    rover.quantity++;
    roverClickElem.textContent = rover.quantity.toString();
    rover.price = Math.ceil((rover.price + 20) * 1.2);
    roverPrice.textContent = rover.price.toString();
  }
}

function update() {
  scoreElem.textContent = playerScore.toString();
  document.title = playerScore + " Pieces of Cheese";
}

function autoClickTimer() {
  let autoClicker = automaticUpgrades;
  playerScore += automaticUpgrades.teammate.quantiy;
}

// function save() {
//   localStorage.setItem("cheesecount", player.score.toString());
// }

// function load() {
//   player.score = localStorage.getItem("cheesecount")
//   player.score = parseInt(player.score.toString())
//   document.
// }

// function reset() {
//   playerScore = 0;

// }
