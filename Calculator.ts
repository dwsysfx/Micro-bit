let Num1 = 0
let Num2 = 0
let Sign = 0
let Stage = 0

basic.forever(function() {
    // Reset the controls if exceeded.
    if (Sign == 4) {
        Sign = 0
    }
    if (Sign == -1) {
        Sign = 0
    }
    if (Stage >= 4) {
        control.reset();
    }

    // Sign Select
    while (Stage == 1) {
        if (Sign == 0) {
            basic.showString('+')
        }
        if (Sign == 1) {
            basic.showString('-')
        }
        if (Sign == 2) {
            basic.showString('x')
        }
        if (Sign == 3) {
            basic.showString('/')
        }
    }

    // Calculation
    while (Stage == 3) {
        if (Sign == 0) {
            basic.showNumber(Num1 + Num2)
        }
        if (Sign == 1) {
            basic.showNumber(Num1 - Num2)
        }
        if (Sign == 2) {
            basic.showNumber(Num1 * Num2)
        }
        if (Sign == 3) {
            basic.showNumber(Num1 / Num2)
        }
    }
})

input.onButtonPressed(Button.A, function() {
    if (Stage == 0) {
        Num1 += 1
        basic.showNumber(Num1)
        basic.pause(250)
        basic.clearScreen()
    }
    if (Stage == 1) {
        Sign += 1
    }
    if (Stage == 2) {
        Num2 += 1
        basic.showNumber(Num2)
        basic.pause(250)
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.B, function () {
    if (Stage == 0) {
        Num1 -= 1
        basic.showNumber(Num1)
        basic.pause(250)
        basic.clearScreen()
    }
    if (Stage == 1) {
        Sign -= 1
    }
    if (Stage == 2) {
        Num2 -= 1
        basic.showNumber(Num2)
        basic.pause(250)
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.AB, function() {
    Stage += 1
})
