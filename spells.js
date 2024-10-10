const spells = {
    goldenEye: {
        price: 10,
        increase: 1,
        name: 'Golden Eye',
        desc: 'Claims all Golden Winnies on screen.'
    },
    spellOfShininess: {
        price: 20,
        increase: 2,
        name: 'Spell of Shininess',
        desc: 'Spawn a Golden Winnie.'
    },
    timeSkip: {
        price: 30,
        increase: 3,
        name: 'Time Skip',
        desc: 'Get 10 minutes worth of you WPS instantly.'
    },
    spellOfHaste: {
        price: 40,
        increase: 4,
        name: 'Spell of Haste',
        desc: 'Get a permanent +5% boost to your WPS.'
    }
}

let timeSkipHover = false

setInterval(() => {
    if(save.spellsUnlocked) {
        getFlasks(save.flaskIncrease)
    }
    updateSpellInfo()
}, 30000);

spellsCheck()
function spellsCheck() {
    if(save.spellsUnlocked) {
        doge('spellsContainer').style.display = 'unset'
    } else {
        doge('spellsContainer').style.display = 'none'
    }
}

function getFlasks(amount) {
    if(save.flasks.current + amount >= save.flasks.max) {
        save.flasks.current = save.flasks.max
    } else {
        save.flasks.current += amount
    }
    updateSpellInfo()
}

for(let spell in spells) {
    const createSpell = document.createElement('img')
    createSpell.src = `media/spells/${spell}.png`
    createSpell.classList.add('spell')
    createSpell.setAttribute('id', spell)
    createSpell.addEventListener('mouseup', () => {
        buySpell(spell)
    })
    let tooltipUpdate
    createSpell.addEventListener('mouseenter', () => {
        tooltipUpdate = setInterval(() => {
            displayTooltip(spells[spell].name, '', `media/spells/${spell}.png`, spells[spell].desc, spells[spell].price, 'flasks', true)
        }, 100);
        if(spell === 'timeSkip') {
            timeSkipHover = true
        }
    })
    createSpell.addEventListener('mouseleave', () => {
        hideTooltip()
        clearInterval(tooltipUpdate)
        if(spell === 'timeSkip') {
            timeSkipHover = false
        }
    })
    doge('spells').appendChild(createSpell)
}

function buySpell(spell) {
    if(save.flasks.current >= spells[spell].price) {
        save.flasks.current -= spells[spell].price
        save.flasks.max += spells[spell].increase
        if(spell === 'spellOfShininess') {
            createGoldenWinnie(DeBread.getRandomInArray([0, 1, 2, 3, 5]))
        }
        if(spell === 'timeSkip') {
            getOrbs(save.wps * 600)
        }
        if(spell === 'goldenEye') {
            if(doge('goldenWinnieContainer').children.length > 0) {
                let i = 0
                if(doge('goldenWinnieContainer').children.length === 1) {
                    getAchievement('lazyWizard')
                }
                doge('goldenWinnieContainer').querySelectorAll('.goldenWinnie').forEach((gw) => {
                    setTimeout(() => {                        
                        gw.remove()
                        startGoldenWinnieEvent(DeBread.getRandomInArray([0, 1, 2, 3]))
                        DeBread.playSound(`media/audio/rockBreak${DeBread.randomNum(0, 2)}.mp3`, 0.5)
    
                        save.stats.goldenWinniesClicked++
                        getAchievement('lucky')
    
                        if(save.stats.goldenWinniesClicked >= 7) {
                            getAchievement('lotteryWinner')
                        }
    
                        if(save.stats.goldenWinniesClicked >= 77) {
                            getAchievement('bigShot')
                        }
                    }, 100 * i);
                })
            } else {
                getFlasks(10)
                save.flasks.max--
                createNoti('Flasks returned', 'No Golden Winnies are on screen!')
            }
        }
    }
    if(spell === 'spellOfHaste') {
        save.permBoost += 0.05
    }
    updateSpellInfo()
}

updateSpellInfo()
function updateSpellInfo() {
    doge('flaskInfo').innerText = `${save.flasks.current} / ${save.flasks.max}`
    doge('flasksBarOverlay').style.width = save.flasks.current / save.flasks.max * 100 + '%'

    for(let spell in spells) {
        if(spells[spell].price > save.flasks.current) {
            doge(spell).style.filter = 'grayscale()'
        } else {
            doge(spell).style.filter = 'none'
        }
    }
}

function buyFlasks() {
    for(let i = 0; i < buyAmount; i++) {
        if(save.orbs >= (save.wps * 60) && save.flasks.current + 1 <= save.flasks.max && save.wps > save.wpc * 10) {
            console.log(formatNumber(save.wps * 10), formatNumber(save.wpc))
            save.flasks.current++
            save.orbs -= (save.wps * 60) 
            save.stats.orbsSpent += (save.wps * 60)
        } else if(save.wps < save.wpc * 10) {
            createNoti('Unable to buy flasks!', `Your ${orbLabel[0]}PS must be at least 10 times more than your ${orbLabel[0]}PC to buy flasks!`)
            break
        }
    }

    updateSpellInfo()
}

let flasksGetTooltipUpdate
doge('flasksGet').addEventListener('mouseenter', () => {
    flasksGetTooltipUpdate = setInterval(() => {        
        displayTooltip(
            `Buy Flasks (x${buyAmount})`, 
            `"Traverse to that one cool wizard for some flasks at the cost of ${orbLabel} Orbs."`, 
            '', 
            `Get ${buyAmount} flask${simplePlural(buyAmount)} for ${buyAmount} minute${simplePlural(buyAmount)} worth of your ${orbLabel[0]}PS`,
            compoundPrice((save.wps * 60), buyAmount)
        )
    }, 100);
})

doge('flasksGet').addEventListener('mouseleave', () => {
    clearInterval(flasksGetTooltipUpdate)
    hideTooltip()
})