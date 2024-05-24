import { Sprite } from "./sprite.js";

export class Display {
    constructor() {
        this.mapSprite = new Sprite({
            position: {
                x: 0,
                y: 0,
            },
            imageSrc: "../assets/background.png",
        });
        this.canvas = document.querySelector("#canvas");
        this.canvas.width = 1024;
        this.canvas.height = 576;
        this.context = this.canvas.getContext("2d");
    }

    drawMap() {
        this.context.fillStyle = "white";
        this.context.fillRect(0, 0, canvas.width, canvas.height);
        this.mapSprite.update(this.context);
    }

    drawObject() {}

    getContext() {
        return this.context;
    }
}
