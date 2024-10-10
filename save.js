const defaultSave = {
    orbs: 0,
    totalorbs: 0,
    wps: 0,
    wpc: 1,
    permBoost: 1,
    critChance: 100,
    critClickMultiplier: 1,
    
    goldenWinniesAvailable: false,
    goldenWinnieChance: 15,

    gamblingUnlocked: false,

    prestigeOrbs: 0,
    prestigeTokens: 0,
    prestigeTokensActive: 0,
    prestigeGoal: 1000000,
    
    spellsUnlocked: false,
    flaskIncrease: 1,

    cheatsUsed: false,

    timesGambled: 0,
    
    flasks: {
        current: 0,
        max: 50,
    },

    items: {
        cursor: {
            price: 10,
            baseWPS: 1,
            multiplier: 1,
            count: 0,

            quote: '"Clickity click clack"',
            img: 'cursor.png',
            desc: '"Buy some more mice from your local Best Buy."'
        },
        bone: {
            price: 500,
            baseWPS: 10,
            multiplier: 1,
            count: 0,

            img: 'bone.png',
            quote: '"Winnie doesn\'t really like bones but she will enjoy thier company."',
        },
        tennisBall: {
            price: 7500,
            baseWPS: 100,
            multiplier: 1,
            count: 0,

            img: 'tennisBall.png',
            quote: '"Winnie will stop whatever she\'s doing to go get a tennis ball."',
        },
        friend: {
            price: 100000,
            baseWPS: 1000,
            multiplier: 1,
            count: 0,

            img: 'friend.png',
            quote: '"Winnie isn\'t very social when it comes to humans, but with dogs on the other hand, she will play with them anytime."',
        },
        winnie: {
            price: 2500000,
            baseWPS: 10000,
            multiplier: 1,
            count: 0,

            img: 'winnie.png',
            quote: '"..."',
        },

        //TOOLS

        reinforcedGloves: {
            price: 100,
            baseWPS: 0.25,
            multiplier: 1,
            count: 0,

            img: 'reinforcedGloves.png',
            quote: '"Go to the shady store around the corner to buy some reinforced gloves for more efficient Winne clicking."',
        },
        magnifyingGlass: {
            price: 250,
            baseWPS: 0.25,
            multiplier: 1,
            count: 0,

            img: 'magnifyingGlass.png',
            quote: '"Use some magnifying glasses to click the Winnie Orb more accurately."',
            desc: ``
        }
    },

    upgrades: {
        silverCursors: {
            unlocked: false,
            bought: false,
        },
        goldCursors: {
            unlocked: false,
            bought: false,
        },
        diamondCursors: {
            unlocked: false,
            bought: false,
        },
        rubyCursors: {
            unlocked: false,
            bought: false,
        },
        emeraldCursors: {
            unlocked: false,
            bought: false,
        },
        obsidianCursors: {
            unlocked: false,
            bought: false,
        },
        osmiumCursors: {
            unlocked: false,
            bought: false,
        },
        biggerBone: {
            unlocked: false,
            bought: false,
        },
        boneTreat: {
            unlocked: false,
            bought: false,
        },
        nylonBones: {
            unlocked: false,
            bought: false,
        },
        hideBones: {
            unlocked: false,
            bought: false,
        },
        stick: {
            unlocked: false,
            bought: false,
        },
        chairLeg: {
            unlocked: false,
            bought: false,
        },
        sock: {
            unlocked: false,
            bought: false,
        },
        tennisBall2: {
            unlocked: false,
            bought: false,
        },
        baseball: {
            unlocked: false,
            bought: false,
        },
        basketBall: {
            unlocked: false,
            bought: false,
        },
        golfBall: {
            unlocked: false,
            bought: false,
        },
        rock: {
            unlocked: false,
            bought: false,
        },
        winniesFavoriteBall: {
            unlocked: false,
            bought: false,
        },
        winniesOtherFavoriteBall: {
            unlocked: false,
            bought: false,
        },
        asher: {
            unlocked: false,
            bought: false,
        },
        sasha: {
            unlocked: false,
            bought: false,
        },
        kisa: {
            unlocked: false,
            bought: false,
        },
        rodger: {
            unlocked: false,
            bought: false,
        },
        walter: {
            unlocked: false,
            bought: false,
        },
        bruno: {
            unlocked: false,
            bought: false,
        },
        shadow: {
            unlocked: false,
            bought: false,
        },
        winnieWorkers: {
            unlocked: false,
            bought: false,
        },
        winnieComputerScientists: {
            unlocked: false,
            bought: false,
        },
        winnieOsteologists: {
            unlocked: false,
            bought: false,
        },
        winnieAthletes: {
            unlocked: false,
            bought: false,
        },
        winnieVeterinarians: {
            unlocked: false,
            bought: false,
        },
        winnieWinniologists: {
            unlocked: false,
            bought: false,
        },
        preciseGloves: {
            unlocked: false,
            bought: false,
        },
        aimAssist: {
            unlocked: false,
            bought: false,
        },
        hackedClient: {
            unlocked: false,
            bought: false,
        },
        modifiedHardware: {
            unlocked: false,
            bought: false,
        },
        hiddenMilitaryTechnology: {
            unlocked: false,
            bought: false,
        },
        goldBar: {
            unlocked: false,
            bought: false,
        },
        liquidGold: {
            unlocked: false,
            bought: false,
        },
        luckyCherry: {
            unlocked: false,
            bought: false,
        },
        emptyBottle: {
            unlocked: false,
            bought: false,
        },
        largerFlasks: {
            unlocked: false,
            bought: false,
        },
    },

    achievements: {
        click: {
            unlocked: false,
        },
        CRITICALHIT: {
            unlocked: false,
        },
        automatedWinnieClicking: {
            unlocked: false,
        },
        weShouldGoPlayTennis: {
            unlocked: false,
        },
        agressiveWinnieClicking: {
            unlocked: false,
        },
        efficientWinnieClicking: {
            unlocked: false,
        },
        accurateWinnieClicking: {
            unlocked: false,
        },
        endlessCycle: {
            unlocked: false,
        },
        realOG: {
            unlocked: false,
        },
        goneButNotForgotten: {
            unlocked: false,
        },
        youreAWizardWinnie: {
            unlocked: false,
        },
        lazyWizard: {
            unlocked: false,
        },
        gamblingAddiction: {
            unlocked: false,
        },
        lucky: {
            unlocked: false,
        },
        lotteryWinner: {
            unlocked: false,
        },
        //RARE
        bigShot: {
            unlocked: false,

        },
        trueGambler: {
            unlocked: false,
        },
        theWholeCollection: {
            unlocked: false,

        },
        completionist: {
            unlocked: false,

        },
        completionistII: {
            unlocked: false,
        },
        //SECRET
        cheatedWinnieOrbsAreAwful: {
            unlocked: false,
        },
        loafCommunication: {
            unlocked: false,
        },
        completionistIII: {
            unlocked: false,
        },
        aRealOne: {
            unlocked: false,
        },
    },

    settings: {
        togglable: {
            showWPSOnClick: true,
            orbEffects: true,
            formatNumbers: true,
            particles: true,
            sfx: true,
            autosave: true,
        },

        volume: 0.5,
        mode: 0,
    },

    stats: {
        itemsBought: 0,
        upgradesBought: 0,
        timesClicked: 0,
        goldenWinniesSpawned: 0,
        goldenWinniesClicked: 0,
        orbsSpent: 0,

        spellsBought: {
            goldenEye: 0,
            spellOfShininess: 0,
            timeSkip: 0,
            spellOfHaste: 0,

            //Make this a cool statistic graph thing in v0.03
        }
    }
}

const upgrades = {
    silverCursors: {
        img: 'silverCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 2
        },
        requirement: function() {
            return save.items.cursor.count >= 10
        },
        price: 500,

        name: 'Silver Cursors',
        quote: '"Shiny!"',
        desc: 'Doubles cursor speed.'
    },
    goldCursors: {
        img: 'goldCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 2
        },
        requirement: function() {
            return save.items.cursor.count >= 25
        },
        price: 2500,

        name: 'Gold Cursors',
        quote: '"Very Shiny!"',
        desc: 'Doubles cursor speed.'
    },
    diamondCursors: {
        img: 'diamondCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 2
        },
        requirement: function() {
            return save.items.cursor.count >= 50
        },
        price: 25000,

        name: 'Diamond Cursors',
        quote: '"Wow, that is really shiny"',
        desc: 'Doubles cursor speed.'
    },
    rubyCursors: {
        img: 'rubyCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 2
        },
        requirement: function() {
            return save.items.cursor.count >= 75
        },
        price: 500000,

        name: 'Ruby Cursors',
        quote: '"Ok, that- that right there... is very shiny."',
        desc: 'Doubles cursor speed.'
    },
    emeraldCursors: {
        img: 'emeraldCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 3
        },
        requirement: function() {
            return save.items.cursor.count >= 100
        },
        price: 2500000,

        name: 'Emerald Cursors',
        quote: '"Woah, I cannot believe my eyes, that is incredibly shiny."',
        desc: 'Triples cursor speed.'
    },
    obsidianCursors: {
        img: 'obsidianCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 3
        },
        requirement: function() {
            return save.items.cursor.count >= 125
        },
        price: 75000000,

        name: 'Obsidian Cursors',
        quote: '"Is it even shiny at this point."',
        desc: 'Triples cursor speed.'
    },
    osmiumCursors: {
        img: 'osmiumCursors.png',
        function: function() {
            save.items.cursor.multiplier *= 5
        },
        requirement: function() {
            return save.items.cursor.count >= 150
        },
        price: 1000000000,

        name: 'Osmium Cursors',
        quote: '"Try to lift it, I dare you."',
        desc: 'Cursor speed x5.'

    },
    biggerBone: {
        img: 'biggerBone.png',
        function: function() {
            save.items.bone.multiplier *= 2
        },
        requirement: function() {
            return save.items.bone.count >= 10
        },
        price: 7500,

        name: 'Bigger Bone',
        quote: '"One step closer to being a certified boner." <br> -Redjive2',
        desc: 'Doubles bone speed.'
    },
    boneTreat: {
        img: 'boneTreat.png',
        function: function() {
            save.items.bone.multiplier *= 2
        },
        requirement: function() {
            return save.items.bone.count >= 25
        },
        price: 75000,

        name: 'Bone Treat',
        quote: '"A tasty treat for Winnie."',
        desc: 'Doubles bone speed.'
    },
    nylonBones: {
        img: 'nylonBones.png',
        function: function() {
            save.items.bone.multiplier *= 2
        },
        requirement: function() {
            return save.items.bone.count >= 50
        },
        price: 750000,

        name: 'Nylon Bones',
        quote: '"I have no idea what nylon is." -DeBread',
        desc: 'Doubles bone speed.'
    },
    hideBones: {
        img: 'hideBones.png',
        function: function() {
            save.items.bone.multiplier *= 2
        },
        requirement: function() {
            return save.items.bone.count >= 75
        },
        price: 10000000,

        name: 'Hide Bones',
        quote: '"I have no idea what hide is either." -DeBread',
        desc: 'Doubles bone speed.'
    },
    stick: {
        img: 'stick.png',
        function: function() {
            save.items.bone.multiplier *= 3
        },
        requirement: function() {
            return save.items.bone.count >= 100
        },
        price: 500000000,

        name: 'Stick',
        quote: '"Why do dogs even chase sticks, like, they\'re everywhere outside."',
        desc: 'Triples bone speed.'
    },
    chairLeg: {
        img: 'chairLeg.png',
        function: function() {
            save.items.bone.multiplier *= 3
        },
        requirement: function() {
            return save.items.bone.count >= 125
        },
        price: 10000000000,

        name: 'Chair Leg',
        quote: '"Every dog\'s favorite chew toy."',
        desc: 'Triples bone speed.'
    },
    sock: {
        img: 'sock.png',
        function: function() {
            save.items.bone.multiplier *= 3
        },
        requirement: function() {
            return save.items.bone.count >= 150
        },
        price: 250000000000,

        name: 'Sock',
        quote: '"For some reason, Winnie likes to take my socks and put them in random places."',
        desc: 'Triples bone speed.'
    },
    tennisBall2: {
        img: 'tennisBall2.png',
        function: function() {
            save.items.tennisBall.multiplier *= 2
        },
        requirement: function() {
            return save.items.tennisBall.count >= 10
        },
        price: 100000,

        name: 'Tennis Ball 2',
        quote: '"Go to that one sports store and get some way too expensive tennis balls."',
        desc: 'Doubles tennis ball speed.'
    },
    baseball: {
        img: 'baseball.png',
        function: function() {
            save.items.tennisBall.multiplier *= 2
        },
        requirement: function() {
            return save.items.tennisBall.count >= 25
        },
        price: 1500000,

        name: 'Baseball',
        quote: '"Winnie doesn\'t play baseball..."',
        desc: 'Doubles tennis ball speed.'
    },
    basketBall: {
        img: 'basketBall.png',
        function: function() {
            save.items.tennisBall.multiplier *= 2
        },
        requirement: function() {
            return save.items.tennisBall.count >= 50
        },
        price: 50000000,

        name: 'Basket Ball',
        quote: '"Winnie doesn\'t play basketball either..."',
        desc: 'Doubles tennis ball speed.'
    },
    golfBall: {
        img: 'golfBall.png',
        function: function() {
            save.items.tennisBall.multiplier *= 2
        },
        requirement: function() {
            return save.items.tennisBall.count >= 75
        },
        price: 750000000,

        name: 'Golf Ball',
        quote: '"Winnie can\'t even hold a golf club."',
        desc: 'Doubles tennis ball speed.'
    },
    rock: {
        img: 'rock.png',
        function: function() {
            save.items.tennisBall.multiplier *= 3
        },
        requirement: function() {
            return save.items.tennisBall.count >= 100
        },
        price: 5000000000,

        name: 'Rock',
        quote: '"Now this is more like it."',
        desc: 'Triples tennis ball speed.'
    },
    winniesFavoriteBall: {
        img: 'winniesFavoriteBall.png',
        function: function() {
            save.items.tennisBall.multiplier *= 3
        },
        requirement: function() {
            return save.items.tennisBall.count >= 125
        },
        price: 250000000000,

        name: 'Winnie\'s Favorite Ball',
        quote: '"Winnie LOVES this ball for some reason."',
        desc: 'Triples tennis ball speed.'
    },
    winniesOtherFavoriteBall: {
        img: 'winniesOtherFavoriteBall.png',
        function: function() {
            save.items.tennisBall.multiplier *= 3
        },
        requirement: function() {
            return save.items.tennisBall.count >= 150
        },
        price: 5000000000000,

        name: 'Winnie\'s Other Favorite Ball',
        quote: '"Winnie also loves this ball for some reason."',
        desc: 'Triples tennis ball speed.'
    },
    asher: {
        img: 'asher.png',
        function: function() {
            save.items.friend.multiplier *= 2
        },
        requirement: function() {
            return save.items.friend.count >= 10
        },
        price: 25000000,

        name: 'Asher',
        quote: '"A friendly pillow."',
        desc: 'Doubles friend speed.'
    },
    sasha: {
        img: 'sasha.png',
        function: function() {
            save.items.friend.multiplier *= 2
        },
        requirement: function() {
            return save.items.friend.count >= 25
        },
        price: 100000000,

        name: 'Sasha',
        quote: '"Demon"',
        desc: 'Doubles friend speed.'
    },
    kisa: {
        img: 'kisa.png',
        function: function() {
            save.items.friend.multiplier *= 2
        },
        requirement: function() {
            return save.items.friend.count >= 50
        },
        price: 750000000,

        name: 'Kisa',
        quote: '"Zero thoughts behind those eyes."',
        desc: 'Doubles friend speed.'
    },
    rodger: {
        img: 'rodger.png',
        function: function() {
            save.items.friend.multiplier *= 2
        },
        requirement: function() {
            return save.items.friend.count >= 75
        },
        price: 2500000000,

        name: 'Rodger',
        quote: '"Eddie\'s brother"',
        desc: 'Doubles friend speed.'
    },
    walter: {
        img: 'walter.png',
        function: function() {
            save.items.friend.multiplier *= 3
        },
        requirement: function() {
            return save.items.friend.count >= 100
        },
        price: 50000000000,

        name: 'Walter',
        quote: '"Walter Corp. endorsement."',
        desc: 'Triples friend speed.'
    },
    bruno: {
        img: 'bruno.png',
        function: function() {
            save.items.friend.multiplier *= 3
        },
        requirement: function() {
            return save.items.friend.count >= 125
        },
        price: 750000000000,

        name: 'Bruno',
        quote: '"Eddie, but insane."',
        desc: 'Triples friend speed.'
    },
    shadow: {
        img: 'shadow.png',
        function: function() {
            save.items.friend.multiplier *= 3
        },
        requirement: function() {
            return save.items.friend.count >= 150
        },
        price: 5000000000000,

        name: 'Shadow',
        quote: '"Very large."',
        desc: 'Triples friend speed.'
    },
    winnieWorkers: {
        img: 'winnieWorkers.png',
        function: function() {
            save.items.winnie.multiplier *= 2
        },
        requirement: function() {
            return save.items.winnie.count >= 10
        },
        price: 50000000,

        name: 'Winnie Workers',
        quote: '"Clone Winnies that are specifically made to be in the work force."',
        desc: 'Doubles Winnie speed.'
    },
    winnieComputerScientists: {
        img: 'winnieComputerScientists.png',
        function: function() {
            save.items.winnie.multiplier *= 2
            save.items.cursor.multiplier *= 3
        },
        requirement: function() {
            return save.items.winnie.count >= 25
        },
        price: 500000000,

        name: 'Winnie Computer Scientists',
        quote: '"Haha, nerd."',
        desc: 'Doubles Winnie speed<br> Triples Cursor Speed'
    },
    winnieOsteologists: {
        img: 'winnieOsteologists.png',
        function: function() {
            save.items.winnie.multiplier *= 2
            save.items.bone.multiplier *= 3
        },
        requirement: function() {
            return save.items.winnie.count >= 50
        },
        price: 10000000000,

        name: 'Winnie Osteologists',
        quote: '"Search for the highest quality bones."',
        desc: 'Doubles Winnie speed<br> Triples Bone Speed'
    },
    winnieAthletes: {
        img: 'winnieAthletes.png',
        function: function() {
            save.items.winnie.multiplier *= 2
            save.items.tennisBall.multiplier *= 3
        },
        requirement: function() {
            return save.items.winnie.count >= 75
        },
        price: 250000000000,

        name: 'Winnie Athletes',
        quote: '"The best players of any sport."',
        desc: 'Doubles Winnie speed<br> Triples Tennis Ball Speed'
    },
    winnieVeterinarians: {
        img: 'winnieVeterinarians.png',
        function: function() {
            save.items.winnie.multiplier *= 3
            save.items.friend.multiplier *= 3
        },
        requirement: function() {
            return save.items.winnie.count >= 100
        },
        price: 1000000000000,

        name: 'Winnie Veterinarians',
        quote: '"Will cure your pet no matter what."',
        desc: 'Triples Winnie speed<br> Triples Friend Speed'
    },
    winnieWinniologists: {
        img: 'winnieWinniologists.png',
        function: function() {
            save.items.cursor.multiplier *= 5
            save.items.bone.multiplier *= 5
            save.items.tennisBall.multiplier *= 5
            save.items.friend.multiplier *= 5
            save.items.winnie.multiplier *= 5
            save.items.reinforcedGloves.multiplier *= 5
        },
        requirement: function() {
            return save.items.winnie.count >= 125
        },
        price: 100000000000000,

        name: 'Winnie Winniologists',
        quote: '"The study of Winnies, that\'s definitely real."',
        desc: 'All item efficiency x5'

    },
    preciseGloves: {
        img: 'preciseGloves.png',
        function: function() {
            save.items.reinforcedGloves.multiplier *= 2
        },
        requirement: function() {
            return save.items.reinforcedGloves.count >= 10
        },
        price: 10000,

        name: 'Precise Gloves',
        quote: '"New studies have found a way to add a game-like aim assist to gloves making it easier to click on an objects weak point."',
        desc: 'Reinforced gloves efficiency x2'
    },
    aimAssist: {
        img: 'aimAssist.png',
        function: function() {
            save.items.reinforcedGloves.multiplier *= 4
        },
        requirement: function() {
            return save.items.reinforcedGloves.count >= 25
        },
        price: 100000,

        name: 'Aim Assist',
        quote: '"Plug in a controller and get a better advantage over clicking the Winnie Orb."',
        desc: 'Reinforced gloves efficiency x4'
    },
    hackedClient: {
        img: 'hackedClient.png',
        function: function() {
            save.items.reinforcedGloves.multiplier *= 4
        },
        requirement: function() {
            return save.items.reinforcedGloves.count >= 50
        },
        price: 1000000,

        name: 'Hacked Client',
        quote: '"Visit that one shady website and download some Winnie Accumulator hacks."',
        desc: 'Reinforced gloves efficiency x4'
    },
    modifiedHardware: {
        img: 'modifiedHardware.png',
        function: function() {
            save.items.reinforcedGloves.multiplier *= 4
        },
        requirement: function() {
            return save.items.reinforcedGloves.count >= 75
        },
        price: 10000000,

        name: 'Modified Hardware',
        quote: '"Learn how to create computer hardware to generate Winnie Orbs more efficiently."',
        desc: 'Reinforced gloves efficiency x4'
    },
    hiddenMilitaryTechnology: {
        img: 'hiddenMilitaryTechnology.png',
        function: function() {
            save.items.reinforcedGloves.multiplier *= 10
        },
        requirement: function() {
            return save.items.reinforcedGloves.count >= 100
        },
        price: 500000000,

        name: 'Hidden Military Technology',
        quote: '"Break into millitary bases for thier hidden equipment for faster and more efficient Winnie Accumulating."',
        desc: 'Reinforced gloves efficiency x10'

    },
    goldBar: {
        img: 'goldBar.png',
        function: function() {
            save.goldenWinniesAvailable = true
        },
        requirement: function() {
            return save.orbs >= 5000
        },
        price: 10000,

        name: 'Gold Bar',
        quote: '"Smear gold bars all over Winnie Orbs to give special effects."',
        desc: 'Unlocks Golden Winnies.'
    },
    liquidGold: {
        img: 'liquidGold.png',
        function: function() {
            save.goldenWinnieChance -= 10
        },
        requirement: function() {
            return save.orbs >= 50000
        },
        price: 100000,

        name: 'Liquid Gold',
        quote: '"Feed your Golden Winnies liquid gold to make them gold-er."',
        desc: 'Increases Golden Winnie spawn rate.'
    },
    luckyCherry: {
        img: 'luckyCherry.png',
        function: function() {
            save.gamblingUnlocked = true;
            updateToolbarButtons()
        },
        requirement: function() {
            return save.totalorbs >= 1000000
        },
        price: 10000000,

        name: 'Lucky Cherry',
        quote: '"Start your gambling addiction."',
        desc: 'Unlocks gambling.'
    },
    emptyBottle: {
        img: 'emptyBottle.png',
        function: function() {
            save.spellsUnlocked = true
            spellsCheck()
            save.flasks.current += 20
            updateSpellInfo()
            getAchievement('youreAWizardWinnie')
        },
        requirement: function() {
            return save.totalorbs >= 250000
        },
        price: 500000,

        name: 'Empty Bottle',
        quote: '"Buy some empty bottles to start your path to becoming a wizard"',
        desc: 'Unlocks spells.<br> +20 flasks'
    },
    largerFlasks: {
        img: 'largerFlasks.png',
        function: function() {
            save.flaskIncrease++
        },
        requirement: function() {
            return save.totalorbs >= 500000
        },
        price: 1000000,

        name: 'Larger Flasks',
        quote: '"Become rich in flasks."',
        desc: '+1 flasks every 30 seconds.'
    },
}

const achievementsStatic = {
    click: {
        secret: false,
        rare: false,
        name: 'Click',
        desc: 'Click the Winnie Orb.'
    },
    CRITICALHIT: {
        secret: false,
        rare: false,
        name: 'CRITICAL HIT',
        desc: 'Get a critical click.'
    },
    automatedWinnieClicking: {
        secret: false,
        rare: false,
        name: 'Automated Winnie Clicking',
        desc: 'Buy a Cursor.'
    },
    weShouldGoPlayTennis: {
        secret: false,
        rare: false,
        name: 'Lets go play tennis!',
        desc: 'Buy a Tennis Ball'
    },
    agressiveWinnieClicking: {
        secret: false,
        rare: false,
        name: 'Aggresive Winnie Clicking',
        desc: 'Buy a Reinforced Glove.'
    },
    efficientWinnieClicking: {
        secret: false,
        rare: false,
        name: 'Efficient Winnie Clicking',
        desc: 'Buy an upgrade.'
    },
    accurateWinnieClicking: {
        secret: false,
        rare: false,
        name: 'Accurate Winnie Clicking',
        desc: 'Buy a magnifying glass.'
    },
    endlessCycle: {
        secret: false,
        rare: false,
        name: 'And the endless cycle starts.',
        desc: 'Prestige for the first time.'
    },
    realOG: {
        secret: false,
        rare: false,
        name: 'Real OG',
        desc: 'Have selected orb as Eddie for 5 minutes.'
    },
    goneButNotForgotten: {
        secret: false,
        rare: false,
        name: 'Gone but not forgotten.',
        desc: 'Have selected orb as Shadow for 5 minutes.'   
    },
    youreAWizardWinnie: {
        secret: false,
        rare: false,
        name: 'You\'re a wizard Winnie.',
        desc: 'Unlock Spells.'
    },
    lazyWizard: {
        secret: false,
        rare: false,
        name: 'Lazy Wizard',
        desc: 'Use the Golden Eye spell to claim only one Golden Winnie.'
    },
    gamblingAddiction: {
        secret: false,
        rare: false,
        name: 'Gambling Addiction.',
        desc: 'Gamble 100 times.'
    },
    lucky: {
        secret: false,
        rare: false,
        name: 'Lucky!',
        desc: 'Click a Golden Winnie.'
    },
    lotteryWinner: {
        secret: false,
        rare: false,
        name: 'Lottery Winner',
        desc: 'Click 7 Golden Winnies.'
    },
    //RARE
    bigShot: {
        secret: false,
        rare: true,
        name: '[BIG SHOT]',
        desc: 'Click 77 Golden Winnies.'
    },
    trueGambler: {
        secret: false,
        rare: true,
        name: 'True Gambler',
        desc: 'Get a 10x multiplier from gambling.'
    },
    theWholeCollection: {
        secret: false,
        rare: true,
        name: 'Winnie Accumulator',
        desc: 'Buy at least one of every item and tool.'
    },
    completionist: {
        secret: false,
        rare: true,
        name: 'Completionist',
        desc: 'Buy every upgrade.'
    },
    completionistII: {
        secret: false,
        rare: true,
        name: 'Completionist II',
        desc: 'Complete every achievement.'
    },
    //SECRET
    cheatedWinnieOrbsAreAwful: {
        secret: true,
        rare: false,
        name: 'Cheated Winnie Orbs are awful.',
        desc: 'Unlock Developer Tools.'
    },
    loafCommunication: {
        secret: true,
        rare: false,
        name: 'Loaf Communication.',
        desc: 'Talk with DeBread.'
    },
    completionistIII: {
        secret: true,
        rare: false,
        name: 'Completionist III',
        desc: 'Complete every normal and secret achievement.'
    },
    aRealOne: {
        secret: true,
        rare: false,
        name: 'A Real One',
        desc: 'Play Winnie Accumulator in the presence of DeBread.'
    },
}

const save = JSON.parse(localStorage.getItem("WinnieAccumulatorSave")) ?? defaultSave
//---------SAVE FIXER---------//

/** 
 * @param {object} a
 * @param {object} b
 * @param {string[]} k
*/
const read = (sym => function(a, b, ...k) {    
    if (!k.some(it => typeof it !==  'string')) {
        throw new Error("must provide only string or number keys instead of \n  " + k + "\n(read)")
    }

    let res = sym, fallback = sym,
        pathA = a, pathB = b

    for (const cur of k) {
        res = pathA[cur] ?? sym
        fallback = pathB[cur] ?? sym

        pathA = res
        pathB = fallback
    } 

    if (res !== sym) {
        return res
    } else if (fallback !== sym) {
        return fallback
    } else {
        throw new Error("key path \n  " + k + "\nnot found in args (read)")
    }
})(Symbol())

/**
 * @param {object} a
 * @param {object} b
*/

function fillInto(a, b) {    
    if (typeof a !== 'object' || typeof b !== 'object') {
        throw new Error("a and b must be object, but got " + String(a) + " and " + String(b) + " (merge)")
    }
 
    for (const k in b) {
        if (typeof b[k] === 'object' && k in a) {
            fillInto(a[k], b[k])
        } else if (!(k in a)) {
            a[k] = b[k]
        }
    }
}
// read(localStorage.getItem("WinnieAccumulatorSave"), defaultSave)
fillInto(save, defaultSave)

//====================//


const modes = [
    'Winnie',
    'Eddie',
    'Walter',
    'Sasha',
    'Olive',
    'Junior',
    'Kisa',
    'Bruno',
    'Shadow',
    'Chewie',
    'Luna',
    'Basil',
    'Connie',
    'Asher',
    'CJ',
    'Fin',
    'Lola',
    'Phoebe',
    'Xander',
    'Thorn',
]

setInterval(autosave, 60000);

document.addEventListener('keydown',(event) => {
    if(event.key === 'S' && event.shiftKey) {
        saveData()
    }
})

function autosave() {
    if(save.settings.togglable.autosave) {
        saveData()
    }
}

function saveData() {
    localStorage.setItem("WinnieAccumulatorSave", JSON.stringify(save));
    console.log(`Autosaved ${formatNumber(save.orbs)} Orbs!`);
    createCenterNoti('Saved!', 'rgba(0, 0, 0, 0.5)')
}

function deletesave() {
    localStorage.removeItem("WinnieAccumulatorSave", JSON.stringify(save));
    window.location.reload();
}