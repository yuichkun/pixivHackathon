class Image{
  constructor(img){
    this.img = img;
  }
  setPos(x, y){
    this.x = x;
    this.y = y;
  }
  setSize(size){
    this.size = size;
  }
  setSpeed(speed){
    this.speed = speed;
  }
}


module.exports = Image;
