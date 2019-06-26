class blockV1 {
    constructor() {
        this.blockVersion = 'V1';
        return this;
    }

    forge(block) {
        const localBlock = {...block};
        localBlock.V1 = true;
        return localBlock;
    }
    setup() {
        console.log('Running setup for blockV1...');
        return this;
    }
};

module.exports = blockV1;