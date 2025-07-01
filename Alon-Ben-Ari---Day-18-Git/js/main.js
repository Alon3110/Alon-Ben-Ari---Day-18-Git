'use strict'

var ballHeight = 50
var ballWidth = 50



function onBallClick() {

    var randomInt = getRandomInt(20, 60)
    const elBall = document.querySelector('.ball')
    ballHeight += randomInt
    ballWidth += randomInt

    const sum = ballHeight + ballWidth

    elBall.style.height = ballHeight + randomInt + 'px'
    elBall.style.width = ballWidth + randomInt + 'px'
    elBall.innerText = sum

    if (sum > 400) {
        ballHeight = 50
        ballWidth = 50
        elBall.style.height = 100 + 'px'
        elBall.style.width = 100 + 'px'
        elBall.innerText = '100'
    }
}