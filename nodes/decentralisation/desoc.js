import dao from "./desoc/dao.js"

const desoc = {
    "data": {
        "id": "decentralised society (DeSoc)",
        "parent": "decentralised infrastructure",
        "resources": [
            {
                "name": "Decentralized Society: Finding Web3's Soul",
                "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763"
            }
        ],
        "nodeType": "frontier",
    }
};

const did = {
    "data": {
        "id": "decentralised identity (DID)",
        "parent": desoc.data.id,
        "resources": [
            {
                "name": "Inventories, Not Identities - Why multisigs are the future of online accounts (2021) - Kei Kreutler",
                "url": "https://blog.gnosis.pm/inventories-not-identities-7da9a4ec5a3e"
            }
        ],
        "nodeType": "frontier"
    }
};

const reputation = {
    "data": {
        "id": "verifiable reputation",
        "parent": desoc.data.id,
        "description": "Protocols to verify users' reputation aross platforms.",
        "companies": [
            {
                "name": "Interep",
                "url": "https://interep.link/"
            },
            {
                "name": "Unirep",
                "url": "https://unirep.gitbook.io/unirep/"
            },
        ],
        "nodeType": "core"
    }
};

const sbt = {
    "data": {
        "id": "soulbound tokens",
        "parent": desoc.data.id,
        "description": "Publicly visible, non-transferable (but possibly revocable-by-the-issuer) tokens.",
        "resources": [
            {
                "name": "Soulbound Tokens (SBTs)",
                "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763"
            }
        ],
        "nodeType": "core"
    }
};

const provenance = {
    "data": {
        "id": "social provenance",
        "parent": desoc.data.id,
        "description": "Social context about the origin of some artiface",
        "nodeType": "frontier"
    }
};

const sybil = {
    "data": {
        "id": "Sybil resistance",
        "parent": desoc.data.id,
        "description": "A Sybil attack is a type of attack on a computer network service in which an attacker subverts the service's reputation system by creating a large number of pseudonymous identities and uses them to gain a disproportionately large influence.",
        "nodeType": "challenge"
    }
}

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
        ],
        "nodeType": "application",
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
        ],
        "nodeType": "application",
    }
};

const socialRecovery = {
    "data": {
        "id": "social recovery",
        "parent": desoc.data.id,
        "description": "The recovery of an account's private keys using the consent of a member from a qualified majority of (a random subset of) the account's communities.",
        "nodeType": "application"
    },
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
        ],
        "nodeType": "core",
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
        ],
        "nodeType": "application",
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
        ],
        "nodeType": "core",
    }
};

export default [
    desoc,
    sbt,
    provenance,
    sybil,
    socialMedia,
    publicGoods,
    antiCollusion,
    voting,
    verifiableCredentials,
    did,
    reputation,
    socialRecovery,
    { "data": { "source": "data sovereignty", "target": did.data.id, "id": "sov_did" }, "group": "edges" },
    { "data": { "source": reputation.data.id, "target": "decentralised social media", "id": "rep_socmed"}, "group": "edges" },
    { "data": { "source": did.data.id, "target": "governance", "id": "did_gov" }, "group": "edges" },
    { "data": { "source": did.data.id, "target": "decentralised society (DeSoc)", "id": "did_desoc" }, "group": "edges" },
    { "data": { "source": sbt.data.id, "target": provenance.data.id, "id": "sbt_provenance" }, "group": "edges" },
    { "data": { "source": sbt.data.id, "target": socialRecovery.data.id, "id": "sbt_provenance" }, "group": "edges" },
    { "data": { "source": sbt.data.id, "target": sybil.data.id, "id": "sbt_provenance" }, "group": "edges" },
    { "data": { "source": sybil.data.id, "target": socialMedia.data.id, "id": "anticollusion_voting" }, "group": "edges" },
    { "data": { "source": sybil.data.id, "target": "decentralised identity (DID)", "id": "anticollusion_voting" }, "group": "edges" },
    { "data": { "source": "proof of stake", "target": sybil.data.id, "id": "anticollusion_voting" }, "group": "edges" },
    { "data": { "source": "proof of work", "target": sybil.data.id, "id": "anticollusion_voting" }, "group": "edges" },
    { "data": { "source": antiCollusion.data.id, "target": voting.data.id, "id": "anticollusion_voting" }, "group": "edges" },
    { "data": { "source": voting.data.id, "target": publicGoods.data.id, "id": "voting_pubgoods" }, "group": "edges" },
    { "data": { "source": "decentralised identity (DID)", "target": verifiableCredentials.data.id, "id": "did_vcs" }, "group": "edges" },
].concat(dao).flat();