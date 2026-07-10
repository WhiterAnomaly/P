Core4.image = {
    images: {},

    load(name, src) {
        const img = new Image();

        img.src = src;

        this.images[name] = img;
    },

    get(name) {
        return this.images[name];
    },

    draw(name, x, y) {
        const img = this.images[name];

        if (!img) return;

        Core4.render.ctx.drawImage(img, x, y);
    },

    drawSize(name, x, y, width, height) {
        const img = this.images[name];

        if (!img) return;

        Core4.render.ctx.drawImage(img, x, y, width, height);
    },

    exists(name) {
        return this.images.hasOwnProperty(name);
    },

    remove(name) {
        delete this.images[name];
    },

    clear() {
        this.images = {};
    }
};
