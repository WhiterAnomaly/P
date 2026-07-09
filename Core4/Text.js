const Core4 = {};

Core4.text = {
    fullText: "",
    currentText: "",
    index: 0,
    speed: 30,
    finished: false,
    element: null,
    timer: null,

    init(elementId) {
        this.element = document.getElementById(elementId);
    },

    start(text, speed = 30) {
        this.fullText = text;
        this.currentText = "";
        this.index = 0;
        this.speed = speed;
        this.finished = false;

        if (this.timer) {
            clearInterval(this.timer);
        }

        this.timer = setInterval(() => {
            if (this.index < this.fullText.length) {
                this.currentText += this.fullText[this.index];
                this.element.textContent = this.currentText;
                this.index++;
            } else {
                clearInterval(this.timer);
                this.finished = true;
            }
        }, this.speed);
    }
};
