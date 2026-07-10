Core4.render = {
    canvas: null,
    ctx: null,
    width: 0,
    height: 0,

    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.resize();

        window.addEventListener("resize", () => {
            this.resize();
        });
    },

    resize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    },

    update() {
        this.clear();
        if (Core4.text && Core4.text.draw) {
            Core4.text.draw();
        }

        if (Core4.scene && Core4.scene.draw) {
            Core4.scene.draw();
        }

        // Aqui serão desenhados:
        // Fundo
        // Imagens
        // Personagens
        // Interface
        // Texto
    }
};
