Core4.animation = {
    animations: [],

    create(target, property, start, end, duration) {
        this.animations.push({
            target: target,
            property: property,
            start: start,
            end: end,
            duration: duration,
            elapsed: 0
        });
    },

    update() {
        for (let i = this.animations.length - 1; i >= 0; i--) {
            const animation = this.animations[i];

            animation.elapsed += Core4.loop.deltaTime;

            let progress = animation.elapsed / animation.duration;

            if (progress > 1) progress = 1;

            animation.target[animation.property] =
                animation.start + (animation.end - animation.start) * progress;

            if (progress >= 1) {
                this.animations.splice(i, 1);
            }
        }
    },

    clear() {
        this.animations = [];
    }
};
