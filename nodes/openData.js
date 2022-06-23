import dataAnalysis from "./openData/dataAnalysis.js";
import dataMining from "./openData/dataMining.js";
import datasets from "./openData/datasets.js";

const openData = {
    "data": {
        "id": "open data",
        "parent": "open data",
        "description": "Data which is openly accessible, exploitable and shared by anyone for any purpose.",
        "history": [
            "1942 - Robert King Merton explained importance that result of research should be open",
            "1995 - Term open data appeared first time",
            "2007 - While meeting of thirty thinkers aim to define concept of open public data ",
            "2009 - Nobel prize to Elinor Orstrom who showed the specificity of information commons",
        ],
        "projects": [
            {
                "name": "GitHub: Where the world builds software · GitHub",
                "url": "https://github.com/"
            },
            {
                "name": "Alphabet",
                "url": "https://abc.xyz/"
            },
            {
                "name": "Kaggle: Your Machine Learning and Data Science Community",
                "url": "https://www.kaggle.com/"
            },
            {
                "name": "dev.socrata.com/",
                "url": "https://dev.socrata.com/"
            },
        ],
        "labs": [
            {
                "name": "LinkedScience",
                "url": "http://linkedscience.org/data",
            },
            {
                "name": "www.systemanaturae.org/",
                "url": "https://www.systemanaturae.org/"
            },
            {
                "name": "The Dataverse Project - Dataverse.org",
                "url": "https://dataverse.org/"
            },
            {
                "name": "The Human Genome Project",
                "url": "https://www.genome.gov/human-genome-project"
            },
            {
                "name": "Open Government - Data.gov",
                "url": "https://data.gov/open-gov/"
            },
        ],
        "people": [
            {
                "name": "Max Roser – Researcher, Founder Our World in Data",
                "url": "https://www.maxroser.com/"
            },
            {
                "name": "Jimmy Wales | Free knowledge for free minds",
                "url": "https://jimmywales.com/)"
            },
            {
                "name": "Tim Berners-Lee",
                "url": "https://www.w3.org/People/Berners-Lee/"
            },
        ],
        "involvement": [
            {
                "name": "Where can you contribute to open data? Yes, you! – Lost Boy",
                "url": "https://blog.ldodds.com/2017/05/25/where-can-you-contribute-to-open-data-yes-you/"
            },
            {
                "name": "Starting an open data Initiative | Data",
                "url": "http://opendatatoolkit.worldbank.org/en/starting.html"        
            },
        ],
        "resources": [],
        "nodeType": "core"
    }
};


const dataAvail = {
    "data": {
        "id": "data availability",
        "parent": "open data",
        "projects": [
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
        "nodeType": "core"
    },
};

const datasets_deeplearning = {
    "data": {
        "source": "Datasets",
        "target": "Deep learning",
        "id": "datasets_deeplearning"
    },
    "group": "edges"
}

export default [
    openData,
    dataAvail,
    {
        "data": {
            "source": "open data",
            "target": "data sovereignty",
            "id": "opendata_sov" 
        },
        "group": "edges"
    },
    datasets_deeplearning
].concat(dataAnalysis)
    .concat(dataMining)
    .concat(datasets)
    .flat();
