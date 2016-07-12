var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
    this.yOffset = 25;
    this.width = 101;
    this.height = 83;

    this.x = -500;
    this.y = this.convertRowToYPosition(this.setRandomRow());
    this.speed = this.setRandomSpeed();
};

Enemy.prototype = {
    /*
     * COMMENT: add function comments
     */
    update: function(dt) {
        this.x += dt + this.speed;
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
        //ctx.strokeRect(this.x, this.y + 76, this.width, this.height);
    },
    /*
     * COMMENT: add function comments
     */
    reset: function() {
        this.x = -500;
        this.y = this.convertRowToYPosition(this.setRandomRow());
        this.speed = this.setRandomSpeed();
    },
    /*
     * COMMENT: add function comments
     */
    setRandomRow: function() {
        return Math.floor(Math.random() * (4 - 1) + 1);
    },
    /*
     * COMMENT: add function comments
     */
    setRandomSpeed: function(min, max) {
        return Math.random() * (6 - 2) + 6;
    },
    /*
     * COMMENT: add function comments
     */
    convertRowToYPosition: function(y) {
        return (y * 83) - this.yOffset;
    }
};