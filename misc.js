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

    <span style="font-size: 1.25em; margin-top: 20px;">Redjive's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Sasha</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Gavin's Dogs:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Shadow</span>
    <em style="font-size: 0.75em; color: grey;">Rest in peace, you will be missed.</em>
    <span style="font-size: 1.5em; font-weight: 700;">Luna</span>
    <span style="font-size: 1.5em; font-weight: 700;">Chewie</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Cayden's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Bruno</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Tom's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Thorn</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Beckett's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Asher</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Hugo's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Basil</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Logan's "Dog":</span>
    <span style="font-size: 1.5em; font-weight: 700;">Connie</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Erix's Dog:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Walter</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Jaden's Dogs:</span>
    <span style="font-size: 1.5em; font-weight: 700;">CJ</span>
    <span style="font-size: 1.5em; font-weight: 700;">Fin</span>

    <span style="font-size: 1.25em; margin-top: 20px;">john Dogs:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Lola</span>
    <span style="font-size: 1.5em; font-weight: 700;">Phoebe</span>
    <span style="font-size: 1.5em; font-weight: 700;">Xander</span>

    <span style="margin-top: 100px;">-Idea Help-</span>
    <span style="font-size: 1.25em; margin-top: 20px;">Mine (coming soon)</span>
    <span style="font-size: 1.5em; font-weight: 700;">Cayden</span>

    <span style="font-size: 1.25em; margin-top: 20px;">Personal Winnie & Running Winnie (coming soon but not as much soon)</span>
    <span style="font-size: 1.5em; font-weight: 700;">Hugo</span>

    <span style="margin-top: 100px;">-Extra Help-</span>
    <span style="font-size: 1.25em; margin-top: 20px;">Save fixer:</span>
    <span style="font-size: 1.5em; font-weight: 700;">RedJive2</span>
    <span style="font-size: 1.25em; margin-top: 20px;">Improved number formatting:</span>
    <span style="font-size: 1.5em; font-weight: 700;">Zean Zarzin</span>

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

function simplePlural(check) {
    if(check > 1) {return 's'} else {return ''}
}

window.onerror = (e) => {
    createNoti('An error has occured', 'Please open the console and report it to DeBread. Click on this to copy to clipboard', () => {
        navigator.clipboard.writeText(e)
        createCenterNoti(`Copied "${e}" to clipboard!`, 'rgb(0, 0, 0, 0.5)')
    })
}