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
      var amp;
      p.setup = function(){
        p.createCanvas(window.innerWidth,window.innerHeight,p.WEBGL);
        var shorter = p.width < p.height ? p.width : p.height;
        var size = shorter / images.length;
        amp = size * 5;
        for(var i = 0; i < images.length; i++){
          images[i].setSize(size);
        }
      };
      var offset = 0;
      p.draw = function(){
        offset+=0.05;
        p.background(0,0,20);
        for(var i = 0; i < images.length; i++){
          p.push();
          var angle = ((360/ images.length) * i) + offset;
          var theta = p.radians(angle);
          var x = p.sin(theta) * amp;
          var y = ((p.height/images.length) * i) - p.height/2;
          var z = p.cos(theta) * amp;
          p.translate(x, y, z);
          p.texture(images[i].img);
          var b_size = images[i].size;
          p.rotateY(-offset/30);
          p.box(b_size*1.5, b_size*3, b_size*1.5);
          p.pop();
        }
      };
    };
  return sketch;
}


module.exports = MyCanvas;
