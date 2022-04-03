class Sprite {
  
  constructor(image, frames){
    const width = image.width, height = image.height
  
    let canvas = document.createElement("canvas")
    canvas.width = width
    canvas.height = height
    
    let context = canvas.getContext("2d")
    context.drawImage(image, 0, 0)
    
    this.canvas = canvas
    this.context = context
    this.frames = frames
  }
  
  drawFrame(ctx, frame, dx, dy, targetWidth, targetHeight){    
    const { x, y, width, height } = this.frames[frame]
    
    dx |= 0
    dy |= 0
    targetWidth |= width
    targetHeight |= height
    
    ctx.drawImage(this.canvas, x, y, width, height, dx, dy, targetWidth, targetHeight)
  } 
}


Sprite.GeometryHorizontalLinear = (width, height, count) => {
  let frames = [];
  
  for (var idx = 0; idx < count; idx += 1) {
    var frame = { x: (width * idx), y: 0, width: width, height: height }
    frames.push(frame)
  }
  
  return frames
}

export default Sprite
