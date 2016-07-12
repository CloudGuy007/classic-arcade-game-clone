var Player = function() {
    /*
     * COMMENT: add functionality to select 1 of 5 charaters
     */
    this.sprite = 'images/char-boy.png';
    this.yOffset = 25;
    this.width = 57;
    this.height = 65;

    this.x = undefined;
    this.y = undefined;
};

Player.prototype = {
    /*
     * COMMENT: add function comments
     */
    update: function() {
        if (this.y <= 0) {
            this.reset();
        }

        this.render();
    },
    /*
     * COMMENT: add function comments
     */
    render: function() {
        ctx.drawImage(
            Resources.get(this.sprite),
            this.x,
            this.y
        );
        /* debug - show collider */
        //ctx.strokeRect(this.x + 22, this.y + 76, this.width, this.height);
    },
    /*
     * COMMENT: add function comments
     */
    handleInput: function(key) {
        // change player's position based on input
        if(key === 'left' && this.x !== 0) {
            this.x -= 101;
        } else if(key === 'right' && this.x !== 404) {
            this.x += 101;
        } else if(key === 'up' && this.y !== 0) {
            this.y -= 83;
        } else if(key === 'down' && this.y !== 390) {
            this.y += 83;
        }

        // update player after position change
        this.update();
    },
    /*
     * COMMENT: add function comments
     */
    reset: function() {
        this.x = 202;
        this.y = 415 - this.yOffset;
    }
}