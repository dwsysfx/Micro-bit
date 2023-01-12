let player = game.createSprite(2, 4)
let waitTime = 500
let isAlive = true
let score = 0

input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})

input.onButtonPressed(Button.AB, function () {
    while (isAlive == true) {
        let pointX = randint(0, 4)
        let apple = game.createSprite(pointX, 0)
        for (let index = 0; index < 5; index++) {
            basic.pause(waitTime)
            apple.change(LedSpriteProperty.Y, 1)
        }
        if (player.isTouching(apple)) {
            apple.delete()
            score = score + 1
            if (score == 5) {
                waitTime = 400 
            } else if (score == 7) {
                waitTime = 350
            } else if (score == 10) {
                waitTime = 300
            } else if (score == 15) {
                waitTime = 250
            }
        } else {
            isAlive = false
            apple.delete()
            player.delete()
            basic.showString("GG Score " + score)
            control.reset()
        }
    }
})
