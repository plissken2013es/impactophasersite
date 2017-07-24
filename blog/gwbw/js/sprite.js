;(function() {
    function Sprite(url, pos, size, speed, frames, once) {
        this.pos = pos;
        this.size = size;
        this.spriteSize = [Resources.get(url).width, Resources.get(url).height];
        this.speed = typeof speed === "number" ? speed : 0;
        this.frames = frames;
        this._index = 0;
        this.url = url;
        this.once = once || false;
    }

    Sprite.prototype.update = function(dt) {
        this._index += this.speed * dt;
    };
    
    Sprite.prototype.reset = function() {
        this._index = 0;
        this.done = false;
    },

    Sprite.prototype.render = function(ctx) {
        var frame;

        if (this.speed > 0) {
            var max = this.frames.length;
            var idx = Math.floor(this._index);
            frame = this.frames[idx % max];

            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        } else {
            frame = 0;
        }

        var x = this.pos[0];
        var y = this.pos[1];

        x += frame * this.size[0];
        x = x % this.spriteSize[0];
        if (x >= this.spriteSize[0]) {
            y += this.size[1];
        }
        if (y > this.spriteSize[1]) {
            y = 0;
        }

        ctx.drawImage(Resources.get(this.url),
                      x, y,
                      this.size[0], this.size[1],
                      0, 0, 
                      this.size[0], this.size[1]);
    };
    
    window.Sprite = Sprite;
})();