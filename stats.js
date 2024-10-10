function updateStats() {
    doge('statTotalWinnieOrbs').innerText = `${formatNumber(Math.round(save.totalorbs))}`
    doge('statWinnieOrbsSpent').innerText = `${formatNumber(Math.round(save.stats.orbsSpent))}`
    doge('statTimesClicked').innerText = `${formatNumber(Math.round(save.stats.timesClicked))}`
    doge('statItemsBought').innerText = `${save.stats.itemsBought}`
    doge('statCritChance').innerText = `${DeBread.round(save.critChance, 3)}`
    doge('statCriticalClickMultiplier').innerText = `${DeBread.round(save.critClickMultiplier, 3)}`
    doge('statgoldenWinnieChance').innerText = `${save.goldenWinnieChance}`
    doge('statgoldenWinniesSpawned').innerText = `${save.stats.goldenWinniesSpawned}`
    doge('statgoldenWinniesClicked').innerText = `${save.stats.goldenWinniesClicked} (${Math.round((save.stats.goldenWinniesClicked / save.stats.goldenWinniesSpawned) * 100)}%)`
    doge('statTimesGambled').innerText = `${save.timesGambled}`
    doge('statUpgradesBought').innerText = `${save.stats.upgradesBought} / ${Object.keys(upgrades).length}`
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