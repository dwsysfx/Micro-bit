let Num = false
game.setScore(0)
game.setLife(3)
basic.showString('<or>')
Game()

function Game(){
    if (randint(0, 1) == 0){
        Num = false
    } else {
        Num = true
    }
}

input.onButtonPressed(Button.A, function(){
    if (Num == true){
        game.addScore(1)
        Game()
    } else {
        game.removeLife(1)
        Game()
    }
})
input.onButtonPressed(Button.B, function(){
    if (Num == true){
        game.removeLife(1)
        Game()
    } else {
        game.addScore(1)
        Game()
    }
})
input.onButtonPressed(Button.AB, function(){
    game.showScore()
})
