let _4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
pins.digitalWritePin(DigitalPin.P0, 1)
loops.everyInterval(400, function () {
    _4digit.show(pins.analogReadPin(AnalogPin.P2))
    if (pins.analogReadPin(AnalogPin.P2) < 60) {
        basic.setLedColor(0xff0000)
        motors.motorCommand(MotorCommand.Break)
    } else {
        basic.setLedColor(0x00ff00)
        motors.motorPower(95)
    }
})
