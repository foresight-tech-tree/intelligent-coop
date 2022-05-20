import artificialIntelligence from './nodes/artificialIntelligence.js';
import decentralisation from './nodes/decentralisation.js';
import privacy from './nodes/privacy.js';
import data from './nodes/data.js';

function makeList(strings) {
    return strings.reduce((result, str) => result + "• " + str + "<br/>", "");
}

function parseLink(obj) {
    return "<a target=_blank href=" + obj.url + ">" + obj.name + "</a>"
}

function parseNode(node) {
    if (!node.data) {
        console.log(node)
    }
    if (node.data.description) {
        return {
            "data": {
                "id": node.data.id,
                "parent": node.data.parent,
                "description": node.data.description,
                "history": makeList(node.data.history),
                "companies": makeList(node.data.companies.map(parseLink)),
                "labs": makeList(node.data.labs.map(parseLink)),
                "people": makeList(node.data.people.map(parseLink)),
                "involvement": makeList(node.data.involvement.map(parseLink)),
                "resources": makeList(node.data.resources.map(parseLink)),
            },
            "group": "nodes"
        };
    } else {
        return node;
    }
}

const nodes = artificialIntelligence
    .concat(decentralisation)
    .concat(privacy)
    .concat(data)
    .flat()
    .concat(
        {
            "data": {
                "id": "decentralised artificial intelligence"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "private artificial intelligence"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "private decentralised computation"
            },
            "group": "nodes"
        },
        {
            "data": {
                "id": "Data sovereignty"
            },
            "group": "nodes"
        },
        {
            "data": {
                "source": "Open Data",
                "target": "Data sovereignty",
                "id": "opendata_sov" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "Data sovereignty",
                "target": "decentralised identity (DID)",
                "id": "sov_did" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "decentralised infrastructure",
                "target": "decentralised artificial intelligence",
                "id": "dec_ai" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "decentralised infrastructure",
                "target": "private decentralised computation",
                "id": "dec_priv" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "artificial intelligence",
                "target": "decentralised artificial intelligence",
                "id": "ai_dec" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "artificial intelligence",
                "target": "private artificial intelligence",
                "id": "ai_priv" 
            },
            "group": "edges"
        },
        {
            "data": {
                "source": "private computation",
                "target": "private decentralised computation",
                "id": "priv_dec",
                "description": ""
            },
            "group": "edges"
        },
    )
    .map(node => parseNode(node));

export default nodes;
