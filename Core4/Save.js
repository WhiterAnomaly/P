Core4.save = {
    prefix: "Core4_",

    save(key, data) {
        localStorage.setItem(
            this.prefix + key,
            JSON.stringify(data)
        );
    },

    load(key) {
        const data = localStorage.getItem(
            this.prefix + key
        );

        if (!data) {
            return null;
        }

        return JSON.parse(data);
    },

    exists(key) {
        return localStorage.getItem(
            this.prefix + key
        ) !== null;
    },

    remove(key) {
        localStorage.removeItem(
            this.prefix + key
        );
    },

    clear() {
        const keys = [];

        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);

            if (key.startsWith(this.prefix)) {
                keys.push(key);
            }
        }

        for (const key of keys) {
            localStorage.removeItem(key);
        }
    }
};
