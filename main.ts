radio.onReceivedNumber(function (receivedNumber) {
    potato = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    potato = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
let potato = 0
radio.setGroup(1)
potato = -1
basic.forever(function () {
    if (potato > 0) {
        potato += -1
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . # # # .
            . . . . .
            `)
    }
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        radio.sendNumber(-2)
        music.play(music.stringPlayable("C5 F C5 F C5 F - - ", 500), music.PlaybackMode.UntilDone)
        potato = -1
    }
    if (potato == -1) {
        basic.clearScreen()
    }
    if (potato == -2) {
        basic.showIcon(IconNames.Happy)
    }
})
