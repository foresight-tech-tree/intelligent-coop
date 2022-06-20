const zkrollup = {
    "data": {
        "id": "zkRollups",
        "parent": "scaling",
        "description": "A scaling solution that provides validity proofs for off-chain transactions.",
        "companies": [
            {
                "name": "zkSync",
                "url": "https://zksync.io/"
            },
            {
                "name": "Loopring",
                "url": "https://loopring.org/#/"
            },
            {
                "name": "Aztec",
                "url": "https://aztec.network/"
            },
            {
                "name": "StarkNet",
                "url": "https://starkware.co/starknet/"
            },
            {
                "name": "Polygon Zero",
                "url": "https://polygon.technology/solutions/polygon-zero/"
            },
            {
                "name": "Polygon Hermez",
                "url": "https://polygon.technology/solutions/polygon-hermez/"
            },
        ],
    },
    "nodeType": "application"
};

const optimisticRollup = {
    "data": {
        "id": "optimistic rollups",
        "parent": "scaling",
        "description": "An optimistic scaling solution that provides fraud proofs for off-chain transactions.",
        "companies": [
            {
                "name": "Optimism",
                "url": "https://www.optimism.io/"
            },
            {
                "name": "Arbitrum",
                "url": "https://arbitrum.io/"
            },
            {
                "name": "Polygon Nightfall",
                "url": "https://polygon.technology/solutions/polygon-nightfall/"
            },
            {
                "name": "Fuel Network",
                "url": "https://fuel.network/"
            }
        ],
    },
    "nodeType": "application"
};

const dataAvail = {
    "data": {
        "id": "data availability",
        "parent": "scaling",
        "companies": [
            {
                "name": "Celestia",
                "url": "https://celestia.org/"
            },
            {
                "name": "Polygon Avail",
                "url": "https://polygon.technology/solutions/polygon-avail/"
            },
            {
                "name": "zkPorter",
                "url": "https://zkporter.io/#/"
            }
        ],
    },
    "nodeType": "coreTech"
};

const lightBlockchain = {
    "data": {
        "id": "light blockchain",
        "parent": "scaling",
        "description": "A blockchain that requires only constant-size computation to validate.",
        "companies": [
            {
                "name": "Mina Protocol",
                "url": "https://minaprotocol.com/"
            }
        ],
    },
    "nodeType": "application"
};

export default [
    zkrollup,
    optimisticRollup,
    dataAvail,
    lightBlockchain,
    { "data": {"id": "scaling", "parent": "decentralised infrastructure" }, "group": "nodes" },
    { "data": { "source": dataAvail.data.id, "target": zkrollup.data.id, "id": "avail_rollup" }, "group": "edges" },
    { "data": { "source": "zero-knowledge proofs", "target": zkrollup.data.id, "id": "zkp_zkr" }, "group": "edges" },
    { "data": { "source": "open data", "target": dataAvail.data.id, "id": "open_avail" }, "group": "edges" },
    { "data": { "source": "recursive SNARKs", "target": lightBlockchain.data.id }, "group": "edges"}
];