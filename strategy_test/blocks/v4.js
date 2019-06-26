class blockV4 {
    constructor() {
        this.blockVersion = 'V4';
        return this;
    }

    forge(block) {
        const localBlock = {...block};
        localBlock.V4 = true;
        return localBlock;
    }

    setup() {
        console.log('Running setup for blockV4...');
        return this;
    }
};

module.exports = blockV4;