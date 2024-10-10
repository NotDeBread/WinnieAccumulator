const debugCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
    'Enter'
]

let debugInput = []

let debugChatHistory = ''
let chatAvailable = true

let debugName = 'USER'
let debugColor = 'grey'

document.addEventListener('keydown', (event) => {
    debugInput.push(event.key)

    if(debugInput[debugInput.length - 1] === debugCode[debugInput.length - 1]) {
        //
    } else {
        debugInput = []
    }
    if(debugInput.length === 11) {
        save.cheatsUsed = true
        unlockDevTools()
    }

    if(event.key === '`') {
        if(doge('debugChat').style.display === 'unset') {
            doge('debugChat').style.display = 'none'
        } else {
            doge('debugChat').style.display = 'unset'
        }
    }

    // doge('debugChat').style.display === 'unset'
    if(true) {
        setTimeout(() => {            
            if(doge('debugInput').value.startsWith('/')) {
                doge('debugInput').style.color = 'yellow'
            } else if(doge('debugInput').value.startsWith('!')) {
                doge('debugInput').style.color = 'aqua'
            } else if(doge('debugInput').value.startsWith('^') && doge('debugInput').value.length > 1) {
                doge('debugInput').style.color = textColors[doge('debugInput').value[1]]
            } else if(doge('debugInput').value.startsWith('@')) {
                doge('debugInput').style.color = '#78c0ff'
            } else {
                doge('debugInput').style.color = 'white'
            }
        }, 100);

        if(event.key === 'Enter' && doge('debugInput').value.length > 0 && chatAvailable) {
            let parsedText = doge('debugInput').value
            debugChatHistory = parsedText
            if(parsedText.startsWith('^')) {
                parsedText = parsedText.slice(1)
                let color = parsedText[0]
                parsedText = parsedText.slice(1)
                createDebugMessage(`[${debugName}] ` + parsedText, 25, textColors[color])

            } else if(parsedText.startsWith('/')) {
                parsedText = parsedText.slice(1)
                eval(parsedText)
                createDebugMessage(`[JS] Executed code "${parsedText}"`, 10, 'yellow')
                save.cheatsUsed = true

            } else  if(parsedText.startsWith('@')) {
                createDebugMessage(`[${debugName}] ${parsedText}`, 25, debugColor)
                parsedText = parsedText.slice(1)
                if(parsedText.toLowerCase() === 'debread') {getAchievement('loafCommunication')}
                for(let user in users) {
                    if(parsedText.toLowerCase().startsWith(user)) {
                        let randomValue = DeBread.randomNum(0, users[user].messages.self.length - 1)

                        if(users[user].messages.self[randomValue] === undefined) {
                            setTimeout(() => {
                                createDebugMessage(`[!] ${user.toUpperCase()} has nothing to say...`, 25, 'grey')
                            }, 500, 2000);
                        } else {
                            setTimeout(() => {
                                createDebugMessageChain(user, users[user].messages.self[randomValue], 25, users[user].color)              
                            }, DeBread.randomNum(500, 2000));
                        }
                    }
                }
                if(parsedText === 'everyone') {
                    for(let user in users) {
                        if(users[user].messages.everyone.length > 0) {
                            setTimeout(() => {
                                createDebugMessage(`[${user.toUpperCase()}] ${DeBread.getRandomInArray(users[user].messages.everyone)}`, 25, users[user].color)
                            }, DeBread.randomNum(500, 7500));
                        }
                    }
                }
            } else if(parsedText.startsWith('!')) {
                parsedText = parsedText.slice(1)
                if(parsedText === 'clear') {
                    doge('debugOutput').innerHTML = ''
                    createDebugMessage('Debug console cleared.', 10, 'grey', 1000)
                }
                if(parsedText.startsWith('width')) {
                    parsedText = parsedText.slice(6)
                    doge('debugOutput').style.width = parsedText + 'px'
                    doge('debugInput').style.width = parsedText + 'px'
                    createDebugMessage(`[CONSOLE] Set console width to ${parsedText}`, 10, 'aqua')
                }
                if(parsedText.startsWith('height')) {
                    parsedText = parsedText.slice(7)
                    doge('debugOutput').style.height = parsedText + 'px'
                    createDebugMessage(`[CONSOLE] Set console height to ${parsedText}`, 10, 'aqua')
                }
                if(parsedText.startsWith('opacity')) {
                    parsedText = parsedText.slice(8)
                    doge('debugOutput').style.opacity = parsedText
                    createDebugMessage(`[CONSOLE] Set console opacity to ${parsedText}`, 10, 'aqua')
                }
                if(parsedText.startsWith('style')) {
                    parsedText = parsedText.slice(6)
                    let value1 = ''
                    for(let i = 0; i < parsedText.length; i++) {
                        if(parsedText[i] !== ' ') {
                            value1 += parsedText[i]
                        } else {
                            break
                        }
                    }
                    parsedText = parsedText.slice(value1.length + 1)
                    doge('debugChat').style[value1] = parsedText
                    createDebugMessage(`[CONSOLE] Set style ${value1} to ${parsedText}`, 10, 'aqua')
                }
                if(parsedText.startsWith('say')) {
                    parsedText = parsedText.slice(4)
                    createDebugMessage(parsedText, 10, 'white')
                }
                if(parsedText.startsWith('setname')) {
                    parsedText = parsedText.slice(8)
                    debugColor = 'grey'
                    if(parsedText.toLowerCase() === 'debread') {
                        []
                        createDebugMessage(`[DEBREAD] ${[DeBread.getRandomInArray([
                            'You can\'t do that.',
                            'Stop.',
                            'No.',
                        ])]}`, 25, 'mediumslateblue')
                        DeBread.playSound('media/audio/error.mp3', 0.5)
                        DeBread.shake('debugChat', 10, 5, 5, 100)
                        return
                    } else if(parsedText.toLowerCase() === 'alex' || parsedText.toLowerCase() === 'redjive2') {
                        debugColor = '#DE3629'
                    } else if(parsedText.toLowerCase() === 'eddie') {
                        debugColor = '#BA9349'
                    } else if(parsedText.toLowerCase() === 'asav' || parsedText.toLowerCase() === 'zesto') {
                        debugColor = '#66adff'
                    } else if(parsedText.toLowerCase() === 'debreadisverycool') {
                        debugColor = 'mediumslateblue'
                        debugName = 'DEBREAD'
                        createDebugMessage(`[CONSOLE] Set name to ${debugName}`, 10, 'aqua')
                        doge('debugInput').value = ''
                        return
                    } else if(parsedText.toLowerCase() === 'zeke') {
                        debugColor = 'orange'
                    } else if(parsedText.toLowerCase() === 'xander') {
                        debugColor = '#349632'
                    } else if(parsedText.toLowerCase() === 'hugo') {
                        debugColor = '#2b6dd6'
                    }
                    debugName = parsedText.toUpperCase()
                    createDebugMessage(`[CONSOLE] Set name to ${debugName}`, 10, 'aqua')
                }
                if(parsedText.startsWith('messages')) {
                    createDebugMessage(`[CONSOLE] ${doge('debugOutput').childElementCount} messages are displayed`, 10, 'aqua')
                }
                if(parsedText.startsWith('chars')) {
                    let charCount = 0
                    document.querySelectorAll('#debugOutput span').forEach(element => {
                        charCount += element.textContent.length
                    });
                    createDebugMessage(`[CONSOLE] ${charCount} characters are displayed`, 10, 'aqua')
                }
                if(parsedText === 'help') {
                    createDebugMessage(`
                        [HELP]
                        COMMANDS (starts with !):
                        !clear: clears debug console.
                        !width <width:int>: changes the width of the debug console.
                        !height <height:int>: changes the height of the debug console.
                        !style <style:str> <value:str>: changes specific CSS values of the debug console. 
                        !say <text:str>: Sends a message into the debug console.
                        !setname <name:str>: Changes your name in the debug console.
                        !messages: Shows the amount of messages in the debug console.
                        !chars: Shows the amount of characters in the debbug console.

                        COLORS (starts with ^):
                        0: red
                        1: orange
                        2: yellow
                        3: green
                        4: blue
                        5: purple
                        6: pink
                        7: grey
                        8: black

                        You can also start messages with '/' to execute JavaScript code.
                    `, 5, 'white')
                    setTimeout(() => {
                        createDebugMessage('[?] Plus, theres a lot of easter eggs here! Try to find them all!', 25, 'grey')
                    }, 7000);
                }
            } else if(parsedText.toLowerCase() === 'debread sucks') {
                createDebugMessage('[DEBREAD] no i dont >:(', 100, 'red')
            } else {
                createDebugMessage(`[${debugName}] ${parsedText}`, 25, debugColor)
            }
            if(doge('debugOutput').childElementCount === 100) {
                createDebugMessage('[CONSOLE] you have reached 100 messages, you can clear them using !clear.', 10,'yellow')
            }
            if(doge('debugOutput').childElementCount === 1000) {
                createDebugMessage('[CONSOLE] DAMN! you reached the limit of 1,000 messages, it will be cleared automatically in 10 seconds.', 10, 'red')
                setTimeout(() => {
                    doge('debugOutput').innerHTML = ''
                    createDebugMessage('[TOOLS] Debug console cleared.', 5, 'grey', 1000)
                }, 10000);
            }

            if(doge('debugInput').value.includes('💀')) {
                setTimeout(() => {
                    createDebugMessage('[DEBREAD] lmao', 25, 'mediumslateblue')
                }, 1000);
            }

            doge('debugInput').value = ''
        }

        if(event.key === 'ArrowUp') {
            doge('debugInput').value = debugChatHistory
        }
    }
})

doge('debugInput').addEventListener('keydown', (event) => {
    if(event.key !== 'Enter') {
        DeBread.playSound(`media/audio/type${DeBread.randomNum(1, 3)}.mp3`, 0.2, DeBread.randomNum(0.75, 1.25))
    } else {
        DeBread.playSound('media/audio/enter.mp3', 0.2)   
    }
})

function unlockDevTools() {
    updateToolbarButtons()
    getAchievement('cheatedWinnieOrbsAreAwful')
}

if(save.cheatsUsed) {
    unlockDevTools()
}

const dev = {
    getAllAchievements() {
        let i = 0
        for(let achievement in save.achievements) {
            setTimeout(() => {
                getAchievement(achievement)
            }, 25 * i);
            i++
        }
    },
    lockAllAchievements() {
        for(let achievement in save.achievements) {
            save.achievements[achievement].unlocked = false
        }
    },
    unlockAllUpgrades() {
        let orbAmount = 0
        for(let upgrade in save.upgrades) {
            save.upgrades[upgrade].unlocked = true
            createUpgrade(upgrade)
            orbAmount += upgrades[upgrade].price
        }
        getOrbs(orbAmount)
    }
}

const textColors = [
    'red',
    'orange',
    'yellow',
    'lime',
    'dodgerblue',
    'mediumslateblue',
    'hotpink',
    'grey',
    'black'
]

const users = {
    debread: {
        messages: {
            everyone: [
                ['bro really just @everyone 💀'],
                ['this isnt discord bruh.'],
                ['💀'],
                ['enjoy your ban pal.'],
                ['don\'t make me ban you 😡'],
                ['stfu im making Winnie Accumulator']
            ],
            self: [
                [
                    'What do you want?',
                    'Eddie pics?',
                    'Winnie pics?',
                ],
                // [
                //     'DeBread.js is a thing',
                //     'I\'m not sure if I really want to release it though...',
                //     'Like, would people really use it?',
                //     'It kinda just has features that are useful to me and not much for others.',
                //     'Idk, I might release it, I might not.',
                //     'Its on like, every single game ive made so its already kind of public.'
                // ],
                [
                    'What happened to Eddie Accumulator?',
                    'Well, first of all,                    the code sucked.',
                    'Like, there were two functions for every single upgrade,                 totaling 78 functions for just the upgrades.',
                    'While Winnie Accumulator only uses 2 functions and a few if statements to manage all of the upgrades, which is a VERY big improvement.',
                ],
                [
                    'This debug console was originally supposed to be used like the Minecraft chat,             where you could send random messages and enter commands.',
                    'I never got the commands to work properly so I turned it into a thingy filled with easter eggs.',
                    'There\'s still command-like things you can do with it, but why use this when you can use the JS console.'
                ],
                // [
                //     'If you\'re reading this,                        that means that I finally got Winnie Accumulator saving to work.',
                //     'As im typing this, I have no idea how I could make it work.',
                //     'Like why can I just do: \'pleaveSaveThisPrettyPlease(save, upgrades)\'?',
                //     'Why does programming have to be so hard :(',
                //     'UPDATE: I got it to work.',
                //     'It was very simple;                      I was being stupid.'
                // ],
                // [
                //     'It took me forever to get this message chain thing to work.',
                //     'Whenever I tried to @ someone it would display messages that werent even called for.',
                //     'Like what.'
                // ],
                [
                    'Want to open up developer tools?',
                    'Use the Konami Code then ENTER if you want them.',
                    'It will permanently show \'CHEATS USED\' above the Winnie Orb though.'
                ]
            ]
        },
        color: 'mediumslateblue'
    },
    asav: {
        messages: {
            everyone: [

            ],
            self: [

            ]
        },
        color: '#66ADFF'
    },
    zeke: {
        messages: {
            everyone: [

            ],
            self: [
                [
                    'ᵂᴵᴺᴺᴵᴱꜝ'
                ]
            ]
        },
        color: 'orange'
    },
    xander: {
        messages: {
            everyone: [

            ],
            self: [

            ]
        },
        color: '#349632'
    },
    eddie: {
        messages: {
            everyone: [

            ],
            self: [

            ]
        },
        color: '#BA9349'
    },
    hugo: {
        messages: {
            everyone: [
                [

                ]
            ],
            self: [
                [

                ]
            ]
        },
        color: '#2b6dd6'
    }
}

function createDebugMessage(text, speed = 25, color = 'grey', time) {
    let typing = false
    setTimeout(() => {
        typing = true
        DeBread.playSound('media/audio/enter.mp3', 0.2)
    }, text.length * speed);
    if(doge('debugOutput').childElementCount < 1001) {
        const span = document.createElement('span')
        span.style.color = color
        doge('debugOutput').appendChild(span)
        let displayedText = ''
        for(let i = 0; i < text.length; i++) {
            setTimeout(() => {
                displayedText += text[i]
                span.innerText = displayedText
                if(text[i] !== ' ' && !typing && speed >= 20) {
                    DeBread.playSound(`media/audio/type${DeBread.randomNum(1, 3)}.mp3`, 0.2, DeBread.randomNum(0.75, 1.25))
                }
                doge('debugOutput').scrollTop = 4986723904623894
                if(i === text.length - 1) {
                    if(time) {
                        setTimeout(() => {
                            doge('debugOutput').removeChild(span)
                        }, time);
                    }
                }
            }, speed * i);
        }
    }
}

function createDebugMessageChain(name, array, speed, color) {
    if(array.length >= 3) {
        chatAvailable = false
        checkChatAvailability()
    }
    let chainProgress = 0
    
    startNewMessage()
    function startNewMessage() {
        createDebugMessage(`[${name.toUpperCase()}] ${array[chainProgress]}`, speed, color)
        setTimeout(() => {
            if(chainProgress < array.length - 1) {
                chainProgress++
                startNewMessage()
            } else {
                if(array.length >= 3) {
                    createDebugMessage(`[!] Message chain ended.`, 25, 'grey')
                }
                chatAvailable = true
                checkChatAvailability()
            }
        }, ((array[chainProgress].length + 10) * 25) + DeBread.randomNum(500, 1000));
    }
}

let invalidChatInterval

function checkChatAvailability() {
    if(chatAvailable) {
        clearInterval(invalidChatInterval)
        if(doge('debugInput').value === '...') {
            doge('debugInput').value = ''
        }
    } else {
        invalidChatInterval = setInterval(() => {
            doge('debugInput').value = '...'
        }, 10)
    }
}

const debug = {
    log(message) {
        createDebugMessage(`[LOG] ${eval(message)}`, 25, 'white')
    },
}