let Player: game.LedSprite = null
Player = game.createSprite(2, 4)
let Beam3: game.LedSprite = null
let Beam2: game.LedSprite = null
let Beam1: game.LedSprite = null
let Beam0: game.LedSprite = null
let Enemy: game.LedSprite = null
let EnemyPosition = 0
let Timer = 900
let Score = 0

function Game () {
    while (true) {
        EnemyPosition = randint(0, 4)
        Enemy = game.createSprite(EnemyPosition, 0)
        for (let index = 0; index < 5; index++) {
            basic.pause(Timer)
            Enemy.change(LedSpriteProperty.Y, 1)
            if (Player.isTouching(Enemy)) {
                EndGame()
            }
        }
        if (Enemy.isDeleted()) {
            Enemy.delete()
        } else {
            EndGame()
        }
    }
}

function Shot () {
    Beam0 = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    Beam1 = game.createSprite(Player.get(LedSpriteProperty.X), 2)
    Beam2 = game.createSprite(Player.get(LedSpriteProperty.X), 1)
    Beam3 = game.createSprite(Player.get(LedSpriteProperty.X), 0)
    basic.pause(650)
    Beam0.delete()
    Beam1.delete()
    Beam2.delete()
    Beam3.delete()
}

function EndGame() {
    basic.showString("GG Score " + Score)
    control.reset()
}

input.onPinPressed(TouchPin.P0, function () {
    Game()
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.AB, function () {
    if (Enemy !== null) {
        if (Player.get(LedSpriteProperty.X) == Enemy.get(LedSpriteProperty.X)) {
            Score += 1
            Enemy.delete()
        }
        Shot()
    }
})

basic.forever(function () {
    while (true) {
        basic.pause(Timer)
        Timer += -5
    }
})
