const did = {
    "data": {
        "id": "decentralised identity (DID)",
        "parent": "decentralised infrastructure"
    }
};

export default [
    did,
    { "data": { "source": "data sovereignty", "target": did.data.id, "id": "sov_did" }, "group": "edges" },
    { "data": { "source": did.data.id, "target": "governance", "id": "did_gov" }, "group": "edges" },
];