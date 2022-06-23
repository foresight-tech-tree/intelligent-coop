import did from './decentralisation/did.js';
import defi from './decentralisation/defi.js';
import desci from './decentralisation/desci.js';
import desoc from './decentralisation/desoc.js';
import scaling from './decentralisation/scaling.js';
import consensus from './decentralisation/consensus.js';
import governance from './decentralisation/governance.js';
import interop from './decentralisation/interop.js';

const decentralisation = [
    {
        "data": {
            "id": "decentralised infrastructure",
            "nodeType": "coreTech"
        },
        "group": "nodes"
    },
    did,
    defi,
    desci,
    desoc,
    consensus,
    scaling,
    governance,
    interop
];

export default decentralisation;