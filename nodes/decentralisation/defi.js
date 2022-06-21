const defi = {
    "data": {
        "id": "decentralised finance (DeFi)",
        "parent": "decentralised infrastructure",
        "description": "Financial products and services that do not rely on a central authority or middleman."
    }
};

const dex = {
    "data": {
        "id": "decentralised exchange (DEX)",
        "parent": defi.data.id,
        "description": "A peer-to-peer marketplace where users can trade cryptocurrencies in a non-custodial manner without the need for an intermediary to facilitate the transfer and custody of funds.",
        "projects": [
            {
                "name": "Uniswap Protocol",
                "url": "https://uniswap.org/"
            },
            {
                "name": "Curve Finance",
                "url": "https://curve.fi/"
            },
            {
                "name": "PancakeSwap",
                "url": "https://pancakeswap.finance/"
            },
            {
                "name": "Balancer",
                "url": "https://balancer.fi/"
            },
        ]
    }
};

const stablecoins = {
    "data": {
        "id": "stablecoins",
        "parent": defi.data.id,
        "description": "Cryptocurrencies designed to decrease the volatility of the coin's price, relative to some “stable” asset or basket of assets.",
        "projects": [
            {
                "name": "Maker Dai",
                "url": "https://makerdao.com/en/"
            },
            {
                "name": "RAI",
                "url": "https://reflexer.finance/"
            },
            {
                "name": "Tether",
                "url": "https://tether.to/"
            },
            {
                "name": "USDC",
                "url": "https://www.circle.com/en/usdc"
            },
        ]
    }
};

const credit = {
    "data": {
        "id": "decentralised credit platforms",
        "parent": defi.data.id,
        "description": "Decentralized lending platforms provide loans to businesses, or the public with no intermediaries are present. These also allow lendres to earn interest on supplied stablecoins and cryptocurrencies.",
        "projects": [
            {
                "name": "MakerDAO",
                "url": "https://makerdao.com/en/"
            },
            {
                "name": "TrueFi",
                "url": "https://truefi.io/"
            },
            {
                "name": "Yield Protocol",
                "url": "https://yield.credit/"
            },
            {
                "name": "Aave",
                "url": "https://aave.com/"
            },
            {
                "name": "Compound",
                "url": "https://compound.finance/"
            },
            {
                "name": "C.R.E.A.M",
                "url": "https://cream.finance/"
            },
        ]
    }
};

const derivative = {
    "data": {
        "id": "decentralised derivative platforms",
        "parent": defi.data.id,
        "description": "DeFi derivatives are financial contracts which track or provide exposure to an underlying asset.",
        "projects": [
            {
                "name": "dYdX",
                "url": "https://dydx.exchange"
            },
            {
                "name": "Opyn",
                "url": "https://www.opyn.co/"
            },
            {
                "name": "Synthetix",
                "url": "https://synthetix.io/"
            },
        ]
    }
};

const insurance = {
    "data": {
        "id": "decentralised insurance platforms",
        "parent": defi.data.id,
        "description": "An insurance policy that relies on its community of users to dictate premiums and orchestrate payouts.",
        "projects": [
            {
                "name": "InsurAce",
                "url": "https://www.insurace.io/"
            },
            {
                "name": "Nexus Mutual",
                "url": "https://nexusmutual.io/"
            },
            {
                "name": "Opium",
                "url": "https://opium.finance/"
            },
        ]
    }
};

const prediction = {
    "data": {
        "id": "decentralised prediction markets",
        "parent": defi.data.id,
        "description": "Prediction market, facilitated by smart contracts, which allow users to trade the outcome of events.",
        "projects": [
            {
                "name": "Augur",
                "url": "https://augur.net/"
            },
            {
                "name": "Polymarket",
                "url": "https://polymarket.com/"
            }
        ]
    }
}

export default [
    defi,
    dex,
    stablecoins,
    credit,
    derivative,
    insurance,
    prediction
];