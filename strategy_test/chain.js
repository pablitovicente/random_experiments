const { v1, v2, v3, v4 } = require('./blocks');
const Forger = require('./forger');

const versionHeightChanges = [7, 20, 25];
const versionHeightChangesStrategies = [new v2(), new v3(), new v4()];

const forger = new Forger();
// Set initial strategy this would happen in chain.js or similar where the forger gets instantiated initially

forger.setStrategy(new v1().setup());
// Get the first version change
let nextChange = versionHeightChanges.shift();
let nextStrategy = versionHeightChangesStrategies.shift();


// Helpers to simulate some parts of chain....
let height = 0; // In SDK we will need to know this constantly specially to know what to load as first strategy when booting!!
const block = { id: "1234", transactions: [{id: 1}, {id: 2}] };


// Simulate ticking
setInterval(()=> {
    // This check and actions should probably happen in forger.forge()
    if(height === nextChange) {
        console.log('Switching block processing strategy');
        console.log();
        forger.setStrategy(nextStrategy.setup());
        nextChange = versionHeightChanges.shift() || null;
        nextStrategy = versionHeightChangesStrategies.shift() || null;
    }

    console.log(`- Forged Block: ${JSON.stringify(forger.forge(block))} at height: ${height}`);
    height += 1;
}, 500);