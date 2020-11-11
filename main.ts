sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.powerUp.play()
    Fish.setPosition(randint(10, 160), randint(10, 120))
    info.startCountdown(3)
})
let Fish: Sprite = null
scene.setBackgroundColor(10)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . f . . . 
    . . f e f . . . . . . f e f . . 
    . f e 3 f . . . . . . f 3 e f . 
    . f e 3 f . . . . . . f 3 e f . 
    f e e e e f f f f f f e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e f f f f e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    f e f e f e e f f e e f e f e f 
    f e e e e f f e e f f e e e e f 
    f e e e e e e e e e e e e e e f 
    f e e e e e e e e e e e e e e f 
    . f e e e e e e e e e e e e f . 
    . . f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
Fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . f d b d b d f . . . 
    . . . . . . f f f f f d f . . . 
    . . . . . f 6 6 6 6 6 f f . . . 
    . . . . f e f 6 6 6 6 6 f . . . 
    . . . f e e e f 6 6 6 6 6 f . . 
    . . f e e e e e f 6 6 6 6 f f f 
    . f e e e e e e f 6 f 6 6 6 6 f 
    . f e e e e e e f 6 f 6 f 6 6 f 
    f e e e e f e e f 6 6 6 6 6 6 f 
    f e e e e e e e f 6 6 6 6 6 6 f 
    . f e e e e e f 6 6 6 f 6 f f f 
    . . f f f e f 6 6 6 f 6 6 f . . 
    . . . . . f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
Fish.startEffect(effects.coolRadial)
mySprite.startEffect(effects.warmRadial)
