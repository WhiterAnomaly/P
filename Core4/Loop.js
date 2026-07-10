Core4.loop = {
    running: false,
    frame: 0,
    lastTime: 0,
    deltaTime: 0,

    start() {
        if (this.running) return;

        this.running = true;
        requestAnimationFrame(this.update.bind(this));
    },

    stop() {
        this.running = false;
    },

    update(currentTime) {
        if (!this.running) return;

        // Tempo entre um frame e outro (em segundos)
        this.deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // Conta quantos frames já passaram
        this.frame++;

        // Atualizar sistemas
        if (Core4.input && Core4.input.update) {
            Core4.input.update();
        }

        if (Core4.flow && Core4.flow.update) {
            Core4.flow.update();
        }

        if (Core4.text && Core4.text.update) {
            Core4.text.update();
        }

        if (Core4.animation && Core4.animation.update) {
            Core4.animation.update();
        }

        if (Core4.transition && Core4.transition.update) {
            Core4.transition.update();
        }

        if (Core4.scene && Core4.scene.update) {
            Core4.scene.update();
        }

        if (Core4.render && Core4.render.update) {
            Core4.render.update();
        }

        // Próximo frame
        requestAnimationFrame(this.update.bind(this));
    }
};
