'use strict'

var ballHeight = 100
var ballWidth = 100

function onBallClick() {
    const elBall = document.querySelector('.ball')
    ballHeight += 50
    elBall.style.height = ballHeight + 50 + 'px'
    ballWidth += 50
    elBall.style.width = ballWidth + 50 + 'px'
    const sum = ballHeight +ballWidth
    elBall.innerText = sum
}