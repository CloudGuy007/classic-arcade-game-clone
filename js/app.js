var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function(dt) {

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function() {
    /*
     * COMMENT: add functionality to select 1 of 5 charaters
     */
    this.sprite = 'images/char-boy.png';

    this.x = 2;
    this.y = 5;
};

Player.prototype = {
    update: function(dt) {

    },
    render: function() {
        ctx.drawImage(
            Resources.get(this.sprite),
            this.convertPlayerX(this.x),
            this.convertPlayerY(this.y)
        );
    },
    handleInput: function(key) {
        // change player's position based on direction
        if(key === 'left' && this.x !== 0) {
            this.x--;
        } else if(key === 'right' && this.x !== 4) {
            this.x++;
        } else if(key === 'up' && this.y !== 0) {
            this.y--;
        } else if(key === 'down' && this.y !== 5) {
            this.y++;
        }

        // render player after position change
        this.render();
    },
    convertPlayerX: function(x) {
        return (x * 101);
    },
    convertPlayerY: function(y) {
        return (y * 83) - (83 / 2);
    }
}

var allEnemies = [];
var player = new Player();

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        // added support for w,a,s,d keys
        65: 'left',
        68: 'right',
        83: 'down',
        87: 'up'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
