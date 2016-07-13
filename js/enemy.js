/* Enemy.js
 * This file provides the functionality for the enemy's rendering
 * and movement.
 */

// Constructor
var Enemy = function() {
    // set enemy's default sprite, width, and height
    this.sprite = 'images/enemy-bug.png';
    this.width = 101;
    this.height = 83;
    // offset for enemy's sprite
    this.spriteYOffset = 25;
    // initialize enemy's position and speed
    this.x = -500;
    this.y = this.convertRowToYPosition(this.setRandomRow());
    this.speed = this.setRandomSpeed();
};
// Prototype
Enemy.prototype = {
    /*
     * Updates enemy's position and render
     */
    update: function(dt) {
        this.x += dt + this.speed;
        this.render();
    },
    /*
     * Renders enemy to screen
     */
    render: function() {
        ctx.drawImage(
            Resources.get(this.sprite),
            this.x,
            this.y
        );
        // debug show collider
        // ctx.strokeRect(this.x, this.y + 76, this.width, this.height);
    },
    /*
     * Resets enemy's x position offscreen and selects new row and speed
     */
    reset: function() {
        this.x = -500;
        this.y = this.convertRowToYPosition(this.setRandomRow());
        this.speed = this.setRandomSpeed();
    },
    /*
     * Sets random ememy row position
     */
    setRandomRow: function() {
        return Math.floor(Math.random() * (4 - 1) + 1);
    },
    /*
     * Sets random ememy speed
     */
    setRandomSpeed: function(min, max) {
        return Math.random() * (6 - 2) + 6;
    },
    /*
     * Converts enemy's row position to canvas y position
     */
    convertRowToYPosition: function(y) {
        return (y * 83) - this.spriteYOffset;
    }
};