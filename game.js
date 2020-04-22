
var c = document.createElement('canvas');
var ctx = c.getContext('2d');
c.width = 500;  // largura
c.height = 350; // altura
document.body.appendChild(c);        // extrutura

var perm = [];
while (perm.length < 255){
    while(perm.includes(val = Math.floor(Math.random()*255)));
    perm.push(val);
}

var lerp = (a,b,t) => a + (b-a) * (1-Math.cos(t*Math.PI))/2;
var noise = x=>{  
    x = x * 0.01 % 255;
    return lerp(perm[Math.floor(x)], perm[Math.ceil(x)], x - Math.floor(x));
}

var t = 0;
function loop() {
    t += 1;
    ctx.fillStyle= "#19f";                                   // cor azul
    ctx.fillRect(0,0,c.width,c.height);                 // A função fillRect() desenha um grande quadrado preto = fillRect(x, y, width, height)
    
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(0, c.height);
    for (let i = 0; i < c.width; i++)
        ctx.lineTo(i, c.height - noise(t + i) * 0,25);

    ctx.lineTo(c.width , c.height);
    ctx.fill();
    requestAnimationFrame(loop); // requestAnimationFrame ()  chama a sua rotina de renderização 
}

loop();
