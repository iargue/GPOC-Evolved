//This module declares the options and variables used within the game. There should be one instance of this object that is accessible for
//any module that requires it. 
export class options {
    constructor(serverMode) {
        this.session = { server: serverMode };
        this.core = {};
    }
}
//# sourceMappingURL=options.game.js.map