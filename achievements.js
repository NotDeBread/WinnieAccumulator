let achievementMode = 0

function createAchievement(name, desc, secret, rare) {
    let achActive = true
    const achievement = document.createElement('div')
    achievement.classList.add('ach')
    achievement.innerHTML = `
    <img src="media/icons/achievement.png" height="32" style="filter: invert();">
    <div class="achInfo">
        <span class="achTitle">${name}</span>
        <span class="achDesc">${desc}</span>
    </div>
    `
    doge('achContainer').appendChild(achievement)
    DeBread.playSound('media/audio/menuOpen.mp3', 0.2)

    achievement.addEventListener('mousedown', () => {
        doge('achContainer').removeChild(achievement)
        achActive = false
    })

    if(secret) {
        achievement.style.boxShadow = '0px 0px 5px 5px rgb(119, 112, 255)'
    }

    if(rare) {
        achievement.style.boxShadow = '0px 0px 5px 5px rgb(92, 157, 255)'
    }

    setTimeout(() => {
        if(achActive) {
            achievement.style.opacity = 0
            setTimeout(() => {
                doge('achContainer').removeChild(achievement)
            }, 1000);
        }
    }, 5000);
}

function getAchievement(id) {
    if(!save.achievements[id].unlocked) {
        createAchievement(achievementsStatic[id].name, achievementsStatic[id].desc, achievementsStatic[id].secret, achievementsStatic[id].rare)
        save.achievements[id].unlocked = true
    }
    updateAchievements()
}

//Too lazy to make this better

let eddieTimeout
function eddieTimer(type) {
    if(type === 'start') {
        eddieTimeout = setTimeout(() => {
            getAchievement('realOG')
        }, 300000);
    }
    if(type === 'end') {
        clearTimeout(eddieTimeout)
    }
}

let shadowTimeout
function shadowTimer(type) {
    if(type === 'start') {
        shadowTimeout = setTimeout(() => {
            getAchievement('goneButNotForgotten')
        }, 300000);
    }
    if(type === 'end') {
        clearTimeout(shadowTimeout)
    }
}

updateAchievements()
function updateAchievements() {
    doge('achievementsList').innerHTML = ''

    if(achievementMode === 4) {
        const infoText = document.createElement('em')
        infoText.style.color = 'grey'
        infoText.style.maxWidth = '395px'
        infoText.innerText = '[!] Secret Achievements are unfair or extremely difficult to find.'
        doge('achievementsList').appendChild(infoText)
    }

    let achievementsCollected = 0

    for(let achievement in save.achievements) {
        const achievementDiv = document.createElement('div')
        achievementDiv.classList.add('achievement')
        if(!save.achievements[achievement].unlocked) {
            achievementDiv.style.filter = 'brightness(50%)'
        } else {
            achievementsCollected++
        }
    
        if(achievementsStatic[achievement].secret) {
            achievementDiv.style.boxShadow = 'inset 2px 2px rgb(60, 60, 60), inset -2px -2px rgb(40, 40, 40), 0px 0px 5px rgb(119, 112, 255)'
        }
    
        if(achievementsStatic[achievement].rare) {
            achievementDiv.style.boxShadow = 'inset 2px 2px rgb(60, 60, 60), inset -2px -2px rgb(40, 40, 40), 0px 0px 5px rgb(92, 157, 255)'
        }
    
        if(achievementsStatic[achievement].secret && !save.achievements[achievement].unlocked) {
            achievementDiv.innerHTML = `
            <span class="achievementTitle">???</span>
            <em class="achievementDesc">Secret Achievement</em>
            `
        } else if(!save.achievements[achievement].unlocked) {
            achievementDiv.innerHTML = `
            <span class="achievementTitle">${achievementsStatic[achievement].name}</span>
            <em class="achievementDesc">???</em>
            `
        } else {
            achievementDiv.innerHTML = `
            <span class="achievementTitle">${achievementsStatic[achievement].name}</span>
            <em class="achievementDesc">${achievementsStatic[achievement].desc}</em>
            `
        }
        if(achievementMode === 0 && !achievementsStatic[achievement].secret) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 1 && save.achievements[achievement].unlocked) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 2 && !achievementsStatic[achievement].secret && !achievementsStatic[achievement].rare) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 3 && achievementsStatic[achievement].rare) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 4 && achievementsStatic[achievement].secret) {
            doge('achievementsList').appendChild(achievementDiv)
        }
    }

    let unlockedAchievements = 0
    let unlockedSecretAchievements = 0
    for(let achievement in save.achievements) {
        if(!achievementsStatic[achievement].secret && save.achievements[achievement].unlocked) {
            unlockedAchievements++
        } else if(achievementsStatic[achievement].secret && save.achievements[achievement].unlocked) {
            unlockedSecretAchievements++
        }
    }

    if(unlockedSecretAchievements > 0) {
        doge('achievementsTitle').innerHTML = `Achievements - ${unlockedAchievements} / ${Object.keys(save.achievements).length - 4} <span style="font-size: 0.75em; color: rgb(133, 105, 255);">+${unlockedSecretAchievements}</span>`
    } else {
        doge('achievementsTitle').innerHTML = `Achievements - ${unlockedAchievements} / ${Object.keys(save.achievements).length - 4}`
    }
}

let superSecretCode = 'wowie this is a secret code'
let superSecretCodeInput = ''

document.addEventListener('keydown', (e) => {
    superSecretCodeInput += e.key
    if(superSecretCode[superSecretCodeInput.length - 1] !== superSecretCodeInput[superSecretCodeInput.length - 1]) {
        superSecretCodeInput = ''
    }
    if(superSecretCodeInput.length >= 5) {
        createCenterNoti(superSecretCodeInput[superSecretCodeInput.length - 2] + e.key)
        DeBread.createParticles(
            document.body,
            5,
            0,
            2500,
            'cubic-bezier(0,1,.5,.9)',
            [[(window.innerWidth / 2) - 50, (window.innerWidth / 2) + 50], [10, 10]],
            [[[15, 30], [10, 10]], [[15, 30], [10, 10]]],
            [[-90, 90], [180, 270]],
            [[-300, 300], [-100, 100]],
            [[0, 0, 0], [255, 255, 255]],
            [[0, 0, 0], [255, 255, 255]]
        )
    }
    if(superSecretCode === superSecretCodeInput) {
        getAchievement('aRealOne')
        createCenterNoti('Achievement Get!', 'black')
        DeBread.createParticles(
            document.body,
            75,
            0,
            2500,
            'cubic-bezier(0,1,.5,.9)',
            [[(window.innerWidth / 2) - 50, (window.innerWidth / 2) + 50], [10, 10]],
            [[[15, 30], [10, 10]], [[15, 30], [10, 10]]],
            [[-90, 90], [180, 270]],
            [[-300, 300], [-100, 100]],
            [[0, 0, 0], [255, 255, 255]],
            [[0, 0, 0], [255, 255, 255]]
        )
    }
})