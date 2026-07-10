Core4.ui = {
    elements: [],

    add(element) {
        this.elements.push(element);
    },

    remove(element) {
        const index = this.elements.indexOf(element);

        if (index !== -1) {
            this.elements.splice(index, 1);
        }
    },

    update() {
        for (const element of this.elements) {
            if (element.update) {
                element.update();
            }
        }
    },

    draw() {
        for (const element of this.elements) {
            if (element.draw) {
                element.draw();
            }
        }
    },

    clear() {
        this.elements = [];
    },

    createButton(text, x, y, width, height, action) {
        const button = {
            text: text,
            x: x,
            y: y,
            width: width,
            height: height,

            draw() {
                const ctx = Core4.render.ctx;

                ctx.fillStyle = "#333";
                ctx.fillRect(
                    this.x,
                    this.y,
                    this.width,
                    this.height
                );

                ctx.fillStyle = "white";
                ctx.font = "20px Arial";
                ctx.fillText(
                    this.text,
                    this.x + 10,
                    this.y + 30
                );
            },

            update() {
                // Futuramente:
                // verificar mouse e cliques
            },

            click() {
                if (action) {
                    action();
                }
            }
        };

        this.add(button);

        return button;
    }
};
