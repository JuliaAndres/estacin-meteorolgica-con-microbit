input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    tempExt += input.temperature()
})
radio.setGroup(1)
let tempExt = 0
basic.forever(function () {
    basic.pause(2000)
    if (tempExt != 0) {
        basic.showString("" + (tempExt))
    }
})
