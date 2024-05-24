import { Entity } from "./entity.js";

export class Player extends Entity {
    constructor({
        position,
        collisionBlocks,
        platformCollisionBlocks,
        imageSrc,
        framerate,
        animations,
        scale = 0.5,
    }) {
        console.log(position);
        super({
            position,
            collisionBlocks,
            platformCollisionBlocks,
            imageSrc,
            framerate,
            animations,
            scale,
        });

        this.camerabox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            width: 200,
            height: 80,
        };
    }

    updateCameraBox() {
        this.camerabox = {
            position: {
                x: this.position.x - 50,
                y: this.position.y,
            },
            width: 200,
            height: 80,
        };
    }

    shouldPinCameraToTheLeft({ canvas, camera }) {
        const cameraboxRightSide = this.camerabox.position.x + this.camerabox.width;
        const scaledDownCanvasWidth = canvas.width / 4;

        if (cameraboxRightSide >= 576) return;

        if (cameraboxRightSide >= scaledDownCanvasWidth + Math.abs(camera.position.x)) {
            camera.position.x -= this.velocity.x;
        }
    }

    shouldPinCameraToTheRight({ canvas, camera }) {
        if (this.camerabox.position.x + this.velocity.y <= 0) return;

        if (this.camerabox.position.x <= Math.abs(camera.position.x)) {
            camera.position.x -= this.velocity.x;
        }
    }

    shouldPinCameraDown({ canvas, camera }) {
        if (this.camerabox.position.y + this.velocity.y <= 0) return;

        if (this.camerabox.position.y <= Math.abs(camera.position.y)) {
            camera.position.y -= this.velocity.y;
        }
    }

    shouldPinCameraUp({ canvas, camera }) {
        if (this.camerabox.position.y + this.camerabox.height + this.velocity.y >= 432) return;

        const scaledCanvasHeight = canvas.height / 4;

        if (
            this.camerabox.position.y + this.camerabox.height >=
            Math.abs(camera.position.y) + scaledCanvasHeight
        ) {
            camera.position.y -= this.velocity.y;
        }
    }

    update(c) {
        this.updateFrames();
        this.updateHitbox();
        this.updateCameraBox();

        this.draw(c);

        this.position.x += this.velocity.x;
        this.updateHitbox();
        this.checkForHorizontalCollisions();
        this.applyGravity();
        this.updateHitbox();
        this.checkForVerticalCollisions();
    }
}
