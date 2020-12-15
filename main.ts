input.onButtonPressed(Button.A, function () {
    brightness += -1
    if (brightness < 0) {
        brightness = 0
    }
    basic.showNumber(brightness)
    pins.analogWritePin(AnalogPin.P0, power)
})
input.onButtonPressed(Button.B, function () {
    brightness += 1
    if (brightness > 9) {
        brightness = 9
    }
    basic.showNumber(brightness)
    pins.analogWritePin(AnalogPin.P0, power)
})
let power = 0
let brightness = 0
let min_power = 100
let max_power = 1023
let power_step = Math.idiv(max_power - min_power, 9)
brightness = 0
basic.showNumber(brightness)
basic.forever(function () {
    if (brightness == 0) {
        power = 0
    } else {
        power = min_power + brightness * power_step
    }
})
