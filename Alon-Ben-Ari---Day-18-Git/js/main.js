'use strict'

var ballHeight = 100
var ballWidth = 100



function onBallClick(elBall, maxDiameter) {

    var randomColor = getRandomColor()
    var randomInt = getRandomInt(20, 60)

    ballHeight += randomInt
    ballWidth += randomInt

    elBall.style.backgroundColor = randomColor

    const sum = ballHeight + ballWidth

    elBall.style.height = ballHeight + randomInt + 'px'
    elBall.style.width = ballWidth + randomInt + 'px'
    elBall.innerText = sum

    if (sum > maxDiameter) {
        ballHeight = 50
        ballWidth = 50
        elBall.style.height = 100 + 'px'
        elBall.style.width = 100 + 'px'
        elBall.innerText = '100'
    }
}

function onBalls() {

    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')

    onBallClick(elBall1, 400)
    onBallClick(elBall2, 300)
}

function reduceDiameter() {

    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')

    var randomInt = getRandomInt(20, 60)


    const sum = ballHeight + ballWidth
    if (sum > 200) {
        elBall1.style.height = ballHeight - randomInt + 'px'
        elBall2.style.height = ballHeight - randomInt + 'px'

        elBall1.style.width = ballWidth - randomInt + 'px'
        elBall2.style.width = ballWidth - randomInt + 'px'
 
    }


}