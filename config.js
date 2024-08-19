const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qdEF2IpA#F87Sk6CpB_vs04g3MMrF7NdDM7ZmcFHoCBxz3TU5IQE",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/ca80ac72e58dc131fd32c.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello user, I am SADARU-MD.I am alive now.",
};
