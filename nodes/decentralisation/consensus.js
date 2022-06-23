const consensus = {
    "data": {
        "id": "consensus systems",
        "parent": "decentralised infrastructure",
        "description": "A mechanism for nodes to reach an agreement on the network's current state.",
        "nodeType": "coreTech",
    }
};

const pos = {
    "data": {
        "id": "proof of stake",
        "parent": consensus.data.id,
        "description": "A consensus mechanism in which validators explicitly stake capital, which acts as collateral that can be destroyed in case of dishonest behaviour.",
        "projects": [
            {
                "name": "Tendermint",
                "url": "https://tendermint.com/"
            },
            {
                "name": "LMD-GHOST (Eth 2.0)",
                "url": "https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/"
            },
            {
                "name": "Ouroboros",
                "url": "https://cardano.org/ouroboros/"
            }
        ],
        "nodeType": "coreTech",
    }
};

const private_pos = {
    "data": {
        "id": "private proof of stake",
        "parent": consensus.data.id,
        "description": "A PoS protocol that preserves the privacy of stakers",
        "projects": [
            {
                "name": "Ouroboros Crypsinous",
                "url": "https://eprint.iacr.org/2018/1132"
            },
            {
                "name": "Penumbra",
                "url": "https://penumbra.zone/technology/stake"
            },
        ],
        "nodeType": "frontier",
    }
};

const pow = {
    "data": {
        "id": "proof of work",
        "parent": consensus.data.id,
        "description": "A consensus mechanism in which miners prove they have capital at risk by expending energy.",
        "projects": [
            {
                "name": "Nakamoto consensus",
                "url": "https://bitcoin.org/bitcoin.pdf"
            }
        ],
        "nodeType": "coreTech",
    }
};

export default [
    consensus,
    pos,
    pow,
    private_pos,
    { "data": { "source": "zero-knowledge proofs", "target": private_pos.data.id, "id": "zkp_privpos" }, "group": "edges" },
    { "data": { "source": pos.data.id, "target": private_pos.data.id, "id": "pos_privpos" }, "group": "edges" },
];