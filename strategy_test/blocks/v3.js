class blockV3 {
    constructor() {
        this.blockVersion = 'V3';
        return this;
    }

    forge(block) {
        const localBlock = {...block};
        localBlock.V3 = true;
        return localBlock;
    }

    setup() {
        console.log('Running setup for blockV3...');
        return this;
    }
};

module.exports = blockV3;