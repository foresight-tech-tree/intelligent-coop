const desoc = {
    "data": {
        "id": "decentralised society (DeSoc)",
        "parent": "decentralised infrastructure"
    }
};

const publicGoods = {
    "data": {
        "id": "public goods funding",
        "parent": desoc.data.id,
        "description": "Mechanisms to raise funds for public goods (e.g. open-source client code, protocol research, documentation, community-building)",
        "projects": [
            {
                "name": "MolochDAO",
                "url": "https://molochdao.com/"
            },
            {
                "name": "Gitcoin Grants",
                "url": "https://gitcoin.co/"
            },
            {
                "name": "Retroactive Public Goods Funding (Optimism)",
                "url": "https://medium.com/ethereum-optimism/retroactive-public-goods-funding-33c9b7d00f0c"
            },
            {
                "name": "Clr.fund",
                "url": "https://clr.fund/#/"
            }
        ]
    }
};

const socialMedia = {
    "data": {
        "id": "decentralised social media",
        "parent": desoc.data.id,
        "description": "Networks of identity and reputation that do not rely on a centralised administrator or host.",
        "projects": [
            {
                "name": "Bluesky",
                "url": "https://blueskyweb.xyz/"
            },
            {
                "name": "Unirep Social",
                "url": "https://unirep.gitbook.io/unirep-social/"
            },
        ]
    }
};

const antiCollusion = {
    "data": {
        "id": "anti-collusion",
        "parent": desoc.data.id,
        "description": "A protocol that prevents malicious users from buying votes.",
        "projects": [
            {
                "name": "Minimal Anti-Collusion Infrastructure (MACI)",
                "url": "https://github.com/privacy-scaling-explorations/maci"
            }
        ]
    }
}

const voting = {
    "data": {
        "id": "decentralised voting",
        "parent": desoc.data.id,
        "description": "A voting protocol that preserves the correctness and secrecy of votes without a central coordinating body.",
        "projects": [
            {
                "name": "Vocdoni",
                "url": "https://vocdoni.app/"
            },
            {
                "name": "Snapshot",
                "url": "https://snapshot.org/"
            },
        ]
    }
}

const verifiableCredentials = {
    "data": {
        "id": "verifiable credentials",
        "parent": desoc.data.id,
        "description": "Verifiable credentials (VCs) are an open standard for digital credentials. They can represent information found in physical credentials, such as a passport or license, as well as new things that have no physical equivalent, such as ownership of a bank account.",
        "projects": [
            {
                "name": "W3C Recommendation",
                "url": "https://www.w3.org/TR/vc-data-model/#use-cases-and-requirements"
            }
        ]
    }
};

export default [
    desoc,
    socialMedia,
    publicGoods,
    antiCollusion,
    voting,
    verifiableCredentials,
    { "data": { "source": antiCollusion.data.id, "target": voting.data.id, "id": "anticollusion_voting" }, "group": "edges" },
    { "data": { "source": voting.data.id, "target": publicGoods.data.id, "id": "voting_pubgoods" }, "group": "edges" },
    { "data": { "source": "decentralised identity (DID)", "target": verifiableCredentials.data.id, "id": "did_vcs" }, "group": "edges" },
];