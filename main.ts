radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        x = value
    } else if (name == "y") {
        y = value
        if (y > 3) {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 199)
        } else {
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 0)
        }
    }
})
let y = 0
let x = 0
radio.setGroup(10)
basic.forever(function () {
    serial.writeValue("x", x)
    serial.writeValue("y", y)
    basic.pause(1000)
})
