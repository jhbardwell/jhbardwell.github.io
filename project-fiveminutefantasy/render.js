const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let imagerender = function (pic){
  pic.onload = function(){
      ctx.drawImage(pic, 0, 0, canvas.width, canvas.height);
  }
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //imagerender(skyImage);
  imagerender(backgroundImage);
  //imagerender(midgroundImage);
  imagerender(foregroundImage);
  requestAnimationFrame(animate);
  }
  
  animate();



