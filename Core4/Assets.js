Core4.assets = {
    images: {},
    audio: {},
    fonts: {},

    loadImage(name, src) {
        const img = new Image();

        img.src = src;

        this.images[name] = img;
    },

    getImage(name) {
        return this.images[name];
    },


    loadAudio(name, src) {
        const sound = new Audio();

        sound.src = src;

        this.audio[name] = sound;
    },

    getAudio(name) {
        return this.audio[name];
    },


    loadFont(name, src) {
        const font = new FontFace(name, `url(${src})`);

        font.load().then((loadedFont) => {
            document.fonts.add(loadedFont);
            this.fonts[name] = loadedFont;
        });
    },

    getFont(name) {
        return this.fonts[name];
    },


    exists(type, name) {
        if (!this[type]) return false;

        return this[type].hasOwnProperty(name);
    },


    clear() {
        this.images = {};
        this.audio = {};
        this.fonts = {};
    }
};
