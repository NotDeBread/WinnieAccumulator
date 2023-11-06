let cursor = {
    x: 0,
    y: 0,
}

document.addEventListener('mousemove', (event) => {
    cursor.x = event.pageX
    cursor.y = event.pageY
    updateTooltipPos()
})

setInterval(updateTooltipPos, 100)

function updateTooltipPos() {
    if(cursor.x - doge('tooltip').offsetWidth / 2 < 0) {
        doge('tooltip').style.left = '0px'
    } else {
        doge('tooltip').style.left = cursor.x - doge('tooltip').offsetWidth / 2 + 'px'
    }
    if(cursor.y - doge('tooltip').offsetHeight - 10 < 0) {
        doge('tooltip').style.top = cursor.y + doge('tooltip').offsetHeight / 4 + 'px'
    } else {
        doge('tooltip').style.top = cursor.y - doge('tooltip').offsetHeight - 10 + 'px'
    }
}

function sphereClick() {
    getAchievement('click')

    let clickValue
    if(DeBread.randomNum(1, save.critChance) === 1) {
        clickValue = save.wpc * DeBread.randomNum(1.5, 3, 2)
        DeBread.shake('sphere', 10, 5, 5, 250, false)
        save.critClickMultiplier += 0.001
        getAchievement('CRITICALHIT')
    } else {
        clickValue = save.wpc
    }

    getOrbs(clickValue)
    save.stats.timesClicked++

    update()

    if(save.settings.togglable.showWPSOnClick) {
        const clickDisplay = document.createElement('span')
        clickDisplay.classList.add('clickDisplay')
        clickDisplay.innerText = formatNumber(DeBread.round(clickValue, 2))
    
        if(clickValue !== save.wpc) {
            clickDisplay.style.scale = '125%'
            clickDisplay.style.color = 'aqua'
            clickDisplay.style.fontWeight = '900'
        }
    
        clickDisplay.style.rotate = DeBread.randomNum(-18, 18) + 'deg'
        document.body.appendChild(clickDisplay)
    
        clickDisplay.style.left = cursor.x - clickDisplay.offsetWidth / 2 + 'px'
        clickDisplay.style.top = cursor.y - clickDisplay.offsetHeight / 2 + 'px'
    
        setTimeout(() => {
            document.body.removeChild(clickDisplay)
        }, 3000);
    }

    if(clickValue !== save.wpc) {
        const clickEffect = document.createElement('span')
        clickEffect.classList.add('clickEffect')

        document.body.appendChild(clickEffect)

        clickEffect.style.left = cursor.x - clickEffect.offsetWidth / 2 + 'px'
        clickEffect.style.top = cursor.y - clickEffect.offsetHeight / 2 + 'px'

        setTimeout(() => {
            document.body.removeChild(clickEffect)
        }, 1500);
    }
}

let buyAmount = 1

updateBuyAmount()
function updateBuyAmount() {
    for(let i = 0; i < 3; i++) {
        doge(`buyAmount${Math.pow(10, i)}`).style.boxShadow = 'inset 2px 2px var(--BG), inset -2px -2px var(--Button)'
        doge(`buyAmount${Math.pow(10, i)}`).style.color = 'grey'
    }
    doge(`buyAmount${buyAmount}`).style.boxShadow = 'inset -2px -2px var(--BG), inset 2px 2px var(--Button)'
    doge(`buyAmount${buyAmount}`).style.color = 'white'
}

function buyItem(item) {
    for(let i = 0; i < buyAmount; i++) {
        if(save.orbs >= save.items[item].price) {
            save.orbs -= Math.round(save.items[item].price)
            save.stats.orbsSpent += Math.round(save.items[item].price)
            save.items[item].count++
            save.items[item].price *= 1.1
            save.stats.itemsBought++
            if(item === 'cursor') {
                getAchievement('automatedWinnieClicking')
            }
            if(item === 'tennisBall') {
                getAchievement('weShouldGoPlayTennis')
            }
            if(item === 'reinforcedGloves') {
                getAchievement('agressiveWinnieClicking')
            }
            if(item === 'magnifyingGlass') {
                getAchievement('accurateWinnieClicking')
            }
        }
        update()
    }
    let i = 0
    for(let item in save.items) {
        if(save.items[item].count >= 1) {
            i++
        }
        if(i === 7) {
            getAchievement('theWholeCollection')
        }
    }
}

let orbLabel

let goldenWPSMultiplier = 1
let goldenWPCMultiplier = 1
let goldenCritMultiplier = 1

for(let item in save.items) {
    save.items[item].unlocked = false
}

for(let upgrade in save.upgrades) {
    save.upgrades[upgrade].unlocked = false
}

function update() {
    orbLabel = save.settings.modes[save.settings.mode]
    if(save.orbs >= 1000000) {
        if(timeSkipHover) {
            doge('countDisplay').innerHTML = formatNumber(Math.round(save.orbs + (save.wps * 600))) + `<br>${orbLabel} Orbs`
            doge('countDisplay').style.color = 'aqua'
        } else {
            doge('countDisplay').innerHTML = formatNumber(Math.round(save.orbs)) + `<br>${orbLabel} Orbs`
            doge('countDisplay').style.color = 'white'
        }
    } else {
        if(timeSkipHover) {
            doge('countDisplay').innerText = formatNumber(Math.round(save.orbs + (save.wps * 600))) + ` ${orbLabel} Orbs`
            doge('countDisplay').style.color = 'aqua'
        } else {
            doge('countDisplay').innerText = formatNumber(Math.round(save.orbs)) + ` ${orbLabel} Orbs`
            doge('countDisplay').style.color = 'white'
        }
    }
    doge('WPSDisplay').innerText = `${formatNumber(save.wps)} ${orbLabel[0]}PS`
    doge('WPCDisplay').innerText = `${formatNumber(save.wpc)} ${orbLabel[0]}PC`

    if(!save.items.cursor.unlocked) {
        save.items.cursor.unlocked = true
        displayNewItem('cursor', 'Cursor', 'WPS', 'itemStore')
    }

    if(!save.items.reinforcedGloves.unlocked) {
        save.items.reinforcedGloves.unlocked = true
        displayNewItem('reinforcedGloves', 'Reinforced Gloves', 'WPC', 'toolStore')
    }

    if(save.totalorbs >= 10000 && !save.items.bone.unlocked) {
        save.items.bone.unlocked = true
        displayNewItem('bone', 'Bone', `WPS`, 'itemStore')
    }

    if(save.totalorbs >= 100000 && !save.items.tennisBall.unlocked) {
        save.items.tennisBall.unlocked = true
        displayNewItem('tennisBall', 'Tennis Ball', `WPS`, 'itemStore')
    }

    if(save.totalorbs >= 1000000 && !save.items.friend.unlocked) {
        save.items.friend.unlocked = true
        displayNewItem('friend', 'Friend', `WPS`, 'itemStore')
    }

    if(save.totalorbs >= 50000000 && !save.items.winnie.unlocked) {
        save.items.winnie.unlocked = true
        displayNewItem('winnie', 'Winnie', `WPS`, 'itemStore')
    }

    if(save.items.reinforcedGloves.count >= 5 && !save.items.magnifyingGlass.unlocked) {
        save.items.magnifyingGlass.unlocked = true
        displayNewItem('magnifyingGlass', 'Magnifying Glass', 'critical click chance', 'toolStore')
    }

    for(let item in save.items) {
        if(save.items[item].unlocked) {
            doge(`${item}Count`).innerText = save.items[item].count
            doge(`${item}Price`).innerText = formatNumber(Math.round(compoundPrice(save.items[item].price, buyAmount)))
            if(compoundPrice(save.items[item].price, buyAmount) > save.orbs) {
                doge(`${item}Price`).style.color = 'red'
            } else {
                doge(`${item}Price`).style.color = 'lime'
            }
        }
    }

    if(save.stats.upgradesBought === Object.keys(upgrades).length) {
        getAchievement('completionist')
    }

    let unlockedAchievements = 0

    for(let achievement in save.achievements) {
        if(!save.achievements[achievement].secret && save.achievements[achievement].unlocked) {
            unlockedAchievements++
        }
    }

    if(unlockedAchievements === Object.keys(save.achievements).length - 4) {
        getAchievement('completionistII')
    }

    let achievementsCollected = 0

    for(let achievement in save.achievements) {
        if(save.achievements[achievement].unlocked) {
            achievementsCollected++
        }
    }

    if(achievementsCollected === Object.keys(save.achievements).length - 1) {
        getAchievement('completionistIII')
    }

    save.wps = ((save.items.cursor.count * save.items.cursor.multiplier) + 
    ((save.items.bone.count * save.items.bone.multiplier) * save.items.bone.baseWPS) + 
    ((save.items.tennisBall.count * save.items.tennisBall.multiplier) * save.items.tennisBall.baseWPS) +
    ((save.items.friend.count * save.items.friend.multiplier) * save.items.friend.baseWPS) + 
    ((save.items.winnie.count * save.items.winnie.multiplier) * save.items.winnie.baseWPS)) 
    * goldenWPSMultiplier
    * ((save.prestigeTokensActive / 10) + 1)

    save.wpc = (1 + ((save.items.reinforcedGloves.count * 0.25) * save.items.reinforcedGloves.multiplier)) * save.critClickMultiplier * goldenWPCMultiplier * ((save.prestigeTokensActive / 10) + 1)
    
    if((100 - (save.items.magnifyingGlass.count * 0.25)) * goldenCritMultiplier >= 4) {
        save.critChance = (100 - (save.items.magnifyingGlass.count * 0.25)) * goldenCritMultiplier
    } else {
        if(goldenCritMultiplier === 1) {
            save.critChance = 2
        } else {
            save.critChance = 1
        }
    }

    for(let upgradeName in save.upgrades) {
        if(!save.upgrades[upgradeName].unlocked && !save.upgrades[upgradeName].bought && upgrades[upgradeName].requirement()) {
            createUpgrade(upgradeName)
        }
    }

    if(shownUpgrades > 0) {
        doge('noUpgrades').style.display = 'none'
    } else {
        doge('noUpgrades').style.display = 'flex'
    }

    if(save.orbs > save.totalorbs || save.cheatsUsed) {
        doge('cheatsDisplay').innerText = 'CHEATS USED'
    }
}

let shownUpgrades = 0

function createUpgrade(upgrade) {
    save.upgrades[upgrade].unlocked = true
    const newUpgrade = document.createElement('img')
    newUpgrade.classList.add('upgrade')
    newUpgrade.setAttribute('src',`media/upgrades/${upgrades[upgrade].img}`)

    let upgradeUpdateInterval

    newUpgrade.addEventListener('mouseup', () => {
        if(save.orbs >= upgrades[upgrade].price) {
            save.orbs -= upgrades[upgrade].price
            save.stats.orbsSpent += upgrades[upgrade].price
            save.upgrades[upgrade].bought = true
            upgrades[upgrade].function()
            hideTooltip()
            doge('upgradeContainer').removeChild(newUpgrade)
            getAchievement('efficientWinnieClicking')
            updateStatUpgrades()
            save.stats.upgradesBought++
            shownUpgrades--
            clearInterval(upgradeUpdateInterval)
        }
    })
    newUpgrade.addEventListener('mouseenter', () => {
        displayTooltip(upgrades[upgrade].name, upgrades[upgrade].quote, `media/upgrades/${upgrades[upgrade].img}`, upgrades[upgrade].desc, upgrades[upgrade].price)
    })
    newUpgrade.addEventListener('mouseleave', () => {
        hideTooltip()
    })

    upgradeUpdateInterval = setInterval(() => {
        if(save.orbs >= upgrades[upgrade].price) {
            newUpgrade.style.filter = 'brightness(100%)'
        } else {
            newUpgrade.style.filter = 'brightness(50%)'
        }
    })

    doge('upgradeContainer').appendChild(newUpgrade)
    shownUpgrades++
    update()
}

function displayNewItem(item, name, desc, destination) {
    const newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.setAttribute('onclick',`buyItem('${item}')`)
    newItem.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
        <img src="media/items/${item}.png" class="itemImg">
        <div class="itemInfo">
            <span>${name}</span>
            <span class="itemPrice" id="${item}Price">-</span>
        </div>
    </div>
    <div class="itemCount">
        <span id="${item}Count">-</span>
    </div>
    `
    
    let tooltipUpdate

    newItem.addEventListener('mouseenter', () => {
        tooltipUpdate = setInterval(() => {            
            displayTooltip(
                name, 
                save.items[item].quote, 
                `media/items/${save.items[item].img}`, 
                `Boosting ${desc} by ${formatNumber(save.items[item].count * save.items[item].baseWPS * save.items[item].multiplier)}.<br> <em style="color: grey">(${formatNumber(save.items[item].baseWPS * save.items[item].multiplier)} each)</em>`, 
                Math.round(compoundPrice(save.items[item].price, buyAmount))
            )
        }, 100);
    })

    newItem.addEventListener('mouseleave', () => {
        clearInterval(tooltipUpdate)
        hideTooltip()
    })

    doge(destination).appendChild(newItem)
}

function displayTooltip(title, quote, img, desc, price, label, spell, imgSize) {
    doge('tooltip').style.opacity = 1
    doge('tooltipTitle').innerText = title
    doge('tooltipQuote').innerHTML = quote
    doge('tooltipImg').src = img
    doge('tooltipDesc').innerHTML = desc
    if(imgSize) {
        doge('tooltipImg').style.width = imgSize + 'px'
    } else {
        doge('tooltipImg').style.width = '75px'
    }
    if(price) {
        if(label) {
            doge('tooltipPrice').innerText = formatNumber(price) + ' ' + label
        } else {
            doge('tooltipPrice').innerText = formatNumber(price)
        }
    } else {
        doge('tooltipPrice').innerText = ''
    }
    if(spell) {
        if(save.flasks.current >= price) {
            doge('tooltipPrice').style.color = 'lime'
        } else {
            doge('tooltipPrice').style.color = 'red'
        } 
    } else {
        if(save.orbs >= price) {
            doge('tooltipPrice').style.color = 'lime'
        } else {
            doge('tooltipPrice').style.color = 'red'
        }
    }
}

function hideTooltip() {
    doge('tooltip').style.opacity = 0
}

let paused = false

setInterval(() => {
    if(!prestigeMenuOpen && !paused) {
        getOrbs(save.wps / 10)
        update()
    }
}, 100);

function compoundPrice(price, times) {
    let a = price
    let b = 0
    for(let i = 0; i < times; i++) {
        b += a
        a *= 1.1
    }
    return b
}

function getOrbs(orbs) {
    save.orbs += orbs
    save.totalorbs += orbs
    save.prestigeOrbs += orbs
}

function createNoti(text, desc) {
    let notiActive = true
    const noti = document.createElement('div')
    noti.classList.add('ach')
    noti.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; width: 32px; height 32px; font-size: 1.75em; font-weight: 700; line-height: 0;">
        !
    </div>
    <div class="achInfo">
        <span class="achTitle">${text}</span>
        <span class="achDesc">${desc}</span>
    </div>
    `
    doge('achContainer').appendChild(noti)

    noti.addEventListener('mousedown', () => {
        doge('achContainer').removeChild(noti)
        notiActive = false
    })

    setTimeout(() => {
        if(notiActive) {
            noti.style.opacity = 0
            setTimeout(() => {
                doge('achContainer').removeChild(noti)
            }, 1000);
        }
    }, 5000);
}

// less horrible number formatter (in my opinion)
const startingNumber = 1000000;
const numberStep = 1000;
const numberNames = [
    " Million",
    " Billion",
    " Trillion",
    " Quadrillion",
    " Quintillion",
    " Sextillion",
    " Septillion",
    " Octillion",
    " Nonillion",
    " Decillion",
    " Undecillion",
    " Duodecillion",
    " Tredecillion",
    " Quattuordecillion",
    " Quindecillion",
    " Sexdecillion",
    " Septemdecillion",
    " Octodecillion",
    " Novemdecillion",
    " Vigintillion",
    " Unvigintillion",
    " Duovigintillion",
    " Trevigintillion",
    " Quattuorvigintillion",
    " Quinvigintillion",
    " Sexvigintillion",
    " Septvigintillion",
    " Octovigintillion",
    " Nonvigintillion",
    " Trigintillion",
    " Untrigintillion",
    " Duotrigintillion",
];
const googol = Math.pow(10, 100); // googol is annoying to work with >:(

const numberNameCount = numberNames.length;

function formatNumber(number) {
    if(save.settings.togglable.formatNumbers && number >= startingNumber) {
        let i; // unfortunately i has to be defined in this scope
        let currentNumber = startingNumber;
        for(i = 0; i <= numberNameCount && number >= currentNumber*numberStep; i++) {
            currentNumber *= numberStep;
        }

        if(i == numberNameCount) {
            return (Math.round(number / googol * 1000) / 1000) + " Googol";
        }

        return (Math.round(number / currentNumber * 1000) / 1000) + numberNames[i];
    }
    return (Math.round(number*10)/10).toLocaleString();
}
