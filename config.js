const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "KAVI-EXE=tdgVHZoC#OvdN4j71X4BhC3y0Lnl2U33lBa8ZwyyT2T90EDIp0XY"
AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || "true",
MODE: process.env.MODE || "public",
ALWAYS_ONLINE : process.env.ALWAYS_ONLINE || "false",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`SEEN YOUR STATUS BY SHENu Whatsapp Bot🗿🍷🍒`",
ANTI_CALL: process.env.ANTI_CALL || "false",
};
