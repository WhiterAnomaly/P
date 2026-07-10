Core4.audio = {
    sounds: {},

    load(name, src) {
        const audio = new Audio();

        audio.src = src;

        this.sounds[name] = audio;
    },

    get(name) {
        return this.sounds[name];
    },

    play(name) {
        const audio = this.sounds[name];

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
    },

    pause(name) {
        const audio = this.sounds[name];

        if (!audio) return;

        audio.pause();
    },

    stop(name) {
        const audio = this.sounds[name];

        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;
    },

    setVolume(name, volume) {
        const audio = this.sounds[name];

        if (!audio) return;

        audio.volume = volume;
    },

    loop(name, enabled = true) {
        const audio = this.sounds[name];

        if (!audio) return;

        audio.loop = enabled;
    },

    remove(name) {
        delete this.sounds[name];
    },

    clear() {
        this.sounds = {};
    }
};
