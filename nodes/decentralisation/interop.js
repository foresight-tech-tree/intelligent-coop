const interop = {
    "data": {
        "id": "interoperability",
        "parent": "decentralised infrastructure",
        "nodeType": "core",
    }
};

const commonDataFormat = {
    "data": {
        "id": "common data formats",
        "parent": interop.data.id,
        "description": "An open file format is a file format for storing digital data, defined by a openly published specification usually maintained by a standards organization, and which can be used and implemented by anyone. Open file format is licensed with open license.",
        "projects": [
            {
                "name": "Network Common Data Form (netCDF)",
                "url": "https://www.unidata.ucar.edu/software/netcdf/"
            }
        ],
        "resources": [
            {
                "name": "Open file format (Wikipedia)",
                "url": "https://en.wikipedia.org/wiki/Open_file_format"
            },
            {
                "name": "Open Data Handbook",
                "url": "http://opendatahandbook.org/guide/en/appendices/file-formats/"
            },
            {
                "name": "InterPlanetary Linked Data (IPLD)",
                "url": "https://ipld.io/"
            },
            {
                "name": "Computable Document Format (Wolfram)",
                "url": "https://www.wolfram.com/cdf/"
            }
        ],
        "nodeType": "core",
    }
};

export default [
    interop,
    commonDataFormat,
    { "data": { "source": interop.data.id, "target": "open data", "id": "opendata_interop" }, "group": "edges" },
];