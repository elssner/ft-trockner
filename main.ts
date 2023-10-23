input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Schaltwert += -5
    basic.showNumber(Schaltwert)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Schaltwert += 5
    basic.showNumber(Schaltwert)
})
let Schaltwert = 0
basic.showString("ft-trockner")
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
pins.digitalWritePin(DigitalPin.P0, 1)
Schaltwert = 60
loops.everyInterval(400, function () {
    _4digit.show(pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P2) < Schaltwert) {
        basic.setLedColor(0xff0000)
        motors.motorCommand(MotorCommand.Break)
    } else {
        basic.setLedColor(0x00ff00)
        motors.motorPower(95)
    }
})
