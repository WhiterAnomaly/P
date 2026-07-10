Core4.scene = {
    scenes: {},
    current: null,

    add(name, scene) {
        this.scenes[name] = scene;
    },

    load(name) {
        if (!this.scenes[name]) return;

        this.current = this.scenes[name];

        if (this.current.start) {
            this.current.start();
        }
    },

    update() {
        if (this.current && this.current.update) {
            this.current.update();
        }
    },

    draw() {
        if (this.current && this.current.draw) {
            this.current.draw();
        }
    },

    remove(name) {
        delete this.scenes[name];
    },

    clear() {
        this.scenes = {};
        this.current = null;
    }
};
