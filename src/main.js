import { Controller } from "./controller.js";
import { Display } from "./display.js";
import { Engine } from "./engine.js";
import { Game } from "./game.js";

window.addEventListener("load", () => {
    "use strict";

    const keyDownUp = (e) => {
        controller.keyUpDown(e.type, e.keyCode);
    };

    const render = () => {
        display.drawMap();
        game.player.update(display.getContext());
    };

    const update = () => {};

    const game = new Game();
    const display = new Display();
    const controller = new Controller();
    const engine = new Engine(1000 / 30, render, update);

    engine.start();

    window.addEventListener("keydown", keyDownUp);
    window.addEventListener("keyup", keyDownUp);
});
