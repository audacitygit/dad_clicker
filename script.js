// Game State
let gameState = {
    energy: 0,
    totalEnergy: 0,
    energyPerSecond: 0,
    clickPower: 1,
    clickMultiplier: 1,
    totalClicks: 0,
    gems: 0,
    totalGems: 0,
    upgrades: {},
    clickUpgrades: {},
    cosmetics: {
        ownedItems: [],
        equippedHair: 'none',
        equippedGlasses: 'none',
        equippedFacialHair: 'none'
    },
    unlockedAchievements: []
};

// Cosmetic Items Definitions
const cosmeticDefinitions = [
    // Hair Styles
    {
        id: 'hair_brown',
        name: '👨 Brown Hair',
        description: 'Classic brown hair',
        category: 'hair',
        gemCost: 3,
        style: 'brown',
        clickMultiplier: 1.5
    },
    {
        id: 'hair_black',
        name: '👨‍🦱 Black Hair',
        description: 'Sleek black hair',
        category: 'hair',
        gemCost: 3,
        style: 'black',
        clickMultiplier: 1.5
    },
    {
        id: 'hair_blonde',
        name: '👱 Blonde Hair',
        description: 'Sunny blonde hair',
        category: 'hair',
        gemCost: 5,
        style: 'blonde',
        clickMultiplier: 2
    },
    {
        id: 'hair_gray',
        name: '👴 Gray Hair',
        description: 'Distinguished gray hair',
        category: 'hair',
        gemCost: 7,
        style: 'gray',
        clickMultiplier: 2.5
    },
    {
        id: 'hair_red',
        name: '👨‍🦰 Red Hair',
        description: 'Fiery red hair',
        category: 'hair',
        gemCost: 9,
        style: 'red',
        clickMultiplier: 3
    },
    {
        id: 'hair_spiky',
        name: '🎸 Spiky Hair',
        description: 'Cool spiky style',
        category: 'hair',
        gemCost: 15,
        style: 'spiky',
        clickMultiplier: 5
    },
    
    // Glasses
    {
        id: 'glasses_black',
        name: '👓 Black Glasses',
        description: 'Classic black frames',
        category: 'glasses',
        gemCost: 2,
        style: 'black',
        clickMultiplier: 2
    },
    {
        id: 'glasses_red',
        name: '🔴 Red Glasses',
        description: 'Bold red frames',
        category: 'glasses',
        gemCost: 4,
        style: 'red',
        clickMultiplier: 2.5
    },
    {
        id: 'glasses_blue',
        name: '🔵 Blue Glasses',
        description: 'Cool blue frames',
        category: 'glasses',
        gemCost: 4,
        style: 'blue',
        clickMultiplier: 2.5
    },
    {
        id: 'glasses_gold',
        name: '✨ Gold Glasses',
        description: 'Luxurious gold frames',
        category: 'glasses',
        gemCost: 10,
        style: 'gold',
        clickMultiplier: 4
    },
    {
        id: 'glasses_sunglasses',
        name: '😎 Sunglasses',
        description: 'Cool dad shades',
        category: 'glasses',
        gemCost: 20,
        style: 'sunglasses',
        clickMultiplier: 6
    },
    
    // Facial Hair
    {
        id: 'mustache',
        name: '👨 Mustache',
        description: 'Classic dad mustache',
        category: 'facialHair',
        gemCost: 6,
        style: 'mustache',
        clickMultiplier: 2
    },
    {
        id: 'beard',
        name: '🧔 Beard',
        description: 'Full grown beard',
        category: 'facialHair',
        gemCost: 12,
        style: 'beard',
        clickMultiplier: 3
    },
    {
        id: 'goatee',
        name: '🎭 Goatee',
        description: 'Stylish goatee',
        category: 'facialHair',
        gemCost: 8,
        style: 'goatee',
        clickMultiplier: 2.5
    }
];

// Click Power Upgrade Definitions
const clickUpgradeDefinitions = [
    {
        id: 'reinforced_mug',
        name: '💪 Reinforced Mug',
        description: 'Stronger clicks for dad',
        baseCost: 50,
        costMultiplier: 1.5,
        clickBoost: 1,
        icon: '💪'
    },
    {
        id: 'double_espresso',
        name: '⚡ Double Espresso',
        description: 'Double the clicking power!',
        baseCost: 500,
        costMultiplier: 1.5,
        clickBoost: 2,
        icon: '⚡'
    },
    {
        id: 'turbo_brew',
        name: '🚀 Turbo Brew',
        description: 'Supercharged clicking',
        baseCost: 5000,
        costMultiplier: 1.5,
        clickBoost: 5,
        icon: '🚀'
    },
    {
        id: 'mega_caffeine',
        name: '💥 Mega Caffeine',
        description: 'Explosive click energy',
        baseCost: 50000,
        costMultiplier: 1.5,
        clickBoost: 10,
        icon: '💥'
    },
    {
        id: 'ultra_espresso',
        name: '⭐ Ultra Espresso',
        description: 'Maximum click power',
        baseCost: 500000,
        costMultiplier: 1.5,
        clickBoost: 25,
        icon: '⭐'
    },
    {
        id: 'quantum_click',
        name: '🌟 Quantum Click',
        description: 'Reality-bending clicks',
        baseCost: 5000000,
        costMultiplier: 1.5,
        clickBoost: 50,
        icon: '🌟'
    }
];

// Upgrade Definitions
const upgradeDefinitions = [
    {
        id: 'espresso',
        name: '☕ Espresso Shot',
        description: 'A quick espresso boost',
        baseCost: 15,
        costMultiplier: 1.15,
        production: 0.1,
        icon: '☕'
    },
    {
        id: 'coffee_maker',
        name: '🫖 Coffee Maker',
        description: 'Automated coffee brewing',
        baseCost: 100,
        costMultiplier: 1.15,
        production: 1,
        icon: '🫖'
    },
    {
        id: 'barista',
        name: '👨‍🍳 Personal Barista',
        description: 'Someone to make coffee for dad',
        baseCost: 500,
        costMultiplier: 1.15,
        production: 5,
        icon: '👨‍🍳'
    },
    {
        id: 'coffee_shop',
        name: '🏪 Coffee Shop',
        description: 'A whole shop dedicated to dad',
        baseCost: 3000,
        costMultiplier: 1.15,
        production: 25,
        icon: '🏪'
    },
    {
        id: 'coffee_farm',
        name: '🌱 Coffee Farm',
        description: 'Fresh beans for dad',
        baseCost: 10000,
        costMultiplier: 1.15,
        production: 100,
        icon: '🌱'
    },
    {
        id: 'coffee_factory',
        name: '🏭 Coffee Factory',
        description: 'Industrial coffee production',
        baseCost: 40000,
        costMultiplier: 1.15,
        production: 400,
        icon: '🏭'
    },
    {
        id: 'coffee_empire',
        name: '🌍 Coffee Empire',
        description: 'Global coffee domination',
        baseCost: 200000,
        costMultiplier: 1.15,
        production: 2000,
        icon: '🌍'
    },
    {
        id: 'coffee_dimension',
        name: '✨ Coffee Dimension',
        description: 'A dimension made of pure coffee',
        baseCost: 1000000,
        costMultiplier: 1.15,
        production: 10000,
        icon: '✨'
    },
    {
        id: 'coffee_sun',
        name: '☀️ Coffee Sun',
        description: 'A star burning with caffeinated energy',
        baseCost: 10000000,
        costMultiplier: 1.15,
        production: 50000,
        icon: '☀️'
    },
    {
        id: 'coffee_world',
        name: '🪐 Coffee World',
        description: 'An entire planet made of coffee',
        baseCost: 100000000,
        costMultiplier: 1.15,
        production: 250000,
        icon: '🪐'
    },
    {
        id: 'coffee_universe',
        name: '🌌 Coffee Universe',
        description: 'Infinite galaxies of pure espresso',
        baseCost: 1000000000,
        costMultiplier: 1.15,
        production: 1000000,
        icon: '🌌'
    },
    {
        id: 'coffee_multiverse',
        name: '🌠 Coffee Multiverse',
        description: 'Endless realities fueled by coffee',
        baseCost: 10000000000,
        costMultiplier: 1.15,
        production: 5000000,
        icon: '🌠'
    }
];

// Achievement Definitions
const achievementDefinitions = [
    { id: 'first_click', name: 'First Sip', description: 'Click dad for the first time', requirement: () => gameState.totalClicks >= 1 },
    { id: 'hundred_clicks', name: 'Coffee Enthusiast', description: 'Click dad 100 times', requirement: () => gameState.totalClicks >= 100 },
    { id: 'thousand_clicks', name: 'Coffee Addict', description: 'Click dad 1,000 times', requirement: () => gameState.totalClicks >= 1000 },
    { id: 'first_upgrade', name: 'Getting Help', description: 'Buy your first upgrade', requirement: () => Object.values(gameState.upgrades).some(count => count > 0) },
    { id: 'ten_upgrades', name: 'Building Up', description: 'Own 10 total upgrades', requirement: () => Object.values(gameState.upgrades).reduce((a, b) => a + b, 0) >= 10 },
    { id: 'hundred_energy', name: 'Caffeinated', description: 'Reach 100 total energy', requirement: () => gameState.totalEnergy >= 100 },
    { id: 'thousand_energy', name: 'Wired', description: 'Reach 1,000 total energy', requirement: () => gameState.totalEnergy >= 1000 },
    { id: 'million_energy', name: 'Coffee God', description: 'Reach 1,000,000 total energy', requirement: () => gameState.totalEnergy >= 1000000 },
    { id: 'ten_per_second', name: 'Passive Income', description: 'Reach 10 energy per second', requirement: () => gameState.energyPerSecond >= 10 },
    { id: 'hundred_per_second', name: 'Energy Factory', description: 'Reach 100 energy per second', requirement: () => gameState.energyPerSecond >= 100 }
];

// Initialize upgrades
upgradeDefinitions.forEach(upgrade => {
    if (!(upgrade.id in gameState.upgrades)) {
        gameState.upgrades[upgrade.id] = 0;
    }
});

// Initialize click upgrades
clickUpgradeDefinitions.forEach(upgrade => {
    if (!(upgrade.id in gameState.clickUpgrades)) {
        gameState.clickUpgrades[upgrade.id] = 0;
    }
});

// DOM Elements
const energyCountEl = document.getElementById('energy-count');
const energyPerSecondEl = document.getElementById('energy-per-second');
const totalClicksEl = document.getElementById('total-clicks');
const totalEnergyEl = document.getElementById('total-energy');
const clickPowerEl = document.getElementById('click-power');
const clickMultiplierEl = document.getElementById('click-multiplier');
const gemsCountEl = document.getElementById('gems-count');
const dadClickerEl = document.getElementById('dad-clicker');
const upgradesContainer = document.getElementById('upgrades-container');
const clickUpgradesContainer = document.getElementById('click-upgrades-container');
const cosmeticsContainer = document.getElementById('cosmetics-container');
const achievementsContainer = document.getElementById('achievements-container');
const dadFaceEl = document.querySelector('.dad-face');
const clickNumbersContainer = document.getElementById('click-numbers');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const mouthEl = document.querySelector('.mouth');

// Initialize game
function init() {
    loadGame();
    calculateClickMultiplier();
    renderUpgrades();
    renderClickUpgrades();
    renderCosmetics();
    renderAchievements();
    updateDisplay();
    applyCosmetics();
    
    // Production loop
    setInterval(() => {
        gameState.energy += gameState.energyPerSecond / 10;
        gameState.totalEnergy += gameState.energyPerSecond / 10;
        updateDisplay();
    }, 100);
    
    // Auto-save every 30 seconds
    setInterval(saveGame, 30000);
    
    // Spawn gems every 90 seconds
    setInterval(spawnGem, 90000);
    
    // Spawn first gem after 10 seconds
    setTimeout(spawnGem, 10000);
}

// Click handler
dadClickerEl.addEventListener('click', (e) => {
    const totalClickValue = gameState.clickPower * gameState.clickMultiplier;
    gameState.energy += totalClickValue;
    gameState.totalEnergy += totalClickValue;
    gameState.totalClicks++;
    
    // Visual feedback
    dadClickerEl.style.transform = 'scale(0.95)';
    setTimeout(() => {
        dadClickerEl.style.transform = '';
    }, 100);
    
    // Floating number
    createFloatingNumber(e.clientX, e.clientY, totalClickValue);
    
    updateDisplay();
    checkAchievements();
});

// Create floating number effect
function createFloatingNumber(x, y, value) {
    const numberEl = document.createElement('div');
    numberEl.className = 'click-number';
    numberEl.textContent = `+${formatNumber(value)}`;
    numberEl.style.left = x + 'px';
    numberEl.style.top = y + 'px';
    
    clickNumbersContainer.appendChild(numberEl);
    
    setTimeout(() => {
        numberEl.remove();
    }, 1000);
}

// Render cosmetics
function renderCosmetics() {
    cosmeticsContainer.innerHTML = '';
    
    const categories = {
        hair: '💇 Hair Styles',
        glasses: '👓 Glasses',
        facialHair: '🧔 Facial Hair'
    };
    
    Object.entries(categories).forEach(([category, title]) => {
        const categorySection = document.createElement('div');
        categorySection.className = 'cosmetic-category';
        
        const categoryTitle = document.createElement('h3');
        categoryTitle.textContent = title;
        categoryTitle.style.marginTop = '20px';
        categoryTitle.style.marginBottom = '10px';
        categoryTitle.style.color = '#667eea';
        categorySection.appendChild(categoryTitle);
        
        const items = cosmeticDefinitions.filter(item => item.category === category);
        
        items.forEach(item => {
            const isOwned = gameState.cosmetics.ownedItems.includes(item.id);
            const isEquipped = gameState.cosmetics[`equipped${category.charAt(0).toUpperCase() + category.slice(1)}`] === item.style;
            const canAfford = gameState.gems >= item.gemCost;
            
            const itemEl = document.createElement('div');
            itemEl.className = 'cosmetic-item';
            
            if (isOwned) {
                itemEl.classList.add('owned');
                if (isEquipped) {
                    itemEl.classList.add('equipped');
                }
            } else if (canAfford) {
                itemEl.classList.add('affordable');
            } else {
                itemEl.classList.add('disabled');
            }
            
            itemEl.innerHTML = `
                <div class="cosmetic-header">
                    <span class="cosmetic-name">${item.name}</span>
                    ${isOwned ? (isEquipped ? '<span class="equipped-badge">✓ EQUIPPED</span>' : '<span class="owned-badge">OWNED</span>') : ''}
                </div>
                <div class="cosmetic-desc">${item.description}</div>
                <div class="cosmetic-bonus">🖱️ ${item.clickMultiplier}x Click Multiplier</div>
                ${!isOwned ? `<div class="cosmetic-cost">${canAfford ? '✨' : '❌'} ${item.gemCost} 💎 gems</div>` : ''}
            `;
            
            itemEl.addEventListener('click', () => {
                if (isOwned) {
                    equipCosmetic(item);
                } else {
                    buyCosmetic(item);
                }
            });
            
            categorySection.appendChild(itemEl);
        });
        
        cosmeticsContainer.appendChild(categorySection);
    });
}

// Spawn falling gem
function spawnGem() {
    const gem = document.createElement('div');
    gem.className = 'falling-gem';
    gem.innerHTML = '💎';
    
    // Random horizontal position (within safe bounds)
    const randomX = Math.random() * (window.innerWidth - 100) + 50;
    gem.style.left = randomX + 'px';
    gem.style.top = '-50px';
    
    document.body.appendChild(gem);
    
    // Animate falling
    let position = -50;
    const fallSpeed = 2;
    
    const fallInterval = setInterval(() => {
        position += fallSpeed;
        gem.style.top = position + 'px';
        
        // Remove if off screen
        if (position > window.innerHeight) {
            clearInterval(fallInterval);
            gem.remove();
        }
    }, 16);
    
    // Click to collect
    gem.addEventListener('click', () => {
        gameState.gems++;
        gameState.totalGems++;
        
        // Visual feedback
        gem.style.animation = 'gem-collect 0.5s ease-out';
        
        // Show +1 gem text
        const collectText = document.createElement('div');
        collectText.className = 'gem-collect-text';
        collectText.textContent = '+1 💎';
        collectText.style.left = gem.style.left;
        collectText.style.top = gem.style.top;
        document.body.appendChild(collectText);
        
        setTimeout(() => {
            collectText.remove();
        }, 1000);
        
        setTimeout(() => {
            clearInterval(fallInterval);
            gem.remove();
        }, 500);
        
        updateDisplay();
        renderCosmetics();
    });
}

// Buy cosmetic
function buyCosmetic(item) {
    if (gameState.gems >= item.gemCost && !gameState.cosmetics.ownedItems.includes(item.id)) {
        gameState.gems -= item.gemCost;
        gameState.cosmetics.ownedItems.push(item.id);
        
        // Auto-equip first item in category
        const categoryKey = `equipped${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`;
        if (gameState.cosmetics[categoryKey] === 'none') {
            gameState.cosmetics[categoryKey] = item.style;
        }
        
        calculateClickMultiplier();
        updateDisplay();
        renderCosmetics();
        applyCosmetics();
    }
}

// Calculate click multiplier from cosmetics
function calculateClickMultiplier() {
    let multiplier = 1;
    
    // Check each equipped cosmetic
    cosmeticDefinitions.forEach(item => {
        const categoryKey = `equipped${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`;
        if (gameState.cosmetics[categoryKey] === item.style) {
            multiplier *= item.clickMultiplier;
        }
    });
    
    gameState.clickMultiplier = multiplier;
}

// Equip cosmetic
function equipCosmetic(item) {
    const categoryKey = `equipped${item.category.charAt(0).toUpperCase() + item.category.slice(1)}`;
    
    if (gameState.cosmetics[categoryKey] === item.style) {
        // Unequip if already equipped
        gameState.cosmetics[categoryKey] = 'none';
    } else {
        // Equip
        gameState.cosmetics[categoryKey] = item.style;
    }
    
    calculateClickMultiplier();
    renderCosmetics();
    applyCosmetics();
    updateDisplay();
}

// Apply cosmetics to dad
function applyCosmetics() {
    if (!dadFaceEl) return;
    
    // Remove all cosmetic classes
    dadFaceEl.className = 'dad-face';
    
    // Apply equipped cosmetics
    if (gameState.cosmetics.equippedHair !== 'none') {
        dadFaceEl.classList.add(`hair-${gameState.cosmetics.equippedHair}`);
    }
    if (gameState.cosmetics.equippedGlasses !== 'none') {
        dadFaceEl.classList.add(`glasses-${gameState.cosmetics.equippedGlasses}`);
    }
    if (gameState.cosmetics.equippedFacialHair !== 'none') {
        dadFaceEl.classList.add(`facial-${gameState.cosmetics.equippedFacialHair}`);
    }
}

// Render click upgrades
function renderClickUpgrades() {
    clickUpgradesContainer.innerHTML = '';
    
    clickUpgradeDefinitions.forEach(upgrade => {
        const count = gameState.clickUpgrades[upgrade.id] || 0;
        const cost = calculateUpgradeCost(upgrade, count);
        const canAfford = gameState.energy >= cost;
        
        const upgradeEl = document.createElement('div');
        upgradeEl.className = 'upgrade-item click-upgrade';
        
        if (canAfford) {
            upgradeEl.classList.add('affordable');
        } else {
            upgradeEl.classList.add('disabled');
        }
        
        upgradeEl.innerHTML = `
            <div class="upgrade-header">
                <span class="upgrade-name">${canAfford ? '✅ ' : '🔒 '}${upgrade.name}</span>
                <span class="upgrade-count">${count}</span>
            </div>
            <div class="upgrade-desc">${upgrade.description}</div>
            <div class="upgrade-cost">${canAfford ? '✨ ' : '❌ '}${formatNumber(cost)} energy</div>
            <div class="upgrade-production" style="color: #ff6b6b;">👆 +${upgrade.clickBoost} per click</div>
        `;
        
        upgradeEl.addEventListener('click', () => buyClickUpgrade(upgrade));
        clickUpgradesContainer.appendChild(upgradeEl);
    });
}

// Render upgrades
function renderUpgrades() {
    upgradesContainer.innerHTML = '';
    
    upgradeDefinitions.forEach(upgrade => {
        const count = gameState.upgrades[upgrade.id] || 0;
        const cost = calculateUpgradeCost(upgrade, count);
        const totalProduction = upgrade.production * count;
        const canAfford = gameState.energy >= cost;
        
        const upgradeEl = document.createElement('div');
        upgradeEl.className = 'upgrade-item';
        
        if (canAfford) {
            upgradeEl.classList.add('affordable');
        } else {
            upgradeEl.classList.add('disabled');
        }
        
        upgradeEl.innerHTML = `
            <div class="upgrade-header">
                <span class="upgrade-name">${canAfford ? '✅ ' : '🔒 '}${upgrade.name}</span>
                <span class="upgrade-count">${count}</span>
            </div>
            <div class="upgrade-desc">${upgrade.description}</div>
            <div class="upgrade-cost">${canAfford ? '✨ ' : '❌ '}${formatNumber(cost)} energy</div>
            ${count > 0 ? `<div class="upgrade-production">⚡ ${formatNumber(totalProduction)}/sec</div>` : ''}
        `;
        
        upgradeEl.addEventListener('click', () => buyUpgrade(upgrade));
        upgradesContainer.appendChild(upgradeEl);
    });
}

// Calculate upgrade cost
function calculateUpgradeCost(upgrade, currentCount) {
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.costMultiplier, currentCount));
}

// Update upgrade affordability without re-rendering entire list
function updateUpgradeAffordability() {
    // Update production upgrades
    const upgradeElements = upgradesContainer.querySelectorAll('.upgrade-item');
    
    upgradeDefinitions.forEach((upgrade, index) => {
        const count = gameState.upgrades[upgrade.id] || 0;
        const cost = calculateUpgradeCost(upgrade, count);
        const canAfford = gameState.energy >= cost;
        const upgradeEl = upgradeElements[index];
        
        if (upgradeEl) {
            // Remove both classes first
            upgradeEl.classList.remove('affordable', 'disabled');
            
            // Add appropriate class
            if (canAfford) {
                upgradeEl.classList.add('affordable');
                // Update icons in the existing elements
                const nameEl = upgradeEl.querySelector('.upgrade-name');
                const costEl = upgradeEl.querySelector('.upgrade-cost');
                if (nameEl && !nameEl.textContent.includes('✅')) {
                    nameEl.textContent = `✅ ${upgrade.name}`;
                }
                if (costEl) {
                    costEl.textContent = `✨ ${formatNumber(cost)} energy`;
                }
            } else {
                upgradeEl.classList.add('disabled');
                // Update icons in the existing elements
                const nameEl = upgradeEl.querySelector('.upgrade-name');
                const costEl = upgradeEl.querySelector('.upgrade-cost');
                if (nameEl && !nameEl.textContent.includes('🔒')) {
                    nameEl.textContent = `🔒 ${upgrade.name}`;
                }
                if (costEl) {
                    costEl.textContent = `❌ ${formatNumber(cost)} energy`;
                }
            }
        }
    });
    
    // Update click upgrades
    const clickUpgradeElements = clickUpgradesContainer.querySelectorAll('.upgrade-item');
    
    clickUpgradeDefinitions.forEach((upgrade, index) => {
        const count = gameState.clickUpgrades[upgrade.id] || 0;
        const cost = calculateUpgradeCost(upgrade, count);
        const canAfford = gameState.energy >= cost;
        const upgradeEl = clickUpgradeElements[index];
        
        if (upgradeEl) {
            upgradeEl.classList.remove('affordable', 'disabled');
            
            if (canAfford) {
                upgradeEl.classList.add('affordable');
                const nameEl = upgradeEl.querySelector('.upgrade-name');
                const costEl = upgradeEl.querySelector('.upgrade-cost');
                if (nameEl && !nameEl.textContent.includes('✅')) {
                    nameEl.textContent = `✅ ${upgrade.name}`;
                }
                if (costEl) {
                    costEl.textContent = `✨ ${formatNumber(cost)} energy`;
                }
            } else {
                upgradeEl.classList.add('disabled');
                const nameEl = upgradeEl.querySelector('.upgrade-name');
                const costEl = upgradeEl.querySelector('.upgrade-cost');
                if (nameEl && !nameEl.textContent.includes('🔒')) {
                    nameEl.textContent = `🔒 ${upgrade.name}`;
                }
                if (costEl) {
                    costEl.textContent = `❌ ${formatNumber(cost)} energy`;
                }
            }
        }
    });
}

// Buy click upgrade
function buyClickUpgrade(upgrade) {
    const count = gameState.clickUpgrades[upgrade.id] || 0;
    const cost = calculateUpgradeCost(upgrade, count);
    
    if (gameState.energy >= cost) {
        gameState.energy -= cost;
        gameState.clickUpgrades[upgrade.id] = count + 1;
        
        // Recalculate click power
        calculateClickPower();
        
        updateDisplay();
        renderClickUpgrades();
        checkAchievements();
    }
}

// Calculate total click power
function calculateClickPower() {
    let total = 1; // Base click power
    clickUpgradeDefinitions.forEach(upgrade => {
        const count = gameState.clickUpgrades[upgrade.id] || 0;
        total += upgrade.clickBoost * count;
    });
    gameState.clickPower = total;
}

// Buy upgrade
function buyUpgrade(upgrade) {
    const count = gameState.upgrades[upgrade.id] || 0;
    const cost = calculateUpgradeCost(upgrade, count);
    
    if (gameState.energy >= cost) {
        gameState.energy -= cost;
        gameState.upgrades[upgrade.id] = count + 1;
        
        // Recalculate energy per second
        calculateEnergyPerSecond();
        
        updateDisplay();
        renderUpgrades();
        checkAchievements();
    }
}

// Calculate total energy per second
function calculateEnergyPerSecond() {
    let total = 0;
    upgradeDefinitions.forEach(upgrade => {
        const count = gameState.upgrades[upgrade.id] || 0;
        total += upgrade.production * count;
    });
    gameState.energyPerSecond = total;
}

// Render achievements
function renderAchievements() {
    achievementsContainer.innerHTML = '';
    
    achievementDefinitions.forEach(achievement => {
        const unlocked = gameState.unlockedAchievements.includes(achievement.id);
        
        const achievementEl = document.createElement('div');
        achievementEl.className = 'achievement';
        if (unlocked) {
            achievementEl.classList.add('unlocked');
        }
        
        achievementEl.innerHTML = `
            <div class="achievement-name">${unlocked ? '🏆' : '🔒'} ${achievement.name}</div>
            <div class="achievement-desc">${achievement.description}</div>
        `;
        
        achievementsContainer.appendChild(achievementEl);
    });
}

// Check achievements
function checkAchievements() {
    let updated = false;
    
    achievementDefinitions.forEach(achievement => {
        if (!gameState.unlockedAchievements.includes(achievement.id)) {
            if (achievement.requirement()) {
                gameState.unlockedAchievements.push(achievement.id);
                updated = true;
                showAchievementNotification(achievement);
            }
        }
    });
    
    if (updated) {
        renderAchievements();
    }
}

// Show achievement notification
function showAchievementNotification(achievement) {
    // Simple alert for now - could be enhanced with a toast notification
    setTimeout(() => {
        alert(`🏆 Achievement Unlocked!\n\n${achievement.name}\n${achievement.description}`);
    }, 100);
}

// Update Dad's mood based on energy
function updateDadMood() {
    const energy = gameState.energy;
    let mood = '😴'; // Default: tired/sleepy
    
    if (energy >= 10000) {
        mood = '🤩'; // Extremely energized!
    } else if (energy >= 5000) {
        mood = '😄'; // Very happy
    } else if (energy >= 2000) {
        mood = '😊'; // Happy and awake
    } else if (energy >= 1000) {
        mood = '🙂'; // Feeling better
    } else if (energy >= 500) {
        mood = '😐'; // Waking up
    }
    
    if (mouthEl) {
        mouthEl.textContent = mood;
    }
}

// Update display
function updateDisplay() {
    energyCountEl.textContent = formatNumber(Math.floor(gameState.energy));
    energyPerSecondEl.textContent = formatNumber(gameState.energyPerSecond.toFixed(1));
    totalClicksEl.textContent = formatNumber(gameState.totalClicks);
    totalEnergyEl.textContent = formatNumber(Math.floor(gameState.totalEnergy));
    clickPowerEl.textContent = formatNumber(gameState.clickPower);
    clickMultiplierEl.textContent = gameState.clickMultiplier.toFixed(1) + 'x';
    if (gemsCountEl) {
        gemsCountEl.textContent = gameState.gems;
    }
    
    // Update upgrade affordability in real-time
    updateUpgradeAffordability();
    
    // Update Dad's mood based on current energy
    updateDadMood();
}

// Format large numbers
function formatNumber(num) {
    num = Number(num);
    if (num >= 1000000000000) return (num / 1000000000000).toFixed(2) + 'T';
    if (num >= 1000000000) return (num / 1000000000).toFixed(2) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(2) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(2) + 'K';
    return num.toString();
}

// Save game
function saveGame() {
    localStorage.setItem('dadClickerSave', JSON.stringify(gameState));
    
    // Visual feedback
    saveBtn.textContent = '✅ Saved!';
    setTimeout(() => {
        saveBtn.textContent = '💾 Save Game';
    }, 2000);
}

// Load game
function loadGame() {
    const saved = localStorage.getItem('dadClickerSave');
    if (saved) {
        const loadedState = JSON.parse(saved);
        gameState = { ...gameState, ...loadedState };
        calculateEnergyPerSecond();
        calculateClickPower();
    }
}

// Reset game
resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your game? This cannot be undone!')) {
        // Clear all localStorage
        localStorage.removeItem('dadClickerSave');
        
        // Reset game state to defaults
        gameState = {
            energy: 0,
            totalEnergy: 0,
            energyPerSecond: 0,
            clickPower: 1,
            clickMultiplier: 1,
            totalClicks: 0,
            gems: 0,
            totalGems: 0,
            upgrades: {},
            clickUpgrades: {},
            cosmetics: {
                ownedItems: [],
                equippedHair: 'none',
                equippedGlasses: 'none',
                equippedFacialHair: 'none'
            },
            unlockedAchievements: []
        };
        
        // Reinitialize all upgrades
        upgradeDefinitions.forEach(upgrade => {
            gameState.upgrades[upgrade.id] = 0;
        });
        
        clickUpgradeDefinitions.forEach(upgrade => {
            gameState.clickUpgrades[upgrade.id] = 0;
        });
        
        // Reload the page to reset everything
        location.reload();
    }
});

// Save on button click
saveBtn.addEventListener('click', saveGame);

// Save before page unload
window.addEventListener('beforeunload', saveGame);

// Mobile tab switching
function setupMobileTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.querySelector(`[data-tab-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Start the game
init();
setupMobileTabs();
