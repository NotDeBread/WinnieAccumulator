let menus = {
    settings: {
        defaultValue: '-260px',
    },
    achievements: {
        defaultValue: '-450px'
    },
    achievements: {
        defaultValue: '-450px'
    },
    stats: {
        defaultValue: '-360px',
        onOpen: () => {
            statsUpdateInterval = setInterval(() => {
                updateStats()
            }, 100);
            updateStatUpgrades()
        },
        onClose: () => {
            clearInterval(statsUpdateInterval) 
        }
    },
    help: {
        defaultValue: '-450px'
    },
    devTools: {
        defaultValue: '-260px'
    },
}

function toggleMenu(menu) {
    if(menus[menu].open) {
        doge(menu).style.left = menus[menu].defaultValue
        DeBread.playSound('media/audio/menuClose.mp3', 0.2)
        if(menus[menu].onClose) {
            menus[menu].onClose()
        }
    } else {
        doge(menu).style.left = '0px'
        DeBread.playSound('media/audio/menuOpen.mp3', 0.2)
        if(menus[menu].onOpen) {
            menus[menu].onOpen()
        }
    }
    menus[menu].open = !menus[menu].open
}

let creditsActive = false

document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape' && creditsActive) {
        stopCredits()
    }
})

function startCredits() {
    creditsActive = true
    doge('creditsContainer').innerHTML = ''

    doge('creditsContainer').style.display = 'flex'

    const credits = document.createElement('div')
    credits.setAttribute('id','credits')
    credits.innerHTML = `
    <span style="font-size: 2em; font-weight: 700;">Winnie Accumulator</span>

    <span style="margin-top: 50px;">-Creator-</span>
    <span style="font-size: 1.5em; font-weight: 700;">DeBread</span>

    <span style="margin-top: 100px;">-Characters-</span>
    <span style="font-size: 1.25em; margin-top: 20px;">DeBread's Dogs:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Winnie</span>
    <span style="font-size: 1.5em; font-weight: 700;">Kisa</span>
    <span style="font-size: 1.5em; font-weight: 700;">Junior</span>
    <span style="font-size: 1.5em; font-weight: 700;">Eddie</span>
    <span style="font-size: 1.5em; font-weight: 700;">Rodger</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Redjive Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Sasha</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Beckett's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Asher</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Erix's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Walter</span>
    
    <span style="font-size: 1.25em; margin-top: 20px;">Cayden's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Bruno</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Gavin's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Shadow</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Hugo's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Basil</span>

    <span style="margin-top: 100px;">-Special Thanks-</span>
    <span style="font-size: 1.5em; font-weight: 700;">RedJive2</span>
    <span style="font-size: 1.5em; font-weight: 700;">Zeko</span>
    `
    doge('creditsContainer').appendChild(credits)

    setTimeout(() => {
        if(creditsActive) {
            doge('creditsContainer').style.display = 'none'
            creditsActive = false
        }
    }, 20000);
}

function stopCredits() {
    creditsActive = false
    doge('creditsContainer').innerHTML = ''
    doge('creditsContainer').style.display = 'none'
}

const loadingBar = doge('loadingScreenBarOverlay')
const loadingBarWaves = doge('loadingScreenBarWaves')
let loadingBarWidth = 0
let loadingBarWavesWidth = 50

const loadingScreen = doge('loadingScreen')

for(let i = 0; i < 10; i++) {
    setTimeout(() => {
        loadingBarWidth += DeBread.randomNum(50, 100)
        loadingBar.style.width = loadingBarWidth + 'px'
        if(loadingBarWidth >= 450) {
            if(loadingBarWavesWidth > 0) {
                loadingBarWavesWidth = 500 - loadingBarWidth
                loadingBarWaves.style.width = loadingBarWavesWidth + 'px'
            } else {
                loadingBarWaves.style.width = 0
            }
        }
        if(loadingBarWidth >= 500) {
            doge('loadingScreenText').innerText = 'Done!'
            setTimeout(() => {                
                loadingScreen.style.opacity = 0
                setTimeout(() => {
                    loadingScreen.style.display = 'none'
                }, 500);
            }, 500);
        }
    }, DeBread.randomNum(100, 200) * (i + 1));
}