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
        createAchievement(save.achievements[id].name, save.achievements[id].desc, save.achievements[id].secret, save.achievements[id].rare)
        save.achievements[id].unlocked = true
    }
    updateAchievements()
}

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

function updateAchievements() {
    doge('achievementsList').innerHTML = ''

    if(achievementMode === 4) {
        const infoText = document.createElement('em')
        infoText.style.color = 'grey'
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
    
        if(save.achievements[achievement].secret) {
            achievementDiv.style.boxShadow = 'inset 2px 2px rgb(60, 60, 60), inset -2px -2px rgb(40, 40, 40), 0px 0px 5px rgb(119, 112, 255)'
        }
    
        if(save.achievements[achievement].rare) {
            achievementDiv.style.boxShadow = 'inset 2px 2px rgb(60, 60, 60), inset -2px -2px rgb(40, 40, 40), 0px 0px 5px rgb(92, 157, 255)'
        }
    
        if(save.achievements[achievement].secret && !save.achievements[achievement].unlocked) {
            achievementDiv.innerHTML = `
            <span class="achievementTitle">???</span>
            <em class="achievementDesc">Secret Achievement</em>
            `
        } else if(!save.achievements[achievement].unlocked) {
            achievementDiv.innerHTML = `
            <span class="achievementTitle">${save.achievements[achievement].name}</span>
            <em class="achievementDesc">???</em>
            `
        } else {
            achievementDiv.innerHTML = `
            <span class="achievementTitle">${save.achievements[achievement].name}</span>
            <em class="achievementDesc">${save.achievements[achievement].desc}</em>
            `
        }
        if(achievementMode === 0 && !save.achievements[achievement].secret) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 1 && save.achievements[achievement].unlocked) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 2 && !save.achievements[achievement].secret && !save.achievements[achievement].rare) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 3 && save.achievements[achievement].rare) {
            doge('achievementsList').appendChild(achievementDiv)
        } else if(achievementMode === 4 && save.achievements[achievement].secret) {
            doge('achievementsList').appendChild(achievementDiv)
        }
    }

    let unlockedAchievements = 0
    let unlockedSecretAchievements = 0
    for(let achievement in save.achievements) {
        if(!save.achievements[achievement].secret && save.achievements[achievement].unlocked) {
            unlockedAchievements++
        } else if(save.achievements[achievement].secret && save.achievements[achievement].unlocked) {
            unlockedSecretAchievements++
        }
    }

    if(unlockedSecretAchievements > 0) {
        doge('achievementsTitle').innerHTML = `Achievements - ${unlockedAchievements} / ${Object.keys(save.achievements).length - 3} <span style="font-size: 0.75em; color: rgb(133, 105, 255);">+${unlockedSecretAchievements}</span>`
    } else {
        doge('achievementsTitle').innerHTML = `Achievements - ${unlockedAchievements} / ${Object.keys(save.achievements).length - 3}`
    }

}