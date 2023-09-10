let timeSkipHover = false

setInterval(() => {
    if(save.spellsUnlocked && save.flasks.current < save.flasks.max) {
        save.flasks.current += save.flaskIncrease
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

for(let spell in save.spells) {
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
            displayTooltip(save.spells[spell].name, '', `media/spells/${spell}.png`, save.spells[spell].desc, save.spells[spell].price, 'flasks', true)
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
    if(save.flasks.current >= save.spells[spell].price) {
        save.flasks.current -= save.spells[spell].price
        save.flasks.max += save.spells[spell].increase
        if(spell === 'spellOfShininess') {
            createGoldenWinnie(DeBread.randomNum(0, 2))
        }
        if(spell === 'timeSkip') {
            getOrbs(save.wps * 600)
        }
    }
    updateSpellInfo()
}

updateSpellInfo()
function updateSpellInfo() {
    doge('flaskInfo').innerText = `${save.flasks.current} / ${save.flasks.max}`
    doge('flasksBarOverlay').style.width = save.flasks.current / save.flasks.max * 100 + '%'

    for(let spell in save.spells) {
        if(save.spells[spell].price > save.flasks.current) {
            doge(spell).style.filter = 'grayscale()'
        } else {
            doge(spell).style.filter = 'none'
        }
    }
}