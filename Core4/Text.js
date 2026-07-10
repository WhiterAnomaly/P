Core4.text = {
    fullText: "",
    currentText: "",
    index: 0,

    speed: 30, // Letras por segundo
    timer: 0,
    finished: true,

    x: 50,
    y: 500,

    set(text) {
        this.fullText = text;
        this.currentText = "";
        this.index = 0;
        this.timer = 0;
        this.finished = false;
    },

    update() {
        if (this.finished) return;

        this.timer += Core4.loop.deltaTime;

        while (this.timer >= 1 / this.speed && !this.finished) {
            this.timer -= 1 / this.speed;

            this.currentText += this.fullText[this.index];
            this.index++;

            if (this.index >= this.fullText.length) {
                this.finished = true;
            }
        }
    },

    draw() {
        const ctx = Core4.render.ctx;

        if (!ctx) return;

        ctx.font = "28px Arial";
        ctx.fillStyle = "white";
        ctx.textBaseline = "top";

        ctx.fillText(this.currentText, this.x, this.y);
    },

    skip() {
        this.currentText = this.fullText;
        this.index = this.fullText.length;
        this.finished = true;
    },

    clear() {
        this.fullText = "";
        this.currentText = "";
        this.index = 0;
        this.timer = 0;
        this.finished = true;
    }
};
