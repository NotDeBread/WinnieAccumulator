function updateStats() {
    doge('statTotalWinnieOrbs').innerText = `Total Winnie Orbs: ${formatNumber(Math.round(save.totalorbs))}`
    doge('statWinnieOrbsSpent').innerText = `Winnie Orbs Spent: ${formatNumber(Math.round(save.stats.orbsSpent))}`
    doge('statTimesClicked').innerText = `Times Clicked: ${formatNumber(Math.round(save.stats.timesClicked))}`
    doge('statItemsBought').innerText = `Items Bought: ${save.stats.itemsBought}`
    doge('statCritChance').innerText = `Critical Click Chance: ${DeBread.round(save.critChance, 3)}`
    doge('statCriticalClickMultiplier').innerText = `WPC Critical Click Multiplier: ${DeBread.round(save.critClickMultiplier, 3)}`
    doge('statgoldenWinnieChance').innerText = `Golden Winnie Chance: ${save.goldenWinnieChance}`
    doge('statgoldenWinniesSpawned').innerText = `Golden Winnies Spawned: ${save.stats.goldenWinniesSpawned}`
    doge('statgoldenWinniesClicked').innerText = `Golden Winnies Clicked: ${save.stats.goldenWinniesClicked} (${Math.round((save.stats.goldenWinniesClicked / save.stats.goldenWinniesSpawned) * 100)}%)`
    doge('statTimesGambled').innerText = `Times Gambled: ${save.timesGambled}`
    doge('statUpgradesBought').innerText = `Upgrades Bought: ${save.stats.upgradesBought} / ${Object.keys(upgrades).length}`
}

function updateStatUpgrades() {
    doge('statUpgrades').innerHTML = ''
    for(let upgrade in save.upgrades) {
        if(save.upgrades[upgrade].bought) {
            const upgradeImg = document.createElement('img')
            upgradeImg.src = `media/upgrades/${upgrade}.png`
            doge('statUpgrades').appendChild(upgradeImg)

            upgradeImg.addEventListener(('mouseenter'), () => {
                displayTooltip(upgrades[upgrade].name, upgrades[upgrade].quote, `media/upgrades/${upgrades[upgrade].img}`, upgrades[upgrade].desc, false, false, false, 100)
            })

            upgradeImg.addEventListener(('mouseleave'), () => {
                hideTooltip()
            })
        }
    }
}