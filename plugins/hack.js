const { smd, prefix, Config, sleep } = require('../lib/functions');  // Import sleep from functions.js
const { cmd, commands } = require('../command');
const config = require('../config');

cmd({
    pattern: "hack",
    desc: "Check bot online or no.",
    category: "main",
    filename: __filename
},

    async (conn, mek, m, { from, reply, pushname }) => {
        try {
            if (!mek) return reply("Error: Message object is missing.");

            await conn.sendMessage(from, {
                image: { url: config.ALIVE_IMG },
                caption: `*HEY DEAR* ${pushname}\n*𝗫𝗘𝗡𝗢 𝗫𝗗 INJECTING...🤫*`
            }, { quoted: mek });

            await sleep(2000);  // Sleep for 2 seconds

            await conn.sendMessage(from, { text: " █ 10%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ 20%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ 30%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ 40%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ █ 50%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ █ █ 60%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ █ █ █ 70%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ █ █ █ █ 80%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ █ █ █ █ █ 90%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: " █ █ █ █ █ █ █ █ █ █ 100%" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: "System Hijacking in Progress... \nConnecting to Server" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: "Device Successfully Connected... \nReceiving All Data..." }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: "Data Hijacked from Device 100% Completed \nKilling all Evidence... Killing all Malwares..." }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: "SYSTEM HACKING COMPLETED" }, { quoted: mek });
            await sleep(2000);  // Sleep for 2 seconds

            await conn.sendMessage(from, { text: "SENDING LOG DOCUMENTS NOW..." }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            await conn.sendMessage(from, { text: "Successfully Sent Data and Connection has Been Established" }, { quoted: mek });
            await sleep(1000);  // Sleep for 1 second

            return await conn.sendMessage(from, { text: 'BACKLOGS CLEARED AND NO EVIDENCE LEFT' }, { quoted: mek });

        } catch (e) {
            console.error("Error sending message:", e);
            reply(`*HEY DEAR* ${pushname}\n*i got all your data *`);
        }
    });