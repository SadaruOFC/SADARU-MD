const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "x6NDzDbD#4bOJU-cJGxuETewH3IRwZvZSnWwXW0Uzj-iIW1NLTjU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/ca80ac72e58dc131fd32c.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello there 🙌 I am SADARU-MD WhatsApp User bot.",
MENU_MSG: process.env.MENU_MSG || "* .alive",
};
