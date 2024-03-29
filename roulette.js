let commonRouletteChoices = [
    tankone = {
        name: "Fuel Tank +",
        rarity: "common",
        text:  (stateObj) => {
            return "Increase Fuel Tank by " + Math.ceil(5*stateObj.overallFuelModifier)
        },
        value: 5,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.fuelTankMax += Math.ceil(value * newState.overallFuelModifier);;
                newState.currentFuel += Math.ceil(value * newState.overallFuelModifier);;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "tank"
    },

    hullone = {
        name: "Hull Armor +",
        rarity: "common",
        text:  (stateObj) => {
            return "Increase Hull Armor by " + Math.ceil(5*stateObj.overallHullModifier)
        },
        value: 5,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.hullArmorMax += Math.ceil(value  * newState.overallHullModifier);
                newState.currentHullArmor += Math.ceil(value  * newState.overallHullModifier)
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "hull"
    },

    cargobayzero = {
        name: "Cargo Bay +",
        rarity: "common",
        text:  (stateObj) => {
            return "Increase Cargo Bay by 1"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.inventoryMax += value;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "cargobay"
    },

    dirtClod = {
        name: "Concentrated Mud",
        rarity: "common",
        text:  (stateObj) => {
            return "Fill your dirt reserves"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                if (!stateObj.noDirtThreshold) {
                    newState.dirtReserves = newState.dirtThresholdNeeded
                } else {
                    newState.dirtReserves += newState.dirtThresholdNeeded;
                }
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "dirt"
    },

]

let uncommonRouletteChoices = [
    weaponFill = {
        name: "Ammo Drop",
        rarity: "uncommon",
        text:  (stateObj) => {
            return "Gain 1 ammo"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.ammo += 1
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "weapon"
    },

    tanktwo = {
        name: "Fuel Tank ++",
        rarity: "uncommon",
        text:  (stateObj) => {
            return "Increase Fuel Tank by " + Math.ceil(10*stateObj.overallFuelModifier)
        },
        value: 10,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.fuelTankMax += Math.ceil(value * newState.overallFuelModifier);;
                newState.currentFuel += Math.ceil(value * newState.overallFuelModifier);;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "tank"
    },

    hulltwo = {
        name: "Hull Armor ++",
        rarity: "uncommon",
        text:  (stateObj) => {
            return "Increase Hull Armor by " + Math.ceil(10*stateObj.overallHullModifier)
        },
        value: 10,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.hullArmorMax += Math.ceil(value  * newState.overallHullModifier);
                newState.currentHullArmor += Math.ceil(value  * newState.overallHullModifier);
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "hull"
    },

    cargobayone = {
        name: "Cargo Bay ++",
        rarity: "uncommon",
        text:  (stateObj) => {
            return "Increase Cargo Bay By 2"
        },
        value: 2,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.inventoryMax += value;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "cargobay"
    },

    dirtefficiencyone = {
        name: "Dirt Efficiency +",
        rarity: "common",
        text:  (stateObj) => {
            return "Decrease dirt threshold by 10%"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                if (stateObj.dirtThresholdNeeded > 0) {
                    newState.dirtThresholdNeeded -= 5
                }
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "dirtEfficiency"
    },

]

let rareRouletteChoices = [
    weaponFillRare = {
        name: "Ammo Crate",
        rarity: "rare",
        text:  (stateObj) => {
            return "Gain 3 ammo"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.ammo += 3
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "weapon"
    },
    gemthree = {
        name: "Valuable Ore +",
        rarity: "rare",
        text:  (stateObj) => {
            return "Get $80"
        },
        value: 80,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bankedCash += value;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "gem"
    },

    tankthree = {
        name: "Fuel Tank +++",
        rarity: "rare",
        text:  (stateObj) => {
            return "Increase Fuel Tank by " + Math.ceil(15*stateObj.overallFuelModifier)
        },
        value: 15,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.fuelTankMax += Math.ceil(value * newState.overallFuelModifier);
                newState.currentFuel += Math.ceil(value * newState.overallFuelModifier);;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "tank"
    },

    hullthree = {
        name: "Hull Armor +++",
        rarity: "rare",
        text:  (stateObj) => {
            return "Increase Hull Armor by " + Math.ceil(15*stateObj.overallHullModifier)
        },
        value: 15,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.hullArmorMax += Math.ceil(value  * newState.overallHullModifier);
                newState.currentHullArmor += Math.ceil(value  * newState.overallHullModifier);
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "hull"
    },

    cargobaytwo = {
        name: "Cargo Bay +++",
        rarity: "rare",
        text:  (stateObj) => {
            return "Increase Cargo Bay by 3"
        },
        value: 3,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.inventoryMax += value;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "cargobay"
    },
    dirtefficiencyone = {
        name: "Dirt Efficiency ++",
        rarity: "rare",
        text:  (stateObj) => {
            return "Decrease dirt threshold by 20%"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                if (stateObj.dirtThresholdNeeded > 10) {
                    newState.dirtThresholdNeeded -= 10
                } else {
                    newState.dirtThresholdNeeded = 0
                }
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "dirtEfficiency"
    },

]

let legendaryRouletteChoices = [
    weaponFillLegendary = {
        name: "Ammo Depot",
        rarity: "legendary",
        text:  (stateObj) => {
            return "Gain 6 ammo"
        },
        value: 1,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.ammo += 6
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "weapon"
    },
    tankthree = {
        name: "Fuel Tank ++++",
        rarity: "legendary",
        text:  (stateObj) => {
            return "Increase Fuel Tank by " + Math.ceil(20*stateObj.overallFuelModifier)
        },
        value: 20,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.fuelTankMax += Math.ceil(value * newState.overallFuelModifier);;
                newState.currentFuel += Math.ceil(value * newState.overallFuelModifier);;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "tank"
    },

    hullfour = {
        name: "Hull Armor ++++",
        rarity: "legendary",
        text:  (stateObj) => {
            return "Increase Hull Armor by " + Math.ceil(20*stateObj.overallHullModifier)
        },
        value: 20,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.hullArmorMax += Math.ceil(value  * newState.overallHullModifier);
                newState.currentHullArmor += Math.ceil(value  * newState.overallHullModifier);
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "hull"
    },
    cargobaythree = {
        name: "Cargo Bay ++++",
        rarity: "legendary",
        text:  (stateObj) => {
            return "Increase Cargo Bay by 5"
        },
        value: 5,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.inventoryMax += value;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "cargobay"
    },

    gemfour = {
        name: "Valuable Ore ++",
        rarity: "legendary",
        text:  (stateObj) => {
            return "Get $200"
        },
        value: 200,
        rouletteFunc: async (stateObj, value) => {
            stateObj = immer.produce(stateObj, (newState) => {
                newState.bankedCash += value;
                newState.choosingRoulette = false;
            })
            await changeState(stateObj);
            return stateObj
        },
        type: "gem"
    },
]