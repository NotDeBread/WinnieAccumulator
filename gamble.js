let gambleUpdateInterval

function openGamble() {
    if(doge('gambleContainer').style.display === 'none') {
        doge('gambleContainer').style.display = 'flex'

        gambleUpdateInterval = setInterval(() => {
            if(!gambleActive) {
                doge('betValue').innerText = `Betting: ${formatNumber(DeBread.round(save.orbs * (doge('gambleInput').value / 100)))}`
            }
        }, 100);
    } else {
        doge('gambleContainer').style.display = 'none'
        
        clearInterval(gambleUpdateInterval)
    }
}


const outputs = [
    0,    0,
    0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,  0.5,
    0.75, 0.75, 0.75, 0.75,
    1.25, 1.25,
    1.5,  1.5,  1.5,  1.5,  1.5,  1.5,
    2,    2,    2,    2,
    3,    3,
    5,
    10,
]

let gambleActive = false

function testGamble() {
    if(!gambleActive) {
        if(save.orbs > 0) {
            if(doge('gambleInput').value <= 100) {
                if(doge('gambleInput').value > 0) {
                    if(hasNumber(doge('gambleInput').value)) {
                        doge('betError').innerText = ''
                        startGamble()
                    } else {
                        doge('betError').innerText = 'Bet value has to be a number!'
                    }
                } else {
                    doge('betError').innerText = 'Bet value has to be more than 0!'
                }
            } else {
                doge('betError').innerText = 'Bet value cannot be more than 100%!'
            }
        } else {
            doge('betError').innerText = `Requires at least 1 ${orbLabel} orb.`
        }
    }
}

function startGamble() {
    save.timesGambled++
    if(save.timesGambled >= 100) {
        getAchievement('gamblingAddiction')
    }
    createGambleWheel()
    let amountBet = save.orbs * (doge('gambleInput').value / 100)
    doge('gambleStartButton').style.color = 'grey'
    createOrbPopup(-(save.orbs * (doge('gambleInput').value / 100)))
    save.orbs -= (save.orbs * (doge('gambleInput').value / 100))

    doge('innerGambleWheel').style.transform = 'translateY(0px)'
    setTimeout(() => {
        doge('innerGambleWheel').style.transition = 'transform cubic-bezier(0,1,.5,1) 5s'
        doge('innerGambleWheel').style.transform = 'translateY(-1250px)'
    }, 25);

    gambleActive = true
    let randomValue = DeBread.randomNum(0, outputs.length - 1)

    const winningWheelElement = document.createElement('div')
    winningWheelElement.innerText = outputs[randomValue] + 'x'
    if(outputs[randomValue] === 10) {
        winningWheelElement.style.color = 'lime'
    }
    if(outputs[randomValue] === 0) {
        winningWheelElement.style.color = 'red'
    }
    doge('innerGambleWheel').appendChild(winningWheelElement)

    setTimeout(() => {
        winningWheelElement.style.fontWeight = 900
    }, 5000);

    for(let i = 0; i < 6; i++) {
        const wheelElement = document.createElement('div')
        let randomFakeValue = DeBread.randomNum(0, outputs.length - 1)
        wheelElement.innerText = outputs[randomFakeValue] + 'x'
        if(outputs[randomFakeValue] === 10) {
            wheelElement.style.color = 'lime'
        }
        if(outputs[randomFakeValue] === 0) {
            wheelElement.style.color = 'red'
        }
        doge('innerGambleWheel').appendChild(wheelElement)
    }

    setTimeout(() => {
        save.orbs += amountBet * outputs[randomValue]

        if(amountBet * outputs[randomValue] < amountBet) {
            doge('betWin').style.color = 'red'
            doge('betWin').innerText = `-${formatNumber(-(amountBet * outputs[randomValue] - amountBet))}`
            createOrbPopup(-(amountBet * outputs[randomValue] - amountBet))
        } else {
            doge('betWin').style.color = 'lime'
            doge('betWin').innerText = `+${formatNumber(amountBet * outputs[randomValue] - amountBet)}`
            save.totalorbs += (amountBet * outputs[randomValue]) - amountBet
            save.prestigeOrbs += (amountBet * outputs[randomValue]) - amountBet
            createOrbPopup(amountBet * outputs[randomValue] - amountBet)
        }
        
        if(outputs[randomValue] === 10) {
            getAchievement('trueGambler')
        }

        DeBread.shake('gambleMenu', 10, 5, 5, 100)
        doge('gambleStartButton').style.color = 'white'
    
        gambleActive = false
        doge('innerGambleWheel').style.transition = 'none'
    }, 5000);
}

createGambleWheel()
function createGambleWheel() {
    doge('innerGambleWheel').innerHTML = ''
    for(let i = 0; i < 50; i++) {
        const wheelElement = document.createElement('div')
        let randomFakeValue = DeBread.randomNum(0, outputs.length - 1)
        wheelElement.innerText = outputs[randomFakeValue] + 'x'
        doge('innerGambleWheel').appendChild(wheelElement)
        if(outputs[randomFakeValue] === 10) {
            wheelElement.style.color = 'lime'
        }
        if(outputs[randomFakeValue] === 0) {
            wheelElement.style.color = 'red'
        }
    }
}

function hasNumber(input) {
    const regex = /\d+/
    return regex.test(input)
}