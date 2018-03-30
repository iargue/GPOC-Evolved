import { renderer } from './../renderer/renderer.game';
//This module declares the options and variables used within the game. There should be one instance of this object that is accessible for
//any module that requires it. 

export class options {
    //The core options defines the variables that are core to the games functionality
    // Renderer is the pixijs object that renders the game for us
    // heroList is an array that contains a list of all hero's in this game
    // particleList is an array that contains a list of particles in this game
    // monsterList is an array that contains a list of all currently alive monsters
    core: {
        renderer?: renderer
        playerList?: Array<object>
        heroList?: Array<object>
        particleList?: Array<object>
        monsterList?: Array<object>
    }
    //The session options defines things that are unique to this players connection. These are things like resolution, sound muted, quick cast
    session: {
        server: Boolean
    }
    constructor(serverMode:boolean) {
        this.session = {server: serverMode}
        this.core = {}
    }
}