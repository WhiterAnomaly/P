Core4.transition = {
    active: false,
    alpha: 0,
    speed: 1,
    type: "fade",
    color: "#000000",

    fadeIn(duration = 1) {
        this.active = true;
        this.alpha = 1;
        this.speed = 1 / duration;
        this.type = "fadeIn";
    },

    fadeOut(duration = 1) {
        this.active = true;
        this.alpha = 0;
        this.speed = 1 / duration;
        this.type = "fadeOut";
    },

    update() {
        if (!this.active) return;

        if (this.type === "fadeIn") {
            this.alpha -= this.speed * Core4.loop.deltaTime;

            if (this.alpha <= 0) {
                this.alpha = 0;
                this.active = false;
            }
        }

        if (this.type === "fadeOut") {
            this.alpha += this.speed * Core4.loop.deltaTime;

            if (this.alpha >= 1) {
                this.alpha = 1;
                this.active = false;
            }
        }
    },

    draw() {
        if (this.alpha <= 0) return;

        const ctx = Core4.render.ctx;

        ctx.save();

        ctx.globalAlpha = this.alpha;
        ctx.fillStyle = this.color;
        ctx.fillRect(
            0,
            0,
            Core4.render.width,
            Core4.render.height
        );

        ctx.restore();
    }
};
