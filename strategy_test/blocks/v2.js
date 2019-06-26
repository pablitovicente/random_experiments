class blockV2 {
    constructor() {
        this.blockVersion = 'V2';
        return this;
    }

    forge(block) {
        const localBlock = {...block};
        localBlock.V2 = true;
        return localBlock;
    }

    setup() {
        console.log('Running setup for blockV2...');
        return this;
    }
};

module.exports = blockV2;