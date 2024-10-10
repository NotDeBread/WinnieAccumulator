let rocks = []

let pickaxePower = 25

const pickaxeNames = [
    'copper',
    'iron',
    'gold'
]

let selectedPickaxe = 2


const pickaxes = {
    copper: {
        power: 2,
    },
    iron: {
        power: 5,
    },
    gold: {
        power: 10,
    }
}

const rewards = [
    [
        {
            run: () => {
                let randomOrbAmount = DeBread.randomNum(save.wps * 2, save.wps * 5)
                getOrbs(randomOrbAmount)
                createPopupText(cursor.x, cursor.y, `+${formatNumber(randomOrbAmount)} Winnie Orbs!`, 3)
            },
        },
        {
            run: () => {
                let randomFlaskAmount = DeBread.randomNum(1, 2)
                getFlasks(randomFlaskAmount)
                createPopupText(cursor.x, cursor.y, `+${randomFlaskAmount} Flasks!`, 3)
            },
        }
    ],
    [
        {
            run: () => {
                let randomOrbAmount = DeBread.randomNum(save.wps * 10, save.wps * 30)
                getOrbs(randomOrbAmount)
                createPopupText(cursor.x, cursor.y, `+${formatNumber(randomOrbAmount)} Winnie Orbs!`, 3)
            },
        },
        {
            run: () => {
                let i = 0
                for(let rock in rocks) {
                    if(doge(`rock${i}Health`) !== null) {
                        rocks[rock].health.current = 1
                        let rockHealthPercent = rocks[i].health.current / rocks[i].health.max * 100
                        doge(`rock${i}Health`).style.width = rocks[i].health.current / rocks[i].health.max * 100 + '%'
                        doge(`rock${i}Health`).style.backgroundColor = `hsl(${rockHealthPercent}, 100%, 50%)`
                        doge(`rock${i}`).src = `media/rocks/rock${rocks[rock].rarity}-4.png`
                        DeBread.shake(`rockBox${i}`, 10, 10, 10, 150)

                        createRockParticles(
                            doge(`rockBox${i}`).getBoundingClientRect().left + doge(`rockBox${i}`).offsetWidth / 2, 
                            doge(`rockBox${i}`).getBoundingClientRect().top + doge(`rockBox${i}`).offsetHeight / 2, 
                            1, 'cubic-bezier(0,1,.5,1)', 50, [50, 75], [-150, 150], [150, 255], true)                    
                        }
                    i++
                }
                createPopupText(cursor.x, cursor.y, `Get bombed idot`, 3)
            },
        }
    ]
]

// toggleMineMenu()
function toggleMineMenu() {
    if(doge('mineContainer').style.display === 'flex') {
        doge('mineContainer').style.display = 'none'
    } else {
        doge('mineContainer').style.display = 'flex'
        generateRocks(3)
    }
}

doge('mine').addEventListener('mousedown', () => {
    doge('mine').style.cursor = `url(media/rocks/pickaxes/pickaxe-${pickaxeNames[selectedPickaxe]}-1.png) 0 25, auto`
})

doge('mine').addEventListener('mouseup', () => {
    doge('mine').style.cursor = `url(media/rocks/pickaxes/pickaxe-${pickaxeNames[selectedPickaxe]}-0.png) 0 25, auto`
})

updatePickaxeInfo()
function updatePickaxeInfo() {
    doge('pickaxeName').innerText = `${pickaxeNames[selectedPickaxe].toUpperCase()} PICKAXE`
    doge('pickaxePower').innerText = `${pickaxes[pickaxeNames[selectedPickaxe]].power} power`
    doge('pickaxeImg').src = `media/rocks/pickaxes/pickaxeIcon-${pickaxeNames[selectedPickaxe]}.png`
    doge('mine').style.cursor = `url(media/rocks/pickaxes/pickaxe-${pickaxeNames[selectedPickaxe]}-0.png) 0 25, auto`
}

function generateRocks(count) {
    let activeRocks = 0
    doge('rockContainer').innerHTML = ''
    for(let i = 0; i < count; i++) {

        let rarityValue = DeBread.randomNum(0, 100)
        let rockRarity

        if(rarityValue >= 75) {
            rockRarity = 1
        } else {
            rockRarity = 0
        }

        const rockBox = document.createElement('div')
        rockBox.setAttribute('id',`rockBox${i}`)
        doge('rockContainer').appendChild(rockBox)
        rockBox.classList.add('rockBox')

        const rock = document.createElement('div')
    
        rock.innerHTML = `
            <img id="rock${i}" src="media/rocks/rock${rockRarity}-1.png">
            <div class="rockHealthBar" id="rock${i}Bar">
                <div class="rockHealthOverlay" id="rock${i}Health"></div>
            </div>
        `
        rock.classList.add('rock')

        if(rockRarity === 0) {
            rocks[i] = { 
                health: {
                    max: 100, current: 100
                },
                rarity: 0
            }
        }
        if(rockRarity === 1) {
            rocks[i] = { 
                health: {
                    max: 250, current: 250
                },
                rarity: 1
            }
        }

        rock.addEventListener('mousedown', () => {
            let rockHealthPercent = rocks[i].health.current / rocks[i].health.max * 100
            DeBread.playSound(`media/audio/rockHit${DeBread.randomNum(0, 2)}.mp3`, 0.2)
            
            let randomRockDamage = DeBread.randomNum(pickaxes[pickaxeNames[selectedPickaxe]].power, pickaxes[pickaxeNames[selectedPickaxe]].power * 1.25)
            rocks[i].health.current -= randomRockDamage
            doge(`rock${i}Health`).style.width = rocks[i].health.current / rocks[i].health.max * 100 + '%'
            doge(`rock${i}Health`).style.backgroundColor = `hsl(${rockHealthPercent}, 100%, 50%)`


            if(rockHealthPercent >= 75) {
                doge(`rock${i}`).src = `media/rocks/rock${rockRarity}-1.png`
            } else if(rockHealthPercent >= 50) {
                doge(`rock${i}`).src = `media/rocks/rock${rockRarity}-2.png`
            } else if(rockHealthPercent >= 25) {
                doge(`rock${i}`).src = `media/rocks/rock${rockRarity}-3.png`
            } else {
                doge(`rock${i}`).src = `media/rocks/rock${rockRarity}-4.png`
            }

            if(rocks[i].health.current <= 0) {
                doge(`rockBox${i}`).removeChild(rock)
                createRockParticles(cursor.x, cursor.y, 0.5, 'ease-out', 20, [25, 40], [-50, 50], [150, 255])
                DeBread.playSound(`media/audio/rockBreak${DeBread.randomNum(0, 2)}.mp3`, 0.5)
                activeRocks--
                let randomIndex = DeBread.randomNum(0, rewards[rockRarity].length - 1)
                rewards[rockRarity][randomIndex].run()
            } else {
                DeBread.shake(`rockBox${i}`, 10, 2, 2, 100, true, 3 / 2)
            }

            if(activeRocks === 0) {
                generateRocks(3)
            }

            createPopupText(cursor.x, cursor.y - 25, randomRockDamage, 1)
            createRockParticles(cursor.x, cursor.y, 0.5, 'ease-out', 10, [2, 10], [-25, 25], [150, 255])
        })

        setTimeout(() => {
            doge(`rockBox${i}`).appendChild(rock)
            setTimeout(() => {
                DeBread.shake(`rockBox${i}`, 10, 5, 5, 100)
                DeBread.playSound(`media/audio/rockDrop.mp3`, 0.5)
            }, 250);
        }, 100 * i);
        activeRocks++
    }
}

function createRockParticles(x, y, time, easing, count, sizeRange, distanceRange, colorRange, scale) {
    if(save.settings.togglable.particles) {
        for(let i = 0; i < count; i++) {
            let randomSize = DeBread.randomNum(sizeRange[0], sizeRange[1])
            const particle = document.createElement('div')
            particle.classList.add('rockParticle')
            particle.style.width = randomSize + 'px'
            particle.style.height = randomSize + 'px'
            particle.style.top = y - randomSize / 2 + 'px'
            particle.style.left = x - randomSize / 2 + 'px'
            particle.style.animation = `rockParticle ${time}s ${easing} 1 forwards`
    
            if(colorRange) {
                let randomColorValue = DeBread.randomNum(colorRange[0], colorRange[1])
                particle.style.backgroundColor = `rgb(${randomColorValue}, ${randomColorValue}, ${randomColorValue})`
            }

            document.body.appendChild(particle)
            
            particle.style.setProperty('--rockMoveX', `${DeBread.randomNum(distanceRange[0], distanceRange[1])}px`)
            particle.style.setProperty('--rockMoveY', `${DeBread.randomNum(distanceRange[0], distanceRange[1])}px`)
            particle.style.setProperty('--rockRotate', `${DeBread.randomNum(-25, 25)}deg`)
            if(scale) {
                particle.style.setProperty('--rockScale', '0')
            } else {
                particle.style.setProperty('--rockScale', '100%')
            }
            
            setTimeout(() => {
                document.body.removeChild(particle)
            }, time * 1000);
        }
    }
}

function createPopupText(x, y, text, animationLength) {
    const span = document.createElement('span')
    span.innerText = text
    span.style.animation = `rockText ${animationLength}s ease-out 1 forwards`

    document.body.appendChild(span)

    span.classList.add('rockPopupText')
    span.style.left = x - span.offsetWidth / 2 + 'px'
    span.style.top = y - span.offsetHeight / 2 + 'px'

    setTimeout(() => {
        document.body.removeChild(span)
    }, animationLength * 1000);
}