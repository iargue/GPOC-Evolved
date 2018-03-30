// This module creates the PIXIJS rendering option that allows us to draw things to WebGL/Canvas
// This creates an app option that references the PIXIJS render object that we are using
export class renderer {
    constructor(canvas, height, width, backgroundColor) {
        if (canvas == "none") {
            this.app = new PIXI.Application(width, height, { backgroundColor: backgroundColor });
            this.view = this.app.view;
            this.stage = this.app.stage;
        }
    }
}
//# sourceMappingURL=renderer.game.js.map