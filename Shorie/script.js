//Navbar End//


// Point Earned Upgrade and Auto //
const clickArea = document.getElementById('trash-can');
const clickCount = document.getElementById('bashPoint');
const level1 = document.getElementById('level1');
const cost1 = document.getElementById('cost1');
const upgrade1 = document.getElementById('upgrade1');
const autoClickBtn = document.getElementById('auto-click-btn');
let bashPoint = 0;
let upgrade1Cost = 10;
let upgrade1Level = 0;
let clickValue = 1;
let autoClickValue = 0.1 * clickValue; // new variable for auto click value
let currentStorage = 0;
let maxStorage = 50;
let autoClickInterval;

clickArea.addEventListener('click', () => {
  if (bashPoint < maxStorage) {
    if (bashPoint + clickValue <= maxStorage) {
      bashPoint += clickValue;
      clickCount.textContent = bashPoint.toFixed(1); // round to 1 decimal place
    } else {
      alert('Storage limit reached!');
    }
  }
});

upgrade1.addEventListener('click', () => {
  if (bashPoint >= upgrade1Cost) {
    bashPoint -= upgrade1Cost;
    upgrade1Cost *= 2;
    upgrade1Level++;
    clickValue = upgrade1Level + 1;
    autoClickValue = 0.1 * clickValue; // update auto click value
    level1.textContent = upgrade1Level + 1;
    cost1.textContent = upgrade1Cost;
  }
});

autoClickBtn.addEventListener('click', () => {
  if (autoClickInterval) {
    stopAutoClick();
    autoClickBtn.textContent = 'Bagi Yang Malas';
  } else {
    autoClick();
    autoClickBtn.textContent = 'WkWkWk yang tangan-nya pegel';
  }
});

const autoClick = () => {
  autoClickInterval = setInterval(() => {
    if (bashPoint + autoClickValue <= maxStorage) {
      bashPoint += autoClickValue;
      clickCount.textContent = bashPoint.toFixed(1); // round to 1 decimal place
    } else {
      stopAutoClick();
      autoClickBtn.textContent = 'Auto Click';
      alert('Storage limit reached!');
    }
  }, 500);
}

const stopAutoClick = () => {
  clearInterval(autoClickInterval);
}

//Click Area End//

// Upgrade section
const upgrade = document.getElementById('upgrade');

// Point Earned Upgrade
        // Moved to the first code 

// Weapon Upgrade
const currentWeapon = document.getElementById('current-weapon');
const weaponCost = document.getElementById('weapon-cost');
const upgradeButton = document.getElementById('upgrade-weapon');
const weaponImage = document.getElementById('weapon-image');

let weaponLevel = 0;
let maxWeaponLevel = 3;
let weaponCosts = [50, 100, 250];
let weapons = ['Frying Pan', 'Baseball Bat', 'Chainsaw', 'Plasma Gun'];
let weaponImages = ['frying_pan.png', 'baseball_bat.png', 'chainsaw.png', 'plasma_gun.png'];
let currentWeaponIndex = 0;

// Load default values for weapon level and cost
weaponCost.textContent = weaponCosts[weaponLevel];
currentWeapon.textContent = weapons[currentWeaponIndex];
weaponImage.src = weaponImages[currentWeaponIndex];

// Upgrade weapon when button is clicked
upgradeButton.addEventListener('click', () => {
  if (weaponLevel < maxWeaponLevel) {
    const cost = weaponCosts[weaponLevel];
    if (bashPoint >= cost) {
      bashPoint -= cost;
      weaponLevel++;
      currentWeaponIndex = weaponLevel;
      currentWeapon.textContent = weapons[currentWeaponIndex];
      weaponCost.textContent = weaponCosts[weaponLevel];
      weaponImage.src = weaponImages[currentWeaponIndex];
    }
  }
});

// Limit Storage
// Point Bash Storage Upgrade
  const storage = document.getElementById('storage');
  const cost5 = document.getElementById('cost5');
  const upgrade5 = document.getElementById('upgrade5');
  let upgrade5Cost = 25;
  let upgrade5Storage = 50;
  
  upgrade5.addEventListener('click', () => {
    if (bashPoint >= upgrade5Cost) {
      bashPoint -= upgrade5Cost;
      upgrade5Cost *= 1.5;
      upgrade5Storage *= 1.5;
      maxStorage = upgrade5Storage;
      storage.textContent = maxStorage;
      cost5.textContent = upgrade5Cost;
    }
  });
  
  
  function updateUpgradeUI() {
  level1.textContent = upgrade1Level + 1;
  cost1.textContent = upgrade1Cost;
  cost2.textContent = upgrade2Cost;
  cost3.textContent = upgrade3Cost;
  cost4.textContent = upgrade4Cost;
  storage.textContent = upgrade5Storage;
  cost5.textContent = upgrade5Cost;
}


// Upgrade End //

