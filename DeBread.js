//Dialogue variables

let dialogueCreated = false
let dialogueFilePath = ''
let dialogueActive = false

//DEBREAD LIBRARY v0.00

const DeBread = {
    /**
    * Rounds a number to the specified decimal place.
    * @param num The number to round.
    * @param decimalPlaces The decimal place to round to.
    */
    round(num, decimalPlaces = 0) {
        return Math.round(num * (Math.pow(10, decimalPlaces))) / (Math.pow(10, decimalPlaces))
    },

    /**
    * Returns a random color.
    */
    randomColor() {
        return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
    },

    /**
    * Returns a random number.
    * @param min The minimum amount the number can be.
    * @param max The maximum amount amount the number can be.
    * @param decimalPlaces The amount of decimal places.
    */
    randomNum(min = 0, max = 1, decimalPlaces = 0) {
        return DeBread.round((Math.random() * (max - min)) + min, decimalPlaces)
    },

    /**
    * Applies a shake effect to an element.
    * (This uses the CSS transform property so it will override an y current CSS transformations.)
    * @param element The element to shake.
    * @param interval The interval of the shake.
    * @param intensity The intensity of the shake.
    * @param time How long the shake lasts (ms).
    * @param rotate If to involve rotation in the shake.
    * @param rotateIntensity The intensity of the rotation in the shake.
    */
    shake(element, interval, intensityX, intensityY, time, rotate = false, rotateIntensity = 0) {
        let shakeInterval = setInterval(() => {
            if(rotate) {
                doge(element).style.setProperty('transform',`translateX(${DeBread.randomNum(-intensityX, intensityX)}px) translateY(${DeBread.randomNum(-intensityY, intensityY)}px) rotate(${DeBread.randomNum(-rotateIntensity, rotateIntensity)}deg)`)
            } else {
                doge(element).style.setProperty('transform',`translateX(${DeBread.randomNum(-intensityX, intensityX)}px) translateY(${DeBread.randomNum(-intensityY, intensityY)}px)`)
            }
        }, interval);
        setTimeout(() => {
            clearInterval(shakeInterval)
            doge(element).style.setProperty('transform',`none`)
        }, time);
    },

    /**
    * Plays a sound.
    * @param sound The file path of the audio.
    * @param volume The volume to play the sound at.
    */
    playSound(sound, volume = 1, speed = 1) {
        if(save.settings.togglable.sfx) {
            let audio = new Audio(sound)
            audio.volume = volume * save.settings.volume
            audio.playbackRate = speed
            audio.play()
        }
    },

    /**
     * Formats seconds into minutes, seconds, or with hours if the value is more than 3600.
     * Ex: 126 seconds = 2:06 
    */

    formatTime(seconds) {
        const hours = Math.floor(seconds / 3600)
        const remainingMinutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60
        const formattedMinutes = String(remainingMinutes).padStart(2, '0')
        const formattedSeconds = String(remainingSeconds).padStart(2, '0')
        if(hours > 0) {
            return `${hours}:${formattedMinutes}:${formattedSeconds}`
        } else {
            return `${formattedMinutes}:${formattedSeconds}`
        }
    },

    /**
    * Creates particles.
    * @param x The initial x position of the particles.
    * @param y The initial y position of the particles.
    * @param size The size of the particles.
    * @param time How long the particle interval lasts (ms).
    * @param interval The interval between particles spawning.
    * @param pClass The CSS class for the particles to use.
    * @param destination Where to append the particles.
    */
    particle(x, y, randomnessX, randomnessY, size, lifeSpan, time, interval, pClass, destination) {
        let particles = []
        let particleNum = 0

        
        let particleInterval = setInterval(() => {
            const particle = document.createElement('div')
            particle.classList.add(pClass)
            particle.style.left = x + DeBread.randomNum(-randomnessX, randomnessX) + 'px'
            particle.style.top = y + DeBread.randomNum(-randomnessY, randomnessY) +'px'
            particle.style.width = size + 'px'
            particle.style.height = size + 'px'
            doge(destination).appendChild(particle)
            particles[particleNum] = particle

            particleNum++

            setTimeout(() => {
                doge(destination).removeChild(particle)
            }, lifeSpan);
        }, interval);

        setTimeout(() => {
            clearInterval(particleInterval)
            particles = []
        }, time);
        return console.log(`Created particle interval, X: ${x}, Y: ${y}, SIZE: ${size}, LIFESPAN: ${lifeSpan}, TIME: ${time}, INTERVAL: ${interval}, PCLASS: ${pClass}, DESTINATION: ${destination}`)
    },

    /**
    * Returns a random value in an array.
    */

    getRandomInArray(array) {
        return array[DeBread.randomNum(0, array.length - 1)]
    },

    //DIALOGUE STUFF

    /**
    * Create a game-like dialogue system.
    */

    dialogue: {

        /**
        * Creates the elements needed for the dialogue to work properly.
        * @param destination The ID of the HTML element to append the dialogue container to.
        * @param type Wether to use custom styles or preset styles, preset = Preset stles; custom = Custom styles.
        * @param containerClassName The name of the class used for styling the dialogue container.
        * @param boxClassName The name of the class used for styling the dialogue box.
        */

        create(destination, type, containerClassName, boxClassName) {
            if(!dialogueCreated) {
                dialogueCreated = true

                const dialogueContainer = document.createElement('div')
                const dialogueBox = document.createElement('div')

                if(type === 'preset') {
                    //DIALOGUE CONTAINER PRESET STYLES
    
                    dialogueContainer.style.width = '100vw'
                    dialogueContainer.style.top = '25px'
                    dialogueContainer.style.display = 'none'
                    dialogueContainer.style.position = 'absolute'
                    dialogueContainer.style.justifyContent = 'center'
                    dialogueContainer.style.pointerEvents = 'none'
                    
                    doge(destination).appendChild(dialogueContainer)
                    console.log('Dialogue container has been created.')
                    
                    //DIALOGUE CONTAINER ATTRIBUTES
                    
                    dialogueContainer.setAttribute('id','DeBreadDialogueContainer')
                    
                    //DIALOGUE BOX PRESET STYLES
                    
                    dialogueBox.style.height = '125px'
                    dialogueBox.style.width = '750px'
                    dialogueBox.style.padding = '10px'
                    dialogueBox.style.backgroundColor = 'rgb(50, 50, 50)'
                    dialogueBox.style.display = 'flex'
                    dialogueBox.style.gap = '10px'
                    dialogueBox.style.cursor = 'pointer'
                    dialogueBox.style.userSelect = 'none'
                    dialogueBox.style.position = 'relative'
                    dialogueBox.innerHTML = 
                    `
                        <div style="width: 125px; height: 125px; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 40%);">
                            <img id="DeBreadDialogueImg" width="115px" height="115px" style="background-color: rgba(0, 0, 0, 50%);">
                        </div>
                        <div style="height: 100%; width: calc(100% - 160px); display: flex; flex-direction: column; gap: 5px; line-height: 1">
                            <span id="DeBreadDialogueName" style="font-size: 1.25em; font-weight: 700; width: 100%; background-color: rgba(0, 0, 0, 40%); padding: 5px;">Character Name</span><br>
                            <span id="DeBreadDialogueText" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 40%); padding: 5px;">This is some words</span>
                            <div style="position: absolute; bottom: 15px; right: 30px; display: flex; justify-content: center;">
                                <img id="DeBreadDialogueProgressionIcon" src="media/arrow.png" width="20">
                            </div>
                        </div>
                    `

                    dialogueBox.setAttribute('id','DeBreadDialogueBox')
                    doge('DeBreadDialogueContainer').appendChild(dialogueBox)
                    console.log('Dialogue box has been created.')

                } else if(type === 'custom') {
                    dialogueContainer.classList.add(containerClassName)
                    dialogueBox.classList.add(boxClassName)

                    dialogueBox.innerHTML = 
                    `
                        <div style="width: 125px; height: 125px; display: flex; justify-content: center; align-items: center; background-color: rgba(0, 0, 0, 40%);">
                            <img id="DeBreadDialogueImg" width="115px" height="115px" style="background-color: rgba(0, 0, 0, 50%);">
                        </div>
                        <div style="height: 100%; width: calc(100% - 160px); display: flex; flex-direction: column; gap: 5px; line-height: 1">
                            <span id="DeBreadDialogueName" style="font-size: 1.25em; font-weight: 700; width: 100%; background-color: rgba(0, 0, 0, 40%); padding: 5px;">Character Name</span><br>
                            <span id="DeBreadDialogueText" style="width: 100%; height: 100%; background-color: rgba(0, 0, 0, 40%); padding: 5px;">This is some words</span>
                            <div style="position: absolute; bottom: 15px; right: 30px; display: flex; justify-content: center;">
                                <img id="DeBreadDialogueProgressionIcon" src="media/arrow.png" width="20">
                            </div>
                        </div>
                    `
                } else {
                    console.error('Please provide a valid dialogue type.')
                    console.log('Syntax: create(destination, type, containerClassName?, boxClassName?)')
                    console.log('preset: Uses preset styles')
                    console.log('custom: Uses custom styles based on the class provided.')

                    dialogueCreated = false
                }
            } else {
                console.error('Dialogue has already been created.')
                console.log('Use DeBread.dialogue.display(id) to display dialogue.')
            }
        },

        /**
        * Displays the dialogue.
        * @param id The ID of the dialogue object.
        * @param progressionKey The key used to progress the dialogue.
        */

        display(id, progressionKey = ' ') {
            if(dialogueFilePath === '') {
                console.error('Please set a dialogue file path using DeBread.dialogue.setFilePath(path)')
                console.log(`Current path: '${dialogueFilePath}'`)
            } else {
                doge('DeBreadDialogueContainer').style.display = 'flex'
                let progression = 0
                updateDialogue(progression)
                document.body.addEventListener('keydown', progressDialogue)
                doge('DeBreadDialogueBox').addEventListener('mousedown', progressDialogue)

                function progressDialogue() {
                    if(event.key === progressionKey) {
                        doge('DeBreadDialogueProgressionIcon').style.opacity = 0
                        if(progression < id.length - 1) {
                            progression++
                            updateDialogue(progression)
                        } else {
                            doge('DeBreadDialogueContainer').style.display = 'none'
                            document.body.removeEventListener('keydown', progressDialogue)
                            doge('DeBreadDialogueBox').removeEventListener('mousedown', progressDialogue)
                            progression = 0
                        }
                    }
                }
    
                function updateDialogue(progress) {
                    doge('DeBreadDialogueImg').src = `${dialogueFilePath}/${id[progress].character}/${id[progress].mood}.gif`
                    doge('DeBreadDialogueName').innerText = id[progress].name                    
                    doge('DeBreadDialogueName').style.color = nameColors[id[progress].character]
                    doge('DeBreadDialogueBox').style.background = `url(${dialogueFilePath}/${id[progress].character}/bg.png)`
                    doge('DeBreadDialogueBox').style.backgroundSize = '770px'
                    
                    if(id[progress].run) {
                        id[progress].run()
                    }
                    
                    let currentText = ''
                    for(let i = 0; i < id[progress].text.length; i++) {
                        setTimeout(() => {
                            if(progress === progression) {
                                currentText += id[progress].text[i]
                                doge('DeBreadDialogueText').innerHTML = currentText
                            }
                            if(i === id[progress].text.length - 1) {
                                if(progress === id.length - 1) {
                                    doge('DeBreadDialogueProgressionIcon').src = 'media/x.png'
                                } else {
                                    doge('DeBreadDialogueProgressionIcon').src = 'media/arrow.png'
                                }
                                doge('DeBreadDialogueProgressionIcon').style.opacity = 1
                            }
                        }, 20 * i);
                    }
                }
            }
        },

        /**
         * Sets the file path for the character portraits.
         * @param path The file path. 
         */

        setFilePath(path) {
            dialogueFilePath = path
            console.log(`Dialogue file path has been set to '${path}'`)
        }
    },

}

/**
* Shortened document.getElementById.
* (From library "DeBread")
* @param id The ID of the element.
*/
function doge(id) {
    return document.getElementById(id)
}

window.onload = () => {
    console.log('DeBread library has been loaded.')
}