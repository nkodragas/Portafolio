import Sprite from './Sprite.js'
import Scene from './Scene.js'
import * as Random from './Random.js'
import './RoundedRect.js'

class KongaScene extends Scene {
  
  constructor(){
    super()
    
    this.backgroundColor = "#000"
    this.containerColor = "#000"
    this.entities = []
    
    // Sprites:
    const characterImage = new Image()
    characterImage.onload = () => {
      const characterSize = { width: 33, height: 29 }
      const characterCount = 4
      const characterSprite = new Sprite(characterImage, Sprite.GeometryHorizontalLinear(characterSize.width, characterSize.height, characterCount))
        
      this.sprites = { ditto: characterSprite }
      this.main()
    }
    
    characterImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAdAgMAAAAWQyy/AAAADFBMVEX///+4YOA4ODj4+PhASPNeAAAAAXRSTlMAQObYZgAAAStJREFUeF6l08FqhEAMBuBhbk6fYyj6Pgmul3pZEN9hWV8i9FgvC3X6PELpe2zP9Y/pyCLLFprLoP83STzo/lv+/ZEoGGwMw10RacmePmML4PfOjyqev6WGKDs/Kth40QiEXInxLPzxle+WHUS8kgoi6vU8zzaobIQB31R4QrU4T9RVKl5ngpheaBP1KlmWLlU4z0iCJioORKxCmzm5nDSJAOx0jxthdEBwzOLIkJyFIEGgQpvVqxSMhVRxQKCiEYhozQtbPV/Fmx6iJE5ErYkWgi8mlOYkEiVZxQRpglUojSZB9wJUTDoxkTeMN4J3ot0JT79CTMifRUmUEtV5803EJcD3+5ScS+MmML+feHBhCcKSWOVvw9s07H+LTdwvL/1Fp9yvaggJUx/WD0e0wREEScedAAAAAElFTkSuQmCC"
  }
  
  sizeDidChange(size){
    this.context.imageSmoothingEnabled = false
  }
  
  createEntity(){
    const characterSprite = this.sprites.ditto
    const firstAnimationFrame = characterSprite.frames[0]
    
    const direction = Random.integerValue(0, 1)
    const scale = Random.integerValue(4, 16)
    const opacity = Random.floatValue(0.1, 1.0)
    const translationX = Random.integerValue(400, 1000) * (direction ? 1 : -1)
    
    const containerWidth = this.size.width, containerHeight = this.size.height
    const intrinsicSize = { width: firstAnimationFrame.width, height: firstAnimationFrame.height }
    
    const size = { width: intrinsicSize.width * scale, height: intrinsicSize.height * scale }
    const origin = { x: (direction ? -size.width : containerWidth), y: Random.integerValue(0, containerHeight - size.height) }
    
    return {
      sprite: characterSprite,
      animationFrameDuration: .085,
      animationFrame: 0,
      time: 0.0,
      speed: { x: translationX, y: 0 },
      size,
      origin,
      opacity,
      intrinsicSize
    }
  }
  
  render(){
    const context = this.context
    const { width, height } = this.size
    
    context.globalAlpha = 1
    
    context.fillStyle = this.backgroundColor
    context.fillRect(0, 0, width, height)
    
    const padding = 32
    const radius = 12
    
    if (width > radius * 2 && height > radius * 2) {
      context.roundedRect(padding, padding, width - 2 * padding, height - 2 * padding, 12)
      context.fillStyle = this.containerColor
      context.fill();
    }
    
    for (const entity of this.entities) {
      const { sprite, animationFrame, origin, size, opacity } = entity
      
      context.globalAlpha = opacity
      sprite.drawFrame(context, animationFrame, origin.x, origin.y, size.width, size.height)
    }
  }
  
  update(dt){
    this.elapsedTime += dt
    
    // Spawn:
    if ((this.elapsedTime >= .4)) {
      this.elapsedTime = 0
      
      this.backgroundColor = Random.color()
      this.containerColor = Random.color()
      
      var entitiesToBeAdded = 1
      while (entitiesToBeAdded--) {
        this.entities.push(this.createEntity())
      }
    }
    
    const containerWidth = this.size.width, containerHeight = this.size.height
    
    // Protagonist:
    let protagonist = this.protagonist
    
    if (!protagonist) {
      protagonist = this.createEntity()
      protagonist.speed.x = 0
      protagonist.opacity = 1
      
      this.entities.push(protagonist)
      this.protagonist = protagonist
    }
    
    if (protagonist) {
      const maximumImageSize = { width: Math.min(containerWidth * .8, 600), height: Math.min(containerHeight * .8, 600) }
      const size = protagonist.intrinsicSize
      
      const xScale = maximumImageSize.width / size.width
      const yScale = maximumImageSize.height / size.height
      const minScale = Math.min(xScale, yScale)
      const scaledSize = { width: size.width * minScale, height: size.height * minScale }
      
      protagonist.size = scaledSize
      protagonist.origin.x = Math.round((containerWidth - scaledSize.width) * .5)
      protagonist.origin.y = Math.round((containerHeight - scaledSize.height) * .5)
    }
    
    // Update sprites:
    let offscreenEntitiesIndexes = []
    let idx = 0
    
    for (const entity of this.entities) {
      entity.time += dt
      
      // Cycle animation:
      if (entity.time >= entity.animationFrameDuration) {
        let targetFrame = entity.animationFrame + 1
        
        entity.time = 0
        entity.animationFrame = (targetFrame < entity.sprite.frames.length) ? targetFrame : 0
      }
      
      // Translate:
      if (entity.speed.x != 0) {
        entity.origin.x += (entity.speed.x * dt) | 0
      }
      
      // Remove off screen:
      if (entity.origin.x > containerWidth || entity.origin.x <= -entity.size.width) {
        offscreenEntitiesIndexes.push(idx)
      }
      
      idx += 1
    }
    
    // Remove off-screen:
    for (const idx of offscreenEntitiesIndexes) {
      this.entities.splice(idx, 1)
    }
  }
   
}

export default KongaScene
