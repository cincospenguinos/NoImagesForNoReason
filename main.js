const theCoolGameAndreMade = () => {
	const playerConf = {
		size: 16,
	};

	const CONF = {
		width: playerConf.size * 20,
		height: playerConf.size * 20,
	};

	const ASSETS = {
		CONFIG: {
			rootUrl: 'https://raw.githubusercontent.com/cincospenguinos/NoImagesForNoReason/main',
			loadUrlFor: (key) => `${ASSETS.CONFIG.rootUrl}/${key}.png`,
		},
		player: 'snek',
	};

	class Snek extends Phaser.Scene {
        preload () {
        	this.load.image(ASSETS.player, ASSETS.CONFIG.loadUrlFor(ASSETS.player));
        }

        create () {
        	this.input.add
        	this.player = this.add.image(100, 100, ASSETS.player);
        }

        update() {
        	this.player.x += playerConf.size;
        	if (this.player.x > CONF.width) {
        		this.player.x = 0;
        	}
        }
    }

    const config = {
    	...CONF,
        type: Phaser.AUTO,
        scene: Snek,
        backgroundColor: '#ffffff',
    };

	window.theCoolGameAndreMade = new Phaser.Game(config);
};

// We'll use the global window variable to ensure that only one instance is running at a time
if (!window.theCoolGameAndreMade) {
	const phaserScript = document.createElement('script');
	phaserScript.src = "https://cdn.jsdelivr.net/npm/phaser@3.60.0/dist/phaser-arcade-physics.min.js";
	phaserScript.addEventListener('load', theCoolGameAndreMade);
	document.head.appendChild(phaserScript);
}
