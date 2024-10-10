const buttons = {
    settings: {
        side: 'Left',
        name: 'Settings',
        locked: () => {return false}
    },
    achievements: {
        side: 'Left',
        name: 'Achievements',
        locked: () => {return false}
    },
    statistics: {
        side: 'Left',
        name: 'Statistics',
        locked: () => {return false}
    },
    help: {
        side: 'Left',
        name: 'Help',
        locked: () => {return false}
    },
    devtools: {
        side: 'Left',
        name: 'Developer Tools',
        locked: () => {return !save.cheatsUsed}
    },

    mine: {
        side: 'Right',
        name: 'Mine',
        desc: 'Go deep into the mines for exotic Winnies.',
        locked: () => {return true}
        // locked: save.cheatsUsed
    },
    gamble: {
        side: 'Right',
        name: 'Gamble',
        desc: 'Gamble all of your Winnie Orbs away!',
        locked: () => {return !save.gamblingUnlocked}
    },
}

function updateToolbarButtons() {
    doge('toolbarLeft').innerHTML = ''
    doge('toolbarRight').innerHTML = ''

    for(const button in buttons) {
        if(!buttons[button].locked()) {
            const div = document.createElement('div')
            div.classList.add('toolbarButton')
            div.innerHTML = `<img src="media/icons/${button}.png">`
            doge(`toolbar${buttons[button].side}`).appendChild(div)
            div.addEventListener('mouseenter', () => {
                doge('toolbarTooltip').style.opacity = 1
                doge('toolbarTooltip').style.textAlign = buttons[button].side.toLowerCase()
                doge('toolbarTooltipTitle').innerText = buttons[button].name
                if(buttons[button].desc) {
                    doge('toolbarTooltipDesc').innerText = buttons[button].desc
                } else {
                    doge('toolbarTooltipDesc').innerText = ''
                }
        
                if(buttons[button].side === 'Left') {
                    doge('toolbarTooltip').style.left = div.getBoundingClientRect().left + 'px'
                } else if(buttons[button].side === 'Right') {
                    doge('toolbarTooltip').style.right = window.innerWidth - div.getBoundingClientRect().right + 'px'
                }
                
                doge('toolbar').style.boxShadow = '0px 0px 50px black'
            })

            div.addEventListener('mouseleave', () => {
                doge('toolbarTooltip').style.opacity = 0
                doge('toolbar').style.boxShadow = 'unset'
            })

            div.onclick = () => {
                if(doge(`${button}Menu`).style.bottom === '50px') {
                    doge(`${button}Menu`).style.display = 'none'
                    doge(`${button}Menu`).style.bottom = -doge(`${button}Menu`).offsetHeight + 'px'

                    setTimeout(() => {
                        if(doge(`${button}Menu`).style.bottom === -doge(`${button}Menu`).offsetHeight + 'px') {
                            doge(`${button}Menu`).style.opacity = 0
                            doge(`${button}Menu`).style.pointerEvents = 'none'
                            doge(`${button}Menu`).style.display = 'none'
                        }
                    }, 250);
                } else {
                    for(const menu in buttons) {
                        if(doge(`${menu}Menu`).style.bottom !== -doge(`${menu}Menu`).offsetHeight + 'px') {
                            doge(`${menu}Menu`).style.bottom = -doge(`${menu}Menu`).offsetHeight + 'px'
                            doge(`${button}Menu`).style.display = 'none'
                        }
                    }
                    doge(`${button}Menu`).style.opacity = 1
                    doge(`${button}Menu`).style.pointerEvents = 'unset'
                    doge(`${button}Menu`).style.bottom = '50px'
                    doge(`${button}Menu`).style.display = 'unset'
                    DeBread.playSound('media/audio/menuOpen.mp3', 0.2)
                }
            }
        }
    }
}

setInterval(() => {
    if(doge(`statisticsMenu`).style.bottom === '50px') {
        updateStats() //gonna kill myself
        updateStatUpgrades()
    }
}, 100);

setTimeout(() => {
    for(const menu in buttons) {
        doge(`${menu}Menu`).style.bottom = -doge(`${menu}Menu`).offsetHeight + 'px'
        doge(`${menu}CloseButton`).onclick = () => doge(`${menu}Menu`).style.bottom = -doge(`${menu}Menu`).offsetHeight + 'px'
    }
}, 1000);

updateToolbarButtons()