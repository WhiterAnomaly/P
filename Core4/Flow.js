Core4.flow = {
    state: "boot",

    change(newState) {
        this.state = newState;
    },

    is(state) {
        return this.state === state;
    },

    update() {
        switch (this.state) {

            case "boot":
                // Inicialização
                break;

            case "menu":
                // Menu principal
                break;

            case "game":
                // Jogo
                break;

            case "pause":
                // Jogo pausado
                break;

        }
    }
};
