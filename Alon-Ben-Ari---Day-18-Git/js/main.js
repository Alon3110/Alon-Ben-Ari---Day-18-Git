'use strict'

var ballHeight = 50
var ballWidth = 50

function onBallClick() {

    const elBall = document.querySelector('.ball')
    ballHeight += 50
    ballWidth += 50
    const sum = ballHeight + ballWidth

    elBall.style.height = ballHeight + 50 + 'px'
    elBall.style.width = ballWidth + 50 + 'px'
    elBall.innerText = sum

    if (sum > 400) {
        ballHeight = 50
        ballWidth = 50
        elBall.style.height = 100 + 'px'
        elBall.style.width = 100 + 'px'
        elBall.innerText = '100'
    }
}