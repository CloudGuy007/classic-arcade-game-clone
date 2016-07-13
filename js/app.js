// initialize menu, ememies and player
var menu = new Menu();
var allEnemies = [
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Enemy(),
    new Enemy()
];
var player = new Player();

// add listener for directional key presses
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',             // ←
        38: 'up',               // ↑
        39: 'right',            // →
        40: 'down',             // ↓
        49: 'boy',              // 1
        50: 'cat-girl',         // 2
        51: 'horn-girl',        // 3
        52: 'pink-girl',        // 4
        53: 'princess',         // 5
        65: 'left',             // A
        68: 'right',            // D
        83: 'down',             // S
        87: 'up'                // W
    };

    if(menu.on) {
        menu.handleInput(allowedKeys[e.keyCode]);
    } else {
        player.handleInput(allowedKeys[e.keyCode]);
    }
});
