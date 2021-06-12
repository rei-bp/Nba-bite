
console.log('welcome to the space jam')

module.exports = (stats) => {
    const statsStr = stats.data.data
    const avgContainer = document.querySelector('.avgContainer')
    

    const newDivRow = document.createElement("div")
    newDivRow.className = "statRow newRow"
    avgContainer.appendChild(newDivRow)


    
    const newDiv1 = document.createElement("div")
    const newDiv2 = document.createElement("div")
    const newDiv3 = document.createElement("div")
    const newDiv4 = document.createElement("div")
    const newDiv5 = document.createElement("div")
    const newDiv6 = document.createElement("div")
    const newDiv7 = document.createElement("div")
    const newDiv8 = document.createElement("div")
    const newDiv9 = document.createElement("div")
    const newDiv10 = document.createElement("div")
    const newDiv11 = document.createElement("div")
    const newDiv12 = document.createElement("div")
    const newDiv13 = document.createElement("div")
    const newDiv14 = document.createElement("div")
    const newDiv15 = document.createElement("div")
    const newDiv16 = document.createElement("div")
    const newDiv17 = document.createElement("div")
    const newDiv18 = document.createElement("div")
    const newDiv19 = document.createElement("div")
    const newDiv20 = document.createElement("div")
    const newDiv21 = document.createElement("div")
    

    newDivRow.appendChild(newDiv1)
    newDivRow.appendChild(newDiv2)
    newDivRow.appendChild(newDiv3)
    newDivRow.appendChild(newDiv4)
    newDivRow.appendChild(newDiv5)
    newDivRow.appendChild(newDiv6)
    newDivRow.appendChild(newDiv7)
    newDivRow.appendChild(newDiv8)
    newDivRow.appendChild(newDiv9)
    newDivRow.appendChild(newDiv10)
    newDivRow.appendChild(newDiv11)
    newDivRow.appendChild(newDiv12)
    newDivRow.appendChild(newDiv13)
    newDivRow.appendChild(newDiv14)
    newDivRow.appendChild(newDiv15)
    newDivRow.appendChild(newDiv16)
    newDivRow.appendChild(newDiv17)
    newDivRow.appendChild(newDiv18)
    newDivRow.appendChild(newDiv19)
    newDivRow.appendChild(newDiv20)
    newDivRow.appendChild(newDiv21)

    newDiv1.className = "year"
    newDiv2.className = "min"
    newDiv3.className = "gp"
    newDiv4.className = "fgm"
    newDiv5.className = "fga"
    newDiv6.className = "fg3m"
    newDiv7.className = "fg3a"
    newDiv8.className = "ftm"
    newDiv9.className = "fta"
    newDiv10.className = "oreb"
    newDiv11.className = "dreb"
    newDiv12.className = "reb"
    newDiv13.className = "ast"
    newDiv14.className = "stl"
    newDiv15.className = "blk"
    newDiv16.className = "tov"
    newDiv17.className = "pf"
    newDiv18.className = "pts"
    newDiv19.className = "fg-pct"
    newDiv20.className = "fg3-pct"
    newDiv21.className = "ft-pct"

    newDiv1.innerText = `${statsStr.season}`
    newDiv2.innerText =`${statsStr.min}`
    newDiv3.innerText =`${statsStr.games_played}`
    newDiv4.innerText =`${statsStr.fgm}`
    newDiv5.innerText =`${statsStr.fga}`
    newDiv6.innerText =`${statsStr.fg3m}`
    newDiv7.innerText =`${statsStr.fg3a}`
    newDiv8.innerText =`${statsStr.ftm}`
    newDiv9.innerText =`${statsStr.fta}`
    newDiv10.innerText =`${statsStr.oreb}`
    newDiv11.innerText =`${statsStr.dreb}`
    newDiv12.innerText = `${statsStr.reb}`
    newDiv13.innerText =`${statsStr.ast}`
    newDiv14.innerText =`${statsStr.stl}`
    newDiv15.innerText =`${statsStr.blk}`
    newDiv16.innerText =`${statsStr.turnover}`
    newDiv17.innerText =`${statsStr.pf}`  
    newDiv18.innerText =`${statsStr.pts}`
    newDiv19.innerText =`${statsStr.fg_pct}`
    newDiv20.innerText =`${statsStr.fg3_pct}`
    newDiv21.innerText =`${statsStr.ft_pct}`

}

