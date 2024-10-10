setInterval(() => {
    if(save.prestigeOrbs >= save.prestigeGoal) {
        save.prestigeOrbs -= save.prestigeGoal
        save.prestigeGoal *= 1.1
        save.prestigeTokens++
    }
    doge('prestigeBarOverlay').style.width = (save.prestigeOrbs / save.prestigeGoal) * 100 + '%'
    doge('menuPrestigeBarOverlay').style.width = (save.prestigeOrbs / save.prestigeGoal) * 100 + '%'
    doge('nextTokenGoal').innerText = `${formatNumber(DeBread.round(save.prestigeGoal - save.prestigeOrbs))} ${orbLabel} Orbs till next level`
    doge('prestigeTokensCount').innerText = `Prestige for ${save.prestigeTokens} Tokens`
    doge('prestigeWPSBoost').innerText = `+${formatNumber(DeBread.round(save.prestigeTokensActive * 10))}% Boost`

    doge('tokenCountCurrent').innerText = save.prestigeTokens
    doge('tokenCountNext').innerText = save.prestigeTokens + 1

    doge('menuTokenCountCurrent').innerText = save.prestigeTokens
    doge('menuTokenCountNext').innerText = save.prestigeTokens + 1
}, 10);

doge('prestigeWarningContainer').style.display = 'none'

let prestigeInfoUpdate
let prestigeMenuOpen = false

function openPrestige() {
    if(doge('prestigeMenuContainer').style.display === 'flex') {
        doge('prestigeMenuContainer').style.display = 'none'
    } else {
        doge('prestigeMenuContainer').style.display = 'flex'
        doge('menuPrestigeButton').innerText = 'Prestige'
    }
}

function closePrestige() {
    doge('prestigeMenuContainer').style.display = 'none'
    clearInterval(prestigeInfoUpdate)
    prestigeMenuOpen = false
    prestigeClicked = false
}

document.addEventListener('keydown', (ev) => {
    if(ev.key === 'Escape' && doge('prestigeMenuContainer').style.display === 'flex') {
        closePrestige()
    }
})

let prestigeClicked = false
function testPrestige() {
    if(prestigeClicked) {
        prestige()
        closePrestige()
    } else {
        prestigeClicked = true
        doge('menuPrestigeButton').innerText = 'Are you sure?'
    }
}

function prestige() {
    paused = true
    
    //Resets all items
    for(let item in save.items) {
        save.items[item].count = 0
        save.items[item].multiplier = 1
    }
    
    save.items.cursor.price = 10
    save.items.bone.price = 500
    save.items.tennisBall.price = 7500
    save.items.friend.price = 100000
    save.items.winnie.price = 2500000

    save.items.reinforcedGloves.price = 100
    save.items.magnifyingGlass.price = 250

    save.prestigeTokensActive += save.prestigeTokens
    save.prestigeTokens = 0
    save.prestigeOrbs = 0
    save.prestigeGoal = 1000000

    save.stats.upgradesBought = 0
    save.stats.itemsBought = 0

    save.goldenWinnieChance = 20

    save.flasks.current = 0
    save.flaskIncrease = 1


    update()

    //Closes prestige menu
    openPrestige()

    for(let i = 0; i < 600; i++) {
        setTimeout(() => {
            save.orbs -= DeBread.randomNum(save.orbs / DeBread.randomNum(20, 50), save.orbs / 110)
            update()
        }, 10 * i);
    }

    //Animation
    doge('sphere').classList.add('spherePrestigeAnim')
    doge('screenOverlay').style.display = 'flex'
    doge('screenOverlay').style.animation = 'screenAnim 7.5s ease-in 1 forwards'
    for(let i = 0; i < 60; i++) {
        setTimeout(() => {
            DeBread.shake('sphere', 10, 1 + i / 10, 1 + i / 10, 100)
            DeBread.shake('game', 10, 1 + i / 25, 1 + i / 25, 100)
        }, 100 * i);
    }
    setTimeout(() => {
        doge('sphere').classList.remove('spherePrestigeAnim')

        //Resets all upgrades
        for(let upgrade in save.upgrades) {
            save.upgrades[upgrade].unlocked = false
            save.upgrades[upgrade].bought = false
        }

        for(let item in save.items) {
            save.items[item].unlocked = false
        }

        Array.from(doge('itemStore').querySelectorAll('.item')).forEach(div => div.remove())
        Array.from(doge('toolStore').querySelectorAll('.item')).forEach(div => div.remove())

        save.gamblingUnlocked = false
        updateToolbarButtons()

        save.spellsUnlocked = false
        spellsCheck()

        //Clears upgrades
        doge('upgradeContainer').innerHTML = `<div id="noUpgrades"><span>No upgrades available!</span></div>`
    
        save.orbs = 0
        update()
    }, 6000);
    setTimeout(() => {
        doge('screenOverlay').style.display = 'none'
        doge('screenOverlay').style.animation = 'none'
        paused = false
        createNoti('Prestiged!', `You now have a +${save.prestigeTokensActive * 10}% WPS and WPC Boost!`)
        getAchievement('endlessCycle')
        autosave()
    }, 7500);
}