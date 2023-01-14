controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart2 = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . . . . . 
        . 1 1 . . . . . . . . d . . . . 
        . 2 1 e e e e e e e e d d . . . 
        . 1 1 . . . . . . . . d . . . . 
        . 2 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile, mySprite3.x, mySprite3.y)
    myDart2.throwDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . d d . . . . . . . . . 
        . . . . . e d d . . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e d d d . . . . . . . 
        . . . . . e d d . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile, mySprite.x, mySprite.y)
    myDart.throwDart()
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 100)
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 9 9 f f f . . . . 
        . . . f f f 9 9 9 9 f f f . . . 
        . . f f f 9 9 9 9 9 9 f f f . . 
        . . f f 9 9 9 9 9 9 9 9 9 f . . 
        . . f 9 9 f f f f f 9 9 9 f . . 
        . . f f f f 9 9 9 9 f f f f . . 
        . f f 9 f 9 f 9 9 f 9 f 9 f f . 
        . f 9 9 9 9 f 9 9 f 9 9 9 9 f . 
        . . f 9 9 9 9 9 9 9 9 9 9 f . . 
        . . . f 9 9 9 f f 9 9 9 f . . . 
        . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
        . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
        . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 140), randint(0, 160))
    mySprite2.follow(mySprite, 30)
    info.changeScoreBy(1)
    if (info.score() == 10) {
        tiles.setTilemap(tilemap`level2`)
        mySprite3 = sprites.create(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f e e f f f . . . . 
            . . . f f f e e e e f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e e e e e e e e e f . . 
            . . f e e f f f f f f e e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f 4 f 4 4 f 4 f e f f . 
            . f e e 4 4 f 4 4 f 4 4 e e f . 
            . . f e e 4 4 4 4 4 4 e e f . . 
            . . . f e e 4 f f 4 e e f . . . 
            . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
            . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
            . . 4 4 f 6 6 6 6 6 6 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `, SpriteKind.Player)
        mySprite3.follow(mySprite, 70)
    }
    if (info.score() == 20) {
        tiles.setTilemap(tilemap`level3`)
    }
    if (info.score() == 30) {
        tiles.setTilemap(tilemap`level4`)
    }
    if (info.score() == 40) {
        tiles.setTilemap(tilemap`level5`)
    }
    if (info.score() == 50) {
        tiles.setTilemap(tilemap`level6`)
    }
    if (info.score() == 60) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let myDart: Dart = null
let mySprite3: Sprite = null
let myDart2: Dart = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    8888.....88....888....888...8888.
    867788..8768..86768..8678.887768.
    8767768.877788676768877788677678.
    87767768676778776778776786776778.
    .877876667767877677876778678778..
    .867786686766867676866766687768..
    ..8666868867688686886768686668...
    .88866688888888888888888866688...
    8777768866666666666666668886688..
    86767768666666666666666688677778.
    .8776678666666666666666686776768.
    ..87766866666666666666668766778..
    ..8888886666666666666666866778...
    .86776886666666666666666888888...
    8677776866666666666666668867768..
    87666688666666666666666686777768.
    86777768666666666666666688666678.
    .8677688666666666666666686777768.
    ..88888866666666666666668867768..
    ..8776686666666666666666888888...
    .87766786666666666666666866778...
    8676776866666666666666668766778..
    87777688666666666666666686776768.
    .8866888666666666666666688677778.
    ..88666888888888888888888666888..
    ..8666868676886868867688686668...
    .867786667668676768667686687768..
    .877876877678776778767766678778..
    87767768767787767787767686776778.
    876776887778867676887778.8677678.
    867788.8768..86768..8678..887768.
    8888...888....888....88.....8888.
    .................................
    `)
scene.setBackgroundColor(9)
game.showLongText("god of war 2", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 4 4 f f f . . . . 
    . . . f f f 4 2 4 4 f f f . . . 
    . . f f f 4 4 4 2 4 4 f f f . . 
    . . f f 4 4 4 4 4 2 4 4 4 f . . 
    . . f 4 4 f f f f f 2 4 4 f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f 4 f 4 4 f 4 f e f f . 
    . f e e 4 4 f 4 4 f 4 4 e e f . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . . f e e 4 f f 4 e e f . . . 
    . . 4 4 f d d e e 4 4 f 4 4 . . 
    . . 4 4 f d d 4 4 4 4 f 4 4 . . 
    . . 4 4 f 4 d d 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 9 9 f f f . . . . 
    . . . f f f 9 9 9 9 f f f . . . 
    . . f f f 9 9 9 9 9 9 f f f . . 
    . . f f 9 9 9 9 9 9 9 9 9 f . . 
    . . f 9 9 f f f f f f 9 9 f . . 
    . . f f f f 9 9 9 9 f f f f . . 
    . f f 9 f 9 f 9 9 f 9 f 9 f f . 
    . f 9 9 9 9 f 9 9 f 9 9 9 9 f . 
    . . f 9 9 9 9 9 9 9 9 9 9 f . . 
    . . . f 9 9 9 f f 9 9 9 f . . . 
    . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
    . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
    . . 9 9 f 9 9 9 9 9 9 f 9 9 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
info.setLife(7)
mySprite2.follow(mySprite, 30)
mySprite.setPosition(5, 15)
forever(function () {
    while (true) {
        pause(1000)
        mySprite2.x = mySprite2.x + 10
    }
})
forever(function () {
    while (true) {
        pause(1000)
        mySprite2.x = mySprite2.x + 2
    }
})
forever(function () {
    mySprite2.setFlag(SpriteFlag.StayInScreen, true)
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
})
