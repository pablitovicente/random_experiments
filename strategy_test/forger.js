class Forger {
    constructor() {
        this.blockVersion;
    }
    setStrategy(blockVersion) {
        this.blockVersion = blockVersion;
    }
    forge(block) {
        return this.blockVersion.forge(block);
    }
}

module.exports = Forger;