function MyCanvas(){
  var sketch = function(p){
      p.setup = function(){
        p.createCanvas(window.innerWidth,window.innerHeight,p.WEBGL);
      }
      var offset = 0;
      p.draw = function(){
        p.background(0);
        p.normalMaterial();
        p.noStroke();
        p.push();
        p.rotateY(offset);
        offset+=0.1;
        console.log(offset);
        p.rotateX(-0.9);
        p.box(100);
        p.pop();

        p.translate(-400, 500, 0);
        p.push();
        p.rotateZ(frameCount * 0.02);
        rotateX(frameCount * 0.02);
        rotateY(frameCount * 0.02);
        ambientMaterial(250);
        torus(80, 20, 64, 64);
        pop();


      };
    };
  return sketch;
}


module.exports = MyCanvas;
