import { Player } from "./entities/player.js";

export class Game {
    constructor() {
        this.player = new Player({
            position: {
                x: 0,
                y: 0,
            },
            animations: [],
            collisionBlocks: [],
            framerate: 8,
            imageSrc: "../assets/Idle.png",
            platformCollisionBlocks: [],
        });
    }

    update() {}

    getPlayer() {
        return this.player;
    }
}
