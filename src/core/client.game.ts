
import {renderer} from '../renderer/renderer.game'
import {options} from '../options/options.game'

var gameOptions = new options(false)
gameOptions.core.renderer = new renderer('none', window.innerWidth, window.innerWidth, '0x009900')

console.log(gameOptions)

document.body.appendChild(gameOptions.core.renderer.view)
let circle = new PIXI.Graphics()
circle.beginFill(0x5cafe2)
circle.drawCircle(0, 0, 80)
circle.x = 320
circle.y = 180
gameOptions.core.renderer.stage.addChild(circle)

