for(setting in save.settings.togglable) {
    updateSetting(setting)
}

function updateVolume() {
    if(doge('volumeInput').value / 100 !== save.settings.volume) {
        save.settings.volume = doge('volumeInput').value / 100
        DeBread.playSound(`media/audio/type${DeBread.randomNum(1, 3)}.mp3`, 0.2)
    }
    doge('sfxVolumeDisplay').innerText = `SFX Volume: ${DeBread.round(save.settings.volume * 100)}%`
}
updateVolume()

doge('volumeInput').addEventListener('mousemove', updateVolume)
doge('volumeInput').addEventListener('mouseup', updateVolume)

function changeMode(type) {
    if(type === 'next') {
        if(save.settings.mode + 1 > modes.length - 1) {
            save.settings.mode = 0
        } else {
            save.settings.mode++
        }
    }
    if(type === 'prev') {
        if(save.settings.mode - 1 < 0) {
            save.settings.mode = modes.length - 1
        } else {
            save.settings.mode--
        }
    }

    //Too lazy to make this better
    if(modes[save.settings.mode] === 'Eddie') {
        eddieTimer('start')
    } else {
        eddieTimer('end')
    }
    if(modes[save.settings.mode] === 'Shadow') {
        shadowTimer('start')
    } else {
        shadowTimer('end')
    }
    updateSphere()
    updateModeDots()
}

let coolNumber = 1
for(const mode in modes) {
    const dot = document.createElement('div')
    dot.setAttribute('id', `modeDot${mode}`)
    dot.setAttribute('title', modes[mode])
    dot.onclick = () => {save.settings.mode = +mode; updateModeDots(); updateSphere()}
    doge('modeDots').appendChild(dot)

    dot.onmouseenter = () => {
        displaySimpleTooltip([dot.getBoundingClientRect().left + (dot.offsetWidth), dot.getBoundingClientRect().top - 40], modes[mode])
    }

    dot.onmouseleave = () => {
        hideSimpleTooltip()
    }
}

function updateSetting(setting) {
    save.settings.togglable[setting] = doge(`${setting}Input`).checked
    doge(`${setting}Input`).checked = save.settings.togglable[setting]

    if(setting === 'orbEffects') {updateSphere()}
}

function updateModeDots() {
    for(const mode in modes) {
        if(save.settings.mode === +mode) {
            doge(`modeDot${mode}`).style.backgroundColor = 'white'
        } else {
            doge(`modeDot${mode}`).style.backgroundColor = 'grey'
        }
    }
}
updateModeDots()

updateSphere()
function updateSphere() {
    doge('modeSelected').innerText = modes[save.settings.mode]
    doge('sphere').src = `media/spheres/${modes[save.settings.mode].toLowerCase()}.gif`

    if(modes[save.settings.mode] === 'Sasha' && save.settings.togglable.orbEffects) {
        doge('sphere').classList.add('sasho')
    } else {
        doge('sphere').classList.remove('sasho')
    }

    if(modes[save.settings.mode] === 'Connie' && save.settings.togglable.orbEffects) {
        doge('sphere').style.filter = 'drop-shadow(0px 0px 100px red) contrast(1000%) brightness(100000%)'
    } else {
        doge('sphere').style.filter = 'none'
    }

    if(modes[save.settings.mode] === 'Eddie' && save.settings.togglable.orbEffects) {
        document.documentElement.style.setProperty('--LightBG1', 'rgb(55, 45, 70)')//
        document.documentElement.style.setProperty('--LightBG0', 'rgb(45, 37, 60)')//
        document.documentElement.style.setProperty('--BG', 'rgb(32, 28, 45)') //
        document.documentElement.style.setProperty('--DarkBG0', 'rgb(24, 22, 36)') //
        document.documentElement.style.setProperty('--DarkBG1', 'rgb(18, 17, 27)') //
        document.documentElement.style.setProperty('--DarkBG2', 'rgb(15, 13, 20)') //
        document.documentElement.style.setProperty('--DarkBG3', 'rgb(10, 5, 10)') //
    } else {
        document.documentElement.style.setProperty('--LightBG0', 'rgb(50, 50, 50)')
        document.documentElement.style.setProperty('--LightBG1', 'rgb(40, 40, 40)')
        document.documentElement.style.setProperty('--BG', 'rgb(30, 30, 30)')
        document.documentElement.style.setProperty('--DarkBG0', 'rgb(25, 25, 25)')
        document.documentElement.style.setProperty('--DarkBG1', 'rgb(20, 20, 20)')
        document.documentElement.style.setProperty('--DarkBG2', 'rgb(15, 15, 15)')
        document.documentElement.style.setProperty('--DarkBG3', 'rgb(10, 10, 10)')
    }
}

doge('deleteSave').addEventListener('mouseup', () => {
    if(doge('deleteSave').innerText === 'Are you sure?') {
        deletesave()
    } else {
        doge('deleteSave').innerText = 'Are you sure?'
    }
})