/* Player.js
 * This file provides the functionality for the player's rendering,
 * movement, and score.
 */

// Constructor
var Player = function() {
    // set player's default sprite, width, and height
    this.sprite = undefined;
    this.width = 57;
    this.height = 65;
    // offsets for player's sprite and collider
    this.spriteYOffset = 25;
    this.colliderXOffset = (101 - this.width) / 2;
    // initialize player's position and score
    this.x = 0;
    this.y = 0;
    this.score = 0;
};
// Prototype
Player.prototype = {
    /*
     * Updates player's render
     */
    update: function() {
        this.render();
    },
    /*
     * Renders player and his/her score to screen
     */
    render: function() {
        if(this.sprite === undefined) {
            // do nothing
        } else {
            // render player
            ctx.drawImage(
                Resources.get(this.sprite),
                this.x,
                this.y
            );
            // render score
            ctx.fillStyle = 'white';
            ctx.font = '26px Arial';
            ctx.textAlign= 'right';
            ctx.fillText(this.score, 498, 78);
            // debug show collider
            // ctx.strokeRect(this.x + 22, this.y + 76, this.width, this.height);
        }
    },
    /*
     * Handles input from user and adjusts the player's position
     * @param {String} key
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

        // if player has reached water
        if (this.y <= 0) {
            this.score++;
            this.resetPosition();
        }

        // update player after position change
        this.update();
    },
    /*
     * Sets player's sprite
     */
    setSprite: function(selection) {

    },
    /*
     * Resets player's position
     */
    resetPosition: function() {
        this.x = 202;
        this.y = 415 - this.spriteYOffset;
    },
    /**
     * Resets player to initial game state
     */
    reset: function() {
        this.resetPosition();
        this.score = 0;
    }
}