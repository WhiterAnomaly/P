Core4.input = {
    keys: {},
    mouse: {
        x: 0,
        y: 0,
        down: false
    },

    init() {
        window.addEventListener("keydown", (event) => {
            this.keys[event.code] = true;
        });

        window.addEventListener("keyup", (event) => {
            this.keys[event.code] = false;
        });

        window.addEventListener("mousemove", (event) => {
            this.mouse.x = event.clientX;
            this.mouse.y = event.clientY;
        });

        window.addEventListener("mousedown", () => {
            this.mouse.down = true;
        });

        window.addEventListener("mouseup", () => {
            this.mouse.down = false;
        });
    },

    isPressed(key) {
        return !!this.keys[key];
    },

    update() {
        // Reservado para futuras atualizações
    }
};
