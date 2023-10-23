input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Schaltwert += -5
    basic.showNumber(Schaltwert)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Schaltwert += 5
    basic.showNumber(Schaltwert)
})
let Lichtschranke = 0
let Schaltwert = 0
basic.showString("ft-trockner")
let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
pins.digitalWritePin(DigitalPin.P0, 1)
Schaltwert = 60
loops.everyInterval(400, function () {
    Lichtschranke = pins.analogReadPin(AnalogPin.P2)
    _4digit.show(Lichtschranke)
    if (Lichtschranke < Schaltwert) {
        basic.setLedColor(0xff0000)
        motors.motorCommand(MotorCommand.Break)
    } else {
        basic.setLedColor(0x00ff00)
        motors.motorPower(95)
    }
})
