'use strict'

var clickCounter = 0
var ballHeight = 50
var ballWidth = 50
var gInterval

function onInIt() {

    clearInterval(gInterval)
    clickCounter = 0
    document.querySelector('h2 span').innerText = clickCounter
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.ball').style.backgroundColor = 'rgb(83, 241, 252)'
    document.querySelector('.ball2').style.backgroundColor = 'rgb(94, 234, 52)'
    document.querySelector('.ball').style.height = 100 + 'px'
    document.querySelector('.ball').style.width = 100 + 'px'
    document.querySelector('.ball').innerText = '100'
    document.querySelector('.ball2').style.height = 100 + 'px'
    document.querySelector('.ball2').style.width = 100 + 'px'
    document.querySelector('.ball2').innerText = '100'
    startTimer()
}

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
    clickCounter++
    document.querySelector('h2 span').innerText = clickCounter
}

function onBalls() {

    const elBall1 = document.querySelector('.ball')
    const elBall2 = document.querySelector('.ball2')

    onBallClick(elBall1, 500)
    onBallClick(elBall2, 400)
    clickCounter--
    document.querySelector('h2 span').innerText = clickCounter

}

function reduceDiameter() {
    var elBall1 = document.querySelector('.ball')
    var elBall2 = document.querySelector('.ball2')

    var rand = getRandomInt(20, 60)

    var size1 = parseInt(getComputedStyle(elBall1).width) - rand
    var size2 = parseInt(getComputedStyle(elBall2).width) - rand

    if (size1 < 100) size1 = 100
    if (size2 < 100) size2 = 100

    elBall1.style.width = size1 + 'px'
    elBall1.style.height = size1 + 'px'
    elBall1.innerText = size1 === 100 ? '100' : size1 * 2

    elBall2.style.width = size2 + 'px'
    elBall2.style.height = size2 + 'px'
    elBall2.innerText = size2 === 100 ? '100' : size2 * 2
    clickCounter++
    document.querySelector('h2 span').innerText = clickCounter

}

function onBallClickBackground() {
    var randomColor = getRandomColor()
    document.querySelector('body').style.backgroundColor = randomColor
    clickCounter++
    document.querySelector('h2 span').innerText = clickCounter
}

function startTimer() {

    var startTime = Date.now()
    clearInterval(gInterval)

    gInterval = setInterval(function () {
        var now = Date.now()
        var diff = now - startTime

        var secs = Math.floor(diff / 1000)
        var min = Math.floor(secs / 60)
        var secsForDisplay = secs % 60

        if (secsForDisplay < 10) secsForDisplay = '0' + secsForDisplay
        if (min < 10) min = '0' + min

        document.querySelector('.timer .min').innerText = min
        document.querySelector('.timer .sec').innerText = secsForDisplay
    }, 50)

}