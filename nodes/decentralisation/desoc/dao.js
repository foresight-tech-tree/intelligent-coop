const dao = {
    "data": {
        "id": "decentralised autonomous organisations (DAO)",
        "parent": "decentralised society (DeSoc)",
        "description": "Virtual communities that come together around a common purpose, coordinated by voting through smart contracts on a public blockchain. These communities feature collective ownership and decision-making.",
        "history": [
            "DAOs draw on a long tradition of cooperatives, intentional communities, solidarity networks, mutual aid, decmocratic ownership, and other examples of economic coordination.",
            "1844 - The Rochdale Society of Equitable Pioneers, a British consumer cooperative, is formed to exapand access to quality food and provisions among skilled workers forced out of work by mechanisation.",
            "1929 - During the Great Depression, Americans carved out alternative networks of barter and value exchange, such as The Unemployed Exchange Association of Oakland."
        ],
        "resources": [
            {
                "name": "A Prehistory of DAOs (2021) - Kei Kreutler",
                "url": "A Prehistory of DAOs"
            },
            {
                "name": "What Co-ops and DAOs Can Learn From Each Other (2022) - Austin Robey",
                "url": "https://www.fwb.help/wip/what-co-ops-and-daos-can-learn-from-each-other"
            }
        ],
        "nodeType": "core"
    }
};

const protocolDao = {
    "data": {
        "id": "protocol DAOs",
        "parent": dao.data.id,
        "description": "A DAO that votes to decide changes in a technology protocol.",
        "projects": [
            {
                "name": "MakerDAO",
                "url": "https://makerdao.com/en/"
            },
            {
                "name": "Uniswap DAO",
                "url": "https://docs.uniswap.org/protocol/reference/Governance/governance-reference",
            },
            {
                "name": "GnosisDAO",
                "url": "https://gnosis.io/gnosisdao/"
            }
        ],
        "nodeType": "application"
    }
};

const collectorDao = {
    "data": {
        "id": "collector DAOs",
        "parent": dao.data.id,
        "description": "A group of collectors who pool their funds to acquire ownership of NFTs or real-world art.",
        "projects": [
            {
                "name": "PleasrDAO",
                "url": "https://pleasr.org/"
            },
            {
                "name": "Flamingo DAO",
                "url": "https://flamingodao.xyz/"
            },
        ],
        "nodeType": "application"
    }
};

const investmentDao = {
    "data": {
        "id": "investment DAOs",
        "parent": dao.data.id,
        "description": "A DAO that invests in companies in order to generate gains and/or influence decision-making.",
        "projects": [
            {
                "name": "Krause House",
                "url": "https://www.krausehouse.club/"
            },
        ],
        "nodeType": "application"
    }
};

const grantDao = {
    "data": {
        "id": "grant DAOs",
        "parent": dao.data.id,
        "description": "A DAO that pools and distributes funds to innovative projects that serve the decentralised community.",
        "projects": [
            {
                "name": "Aave Grants DAO",
                "url": "https://aavegrants.org/"
            },
            {
                "name": "MolochDAO",
                "url": "https://molochdao.com/"
            },
            {
                "name": "OceanDAO Grants",
                "url": "https://oceanprotocol.com/dao"
            }
        ],
        "nodeType": "application"
    }
};

const professionalDao = {
    "data": {
        "id": "professional DAOs",
        "parent": dao.data.id,
        "description": "A collective of professionals in a common field, who share skills and resources to collaborate on projects.",
        "projects": [
            {
                "name": "RaidGuild",
                "url": "https://www.raidguild.org/#manifesto"
            },
        ],
        "nodeType": "application"
    }
};

const socialDao = {
    "data": {
        "id": "social DAOs",
        "parent": dao.data.id,
        "description": "A DAO that votes to decide changes in a technology protocol.",
        "projects": [
            {
                "name": "Friends With Benefits",
                "url": "https://www.fwb.help/"
            },
            {
                "name": "Seed Club",
                "url": "https://www.seedclub.xyz/"
            },
        ],
        "nodeType": "application"
    }
};

export default [
    dao,
    protocolDao,
    grantDao,
    socialDao,
    professionalDao,
    investmentDao,
    collectorDao,
    { "data": { "source": grantDao.data.id, "target": "public goods funding", "id": "dao_pub" }, "group": "edges" },
];