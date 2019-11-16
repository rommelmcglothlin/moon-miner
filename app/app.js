let playerScore = -1;
let addPickaxe = 0;
let addShovel = 0;

//DATA
let scoreElem = document.querySelector("#cheeseCount");
let pickaxeClickElem = document.querySelector("#pickaxeAvailable");
let shovelClickElem = document.querySelector("#shovelAvailable");
let teammateClickElem = document.querySelector("#teammateAvailable");
let roverClickElem = document.querySelector("#roverAvailable");
let pickaxePrice = document.querySelector("#buyPickaxe");
let shovelPrice = document.querySelector("#buyShovel");
let teammatePrice = document.querySelector("#buyTeammate");
let roverPrice = document.querySelector("#buyRover");
// let amountPerSecond = document.querySelector("#amountPerSecond"); may add it later

//function save() {}
//function load() {}
//function reset() {}

let clickUpgrades = {
  pickaxe: {
    price: 10,
    quantity: 0,
    multiplier: 1
  },
  shovel: {
    price: 20,
    quantity: 0,
    multiplier: 2
  }
};

let automaticUpgrades = {
  teammate: {
    price: 50,
    quantiy: 0,
    multiplier: 4
  },
  rover: {
    price: 100,
    quantity: 0,
    multiplier: 8
  }
};

function mine() {
  playerScore += 1 + addPickaxe + addShovel;
  update();
}

function buyPickaxe() {
  let pickaxe = clickUpgrades.pickaxe;
  if (playerScore >= pickaxe.price) {
    playerScore -= pickaxe.price;
    pickaxe.quantity++;
    pickaxeClickElem.textContent = pickaxe.quantity.toString();
    addPickaxe += pickaxe.multiplier;
    pickaxe.price *= 2;
    pickaxePrice.textContent = pickaxe.price.toString();
    update();
  }
}

function buyShovel() {
  let shovel = clickUpgrades.shovel;
  if (playerScore >= shovel.price) {
    playerScore -= shovel.price;
    shovel.quantity++;
    shovelClickElem.textContent = shovel.quantity.toString();
    addShovel += shovel.multiplier;
    shovel.price *= 3;
    shovelPrice.textContent = shovel.price.toString();
    update();
  }
}

function buyTeammate() {
  let teammate = automaticUpgrades.teammate;
  if (playerScore >= teammate.price) {
    playerScore -= teammate.price;
    teammate.quantiy++;
    update();
    teammateClickElem.textContent = teammate.quantiy.toString();
    teammate.price *= 4;
    teammatePrice.textContent = teammate.price.toString();
    autoClicker();
  }
}

function buyRover() {
  let rover = automaticUpgrades.rover;
  if (playerScore >= rover.price) {
    playerScore -= rover.price;
    rover.quantity++;
    update();
    roverClickElem.textContent = rover.quantity.toString();
    rover.price *= 20;
    roverPrice.textContent = rover.price.toString();
    autoClicker();
  }
}

function update() {
  scoreElem.textContent = playerScore.toString();
  document.title = playerScore + " Pieces of Cheese";
}

function autoClicker() {
  update();
  playerScore +=
    automaticUpgrades.teammate.multiplier * automaticUpgrades.teammate.quantiy +
    automaticUpgrades.rover.multiplier * automaticUpgrades.rover.quantity;
}
setInterval(autoClicker, 5000);

mine();
