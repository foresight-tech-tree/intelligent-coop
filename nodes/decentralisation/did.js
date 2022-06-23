const did = {
    "data": {
        "id": "decentralised identity (DID)",
        "parent": "decentralised infrastructure"
    }
};

const reputation = {
    "data": {
        "id": "verifiable reputation",
        "parent": did.data.id,
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
        ]
    }
};

export default [
    did,
    reputation,
    { "data": { "source": "data sovereignty", "target": did.data.id, "id": "sov_did" }, "group": "edges" },
    { "data": { "source": reputation.data.id, "target": "decentralised social media", "id": "rep_socmed"}, "group": "edges" },
    { "data": { "source": did.data.id, "target": "governance", "id": "did_gov" }, "group": "edges" },
    { "data": { "source": did.data.id, "target": "decentralised society (DeSoc)", "id": "did_desoc" }, "group": "edges" },
];