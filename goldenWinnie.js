setInterval(() => {
    if(DeBread.randomNum(1, save.goldenWinnieChance) === 1 && save.goldenWinniesAvailable) {
        createGoldenWinnie(DeBread.randomNum(0, 5))
        console.log('Golden Winnie Spawned!')
    } else {
        if(save.goldenWinniesAvailable) {
            console.log('A golden winnie could of spawned, but didnt feel like it. :(')
        }
    }
}, 10000);

function createGoldenWinnie(type) {
    const GW = document.createElement('img')
    GW.classList.add('goldenWinnie')
    GW.src = 'media/golden/goldenWinnie.png'
    doge('goldenWinnieContainer').appendChild(GW)
    save.stats.goldenWinniesSpawned++

    GW.style.left = DeBread.randomNum(0, doge('goldenWinnieContainer').offsetWidth - GW.offsetWidth) + 'px'
    GW.style.top = DeBread.randomNum(0, doge('goldenWinnieContainer').offsetHeight - GW.offsetHeight) + 'px'

    GW.addEventListener('click', () => {
        save.stats.goldenWinniesClicked++
        getAchievement('lucky')

        if(save.stats.goldenWinniesClicked >= 7) {
            getAchievement('lotteryWinner')
        }

        if(save.stats.goldenWinniesClicked >= 77) {
            getAchievement('bigShot')
        }

        const GWFlash = document.createElement('div')
        GWFlash.classList.add('GWFlash')
        GWFlash.style.left = cursor.x - 100 + 'px'
        GWFlash.style.top = cursor.y - 100 + 'px'
        document.body.appendChild(GWFlash)

        if(save.settings.togglable.particles) {
            DeBread.createParticles(
                doge('game'),
                25,
                0,
                1000,
                'cubic-bezier(0,1,1,1)',
                [[cursor.x, cursor.x], [cursor.y, cursor.y]],
                [[[25, 25], [25, 25]], [[0, 5], [0, 5]]],
                [[0, 0], [-720, 720]], 
                [[-250, 250], [-250, 250]],
                [[200, 200, 100], [255, 255, 100]],
                [[255, 255, 100], [255, 255, 100]]
            )
        }

        setTimeout(() => {
            document.body.removeChild(GWFlash)
        }, 1000);

        DeBread.shake('game', 10, 10, 10, 100)
        DeBread.playSound(`media/audio/rockBreak${DeBread.randomNum(0, 2)}.mp3`, 0.5)
        
        startGoldenWinnieEvent(type)
        doge('goldenWinnieContainer').removeChild(GW)
    })

    setTimeout(() => {
        if(doge('goldenWinnieContainer').contains(GW)) {
            doge('goldenWinnieContainer').removeChild(GW)
        }
    }, 15000);
}

function startGoldenWinnieEvent(type) {
    goldenWinnieActive = false
    
    if(type === 0) {
        goldenWPSMultiplier *= 3
        goldenWPCMultiplier *= 3
        doge('goldenMultiplier0').innerText = `x${formatNumber(goldenWPSMultiplier)}`
        doge('goldenMultiplier2').innerText = `x${formatNumber(goldenWPCMultiplier)}`
        DeBread.shake('goldenMultiplier0', 10, 5, 5, 100)
        DeBread.shake('goldenMultiplier2', 10, 5, 5, 100)
        doge('goldenIcon0').style.display = 'unset'
        createGoldenTimer(30)
        setTimeout(() => {
            goldenWPSMultiplier /= 3
            goldenWPCMultiplier /= 3
            doge('goldenMultiplier0').innerText = `x${formatNumber(goldenWPSMultiplier)}`
            doge('goldenMultiplier2').innerText = `x${formatNumber(goldenWPCMultiplier)}`
            DeBread.shake('goldenMultiplier0', 10, 5, 5, 100)
            DeBread.shake('goldenMultiplier2', 10, 5, 5, 100)

            if(goldenWPSMultiplier === 1) {
                doge('goldenIcon0').style.display = 'none'
            }
            if(goldenWPCMultiplier === 1) {
                doge('goldenIcon2').style.display = 'none'
            }
        }, 30000);
        createGoldenNoti(`Inspection Day`, `${orbLabel} Orb production x3 for 30 seconds!`)
    }
    if(type === 1) {
        if(goldenCritMultiplier === 1) {
            goldenCritMultiplier /= 100
            doge('goldenIcon1').style.display = 'unset'
            createGoldenTimer(20, 120)
            setTimeout(() => {
                goldenCritMultiplier *= 100
                doge('goldenIcon1').style.display = 'none'
            }, 20000);
            createGoldenNoti(`20/10 Vision`, `Only critical clicks for 20 seconds!`)
        } else {
            startGoldenWinnieEvent(DeBread.randomNum(0, 5))
        }
    }
    if(type === 2) {
        goldenWPCMultiplier *= 7
        doge('goldenIcon2').style.display = 'unset'
        doge('goldenMultiplier2').innerText = `x${formatNumber(goldenWPCMultiplier)}`
        DeBread.shake('goldenMultiplier2', 10, 5, 5, 100)
        
        createGoldenTimer(10, 300)
        setTimeout(() => {
            goldenWPCMultiplier /= 7
            doge('goldenMultiplier2').innerText = `x${formatNumber(goldenWPCMultiplier)}`
            DeBread.shake('goldenMultiplier2', 10, 5, 5, 100)
            if(goldenWPCMultiplier === 1) {
                doge('goldenIcon2').style.display = 'none'
            }
        }, 10000);
        createGoldenNoti(`Nuclear Clicks`, `WPC x7 for 10 seconds!`)
    }
    if(type === 3) {
        for(let i = 0; i < 2; i++) {
            createGoldenWinnie(DeBread.getRandomInArray([0, 1, 2, 4, 5]))
        }
        // createCenterNoti(`More Golden Winnies!`, 'rgb(253, 255, 125, 0.5)')
        createGoldenNoti(`Golden Winnie Mitosis`, `More Golden Winnies!`)
    }
    if(type === 4) {
        if(save.spellsUnlocked) {
            if(save.flasks.current === save.flasks.max) {
                startGoldenWinnieEvent(DeBread.randomNum(0, 4))
            } else if(save.flasks.current + 10 > save.flasks.max) {
                createGoldenNoti(`Wizard Delivery`, `+${save.flasks.max - save.flasks.current} flasks!`)
                updateSpellInfo()
                save.flasks.current = save.flasks.max
            } else {
                save.flasks.current += 10
                createGoldenNoti(`Wizard Delivery`, `+10 flasks!`)
                updateSpellInfo()
            }
        } else {
            startGoldenWinnieEvent(DeBread.randomNum(0, 4))
        }
    }
    if(type === 5) {
        getOrbs(save.wps * 120)
        createOrbPopup(save.wps * 120)
        createGoldenNoti(`The Winnies appear`, `+${formatNumber(save.wps * 120)} Winnie Orbs`)
    }
}

function createGoldenTimer(time, color) {
    const timer = document.createElement('div')
    timer.classList.add('goldenTimer')
    timer.style.animation = `goldenTimer ${time}s linear 1 forwards`
    timer.style.filter = `hue-rotate(${color}deg)`
    timer.style.backgroundPositionX = DeBread.randomNum(0, 200) + 'px'
    doge('goldenTimerContainer').appendChild(timer)
    setTimeout(() => {
        doge('goldenTimerContainer').removeChild(timer)
    }, time * 1000);
}

function createCenterNoti(text, color) {
    const noti = document.createElement('div')
    noti.classList.add('centerNoti')
    noti.innerText = text
    noti.style.backgroundColor = color
    doge('centerNotiContainer').appendChild(noti)
    setTimeout(() => {
        noti.style.opacity = 0
        setTimeout(() => {
            doge('centerNotiContainer').removeChild(noti)
        }, 1000);
    }, 5000);
}

function createGoldenNoti(name, desc) {
    let notiActive = true
    const achievement = document.createElement('div')
    achievement.classList.add('ach')
    achievement.style.boxShadow = '0px 0px 5px 5px rgb(245, 255, 102)'
    achievement.innerHTML = `
    <img src="media/icons/clover.png" height="32" style="filter: invert();">
    <div class="achInfo">
        <span class="achTitle">${name}</span>
        <span class="achDesc">${desc}</span>
    </div>
    `
    doge('achContainer').appendChild(achievement)

    achievement.addEventListener('mousedown', () => {
        doge('achContainer').removeChild(achievement)
        notiActive = false
    })

    setTimeout(() => {
        if(notiActive) {
            achievement.style.opacity = 0
            setTimeout(() => {
                doge('achContainer').removeChild(achievement)
            }, 1000);
        }
    }, 5000);
}