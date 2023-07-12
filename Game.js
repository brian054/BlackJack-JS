class Example extends Phaser.Scene
{
    // Test
    constructor ()
    {
        super();
    }

    preload ()
    {
    }

    create () {
       var graphics = this.add.graphics();
       graphics.fillStyle(0xff0000)
       graphics.lineStyle(2, 0x000000) // 2px thick

       var squareSize = 50;
       var x = game.config.width / 2 - squareSize / 2;
       var y = game.config.height / 2 - squareSize / 2;
       graphics.fillRect(x, y, squareSize, squareSize)

       graphics.fillStyle(0x00ff00)
       graphics.fillRect(x + squareSize + 50, y + squareSize + 50, squareSize, squareSize);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    // physics: {
    //     default: 'arcade',
    //     arcade: {
    //         gravity: { y: 200 }
    //     }
    // },
    scene: Example
};

const game = new Phaser.Game(config);