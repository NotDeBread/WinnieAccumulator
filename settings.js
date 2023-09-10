for(setting in save.settings.togglable) {
    updateSetting(setting)
}

function updateSetting(setting) {
    save.settings.togglable[setting] = doge(`${setting}Input`).checked
    doge(`${setting}Input`).checked = save.settings.togglable[setting]

    if(setting === 'orbEffects') {updateSphere()}
}

function updateVolume() {
    console.log('e')
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
        if(save.settings.mode + 1 > save.settings.modes.length - 1) {
            save.settings.mode = 0
        } else {
            save.settings.mode++
        }
    }
    if(type === 'prev') {
        if(save.settings.mode - 1 < 0) {
            save.settings.mode = save.settings.modes.length - 1
        } else {
            save.settings.mode--
        }
    }
    if(save.settings.modes[save.settings.mode] === 'Eddie') {
        eddieTimer('start')
    } else {
        eddieTimer('end')
    }
    updateSphere()
}

updateSphere()
function updateSphere() {
    doge('modeSelected').innerText = save.settings.modes[save.settings.mode]
    doge('sphere').src = `media/spheres/${save.settings.modes[save.settings.mode]}.gif`

    if(save.settings.modes[save.settings.mode] === 'Sasha' && save.settings.togglable.orbEffects) {
        doge('sphere').classList.add('sasho')
    } else {
        doge('sphere').classList.remove('sasho')
    }
    if(save.settings.modes[save.settings.mode] === 'Eddie' && save.settings.togglable.orbEffects) {
        document.documentElement.style.setProperty('--BG', 'rgb(32, 28, 45)')
        document.documentElement.style.setProperty('--ButtonContainer', 'rgb(24, 22, 36)')
        document.documentElement.style.setProperty('--Button', 'rgb(18, 17, 27)')
    } else {
        document.documentElement.style.setProperty('--BG', 'rgb(30, 30, 30)')
        document.documentElement.style.setProperty('--ButtonContainer', 'rgb(25, 25, 25)')
        document.documentElement.style.setProperty('--Button', 'rgb(20, 20, 20)')
    }
}

doge('deleteSave').addEventListener('mouseup', () => {
    if(doge('deleteSave').innerText === 'Are you sure?') {
        deletesave()
    } else {
        doge('deleteSave').innerText = 'Are you sure?'
    }
})