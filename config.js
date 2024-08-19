const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "x6NDzDbD#4bOJU-cJGxuETewH3IRwZvZSnWwXW0Uzj-iIW1NLTjU",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/ca80ac72e58dc131fd32c.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*_Hello there 👋_*\n\n*_🙌 I am SADARU-MD WhatsApp User Bot_*\n\n\n🧑‍💻 *Owner:* Sadaru\n\n📞 *Owner Number:* +94701814946\n\n📌 *Group Link:* https://chat.whatsapp.com/DTy4uNnbcO6FLkJJ0uIM1y\n\n🔗 *Github:* https://github.com/Sadarulk/SADARU-MD\n\n> SADARU-MD WA BOT 2024",
MODE: process.env.MODE || "group",
};
