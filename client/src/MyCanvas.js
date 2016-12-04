var Image = require('./Image');
var images = [];

function MyCanvas(imgURLs){
  var sketch = function(p){

      p.preload = function(){
        for(var i = 0; i < imgURLs.length; i++){
          var path = 'http://localhost:1290/image?url=' + imgURLs[i];
          // var path = 'http://localhost:1290/image?url=https://i1.pixiv.net/c/150x150/img-master/img/2016/12/04/09/52/00/60228332_p0_master1200.jpg';
          var img = p.loadImage(path);
          images.push(new Image(img));
        }
      };
      p.setup = function(){
        p.createCanvas(window.innerWidth,window.innerHeight,p.WEBGL);
        var shorter = p.width < p.height ? p.width : p.height;
        for(var i = 0; i < images.length; i++){
          var x = (p.width / imgURLs.length) * i;
          var y = (p.height / imgURLs.length) * i;
          images[i].setPos(x, y);
          images[i].setSize((shorter / (images.length - i)) * 1.4);
          images[i].setSpeed(p.random(0.002, 0.01));
        }


      };
      p.draw = function(){
        p.background(230,230,255);
        for(var i = 0; i < images.length; i++){
          p.texture(images[i].img);
          p.push();
          var speed = images[i].speed;
          p.rotateZ(p.frameCount * speed);
          p.rotateX(p.frameCount * speed);
          p.rotateY(p.frameCount * speed);
          p.translate(images[i].x,images[i].y,0);
          var b_size = images[i].size;
          p.box(b_size, b_size, b_size);
          p.pop();
        }
      };
    };
  return sketch;
}


module.exports = MyCanvas;
