export function floatValue(min, max) {
  return Math.random() * (max - min) + min
}

export function integerValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function color() {
  return '#'+Math.floor(Math.random()*16777215).toString(16)
}
