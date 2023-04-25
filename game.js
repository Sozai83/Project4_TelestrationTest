export default class Game {

    constructor(config = {}) {
        this.phaserConfig = {
            type: Phaser.AUTO,
            parent: config.id ? config.id : "game",
            width: config.width ? config.width : 800,
            height: config.height ? config.height : 600,
            scene: {
                key: "default",
                init: this.initScene,
                create: this.createScene,
                update: this.updateScene
            }
        };
    }

    async initScene(data) {
        this.strokes = [];
        this.isDrawing = false;
    }
    async createScene() {
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(2, 0x00aa00);
    }
    async updateScene() {
        if(!this.input.activePointer.isDown && this.isDrawing) {
            this.isDrawing = false;
        } else if(this.input.activePointer.isDown) {
            if(!this.isDrawing) {
                this.path = new Phaser.Curves.Path(this.input.activePointer.position.x - 2, this.input.activePointer.position.y - 2);
                this.isDrawing = true;
            } else {
                this.path.lineTo(this.input.activePointer.position.x - 2, this.input.activePointer.position.y - 2);
            }
            this.path.draw(this.graphics);
        }
    }

    async authenticate() { }
    async joinOrCreateGame(id) { }
    async joinGame(id, authId) { }
    async createGame(id, authId) {
        this.game = new Phaser.Game(this.phaserConfig);
        this.game.scene.start("default", {});
    }

}