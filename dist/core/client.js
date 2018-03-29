let renderer = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor: 0x009900 });
document.body.appendChild(renderer.view);
let circle = new PIXI.Graphics();
circle.beginFill(0x5cafe2);
circle.drawCircle(0, 0, 80);
circle.x = 320;
circle.y = 180;
renderer.stage.addChild(circle);
