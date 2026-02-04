const { cmd } = require('../command');
const axios = require('axios');

cmd({
    pattern: "repo",
    alias: ["sc", "script", "info"],
    desc: "Fetch GitHub repository information",
    category: "info",
    react: "💻",
    filename: __filename
}, async (conn, mek, m, { reply, sender, from }) => {
    const githubRepoURL = 'https://github.com/XENO-SIR-MD';
    const channelLink = "https://instagram.com/4dix_thyan_";

    try {
        const match = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);
        if (!match) return reply("❌ Invalid GitHub URL.");

        const [, username, repoName] = match;
        const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);
        const data = response.data;

        const repoMessage = `
╔═══════════════════╗
║  *XENO MD*
╠═══════════════════╣
║ 𝓑𝓸𝓽 𝓝𝓪𝓶𝓮   : ${data.name}
║ 𝓞𝔀𝓷𝓮𝓻      : ${data.owner.login}
║ ★ 𝓢𝓽𝓪𝓻𝓼    : ${data.stargazers_count}
║ 𝓕𝓸𝓻𝓴𝓼     : ${data.forks_count}
║ 𝓓𝓮𝓼𝓬𝓻𝓲𝓹𝓽𝓲𝓸𝓷: ${data.description || 'No description'}
║ 𝓡𝓮𝓹𝓸 𝓛𝓲𝓷𝓴  : ${data.html_url}
╚══════════════════╝
        `.trim();

        const messageOptions = {
            image: { 
                url: "https://files.catbox.moe/jhdz71.jpeg" 
            },
            caption: repoMessage,
            footer: "Choose an option below 👇",
            buttons: [
                {
                    buttonId: `repo`,
                    buttonText: { displayText: "🌟 GitHub Repo" },
                    type: 1
                },
                {
                    buttonId: `channel`,
                    buttonText: { displayText: "XENO OFFICIAL" },
                    type: 1
                }
            ],
            headerType: 4,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 1000,
                isForwarded: true,
                externalAdReply: {
                    title: "XENO XD",
                    body: "Powered by 𝗫𝗘𝗡𝗢 𝗫𝗗",
                    thumbnailUrl: "https://files.catbox.moe/jhdz71.jpeg",
                    mediaType: 1,
                    mediaUrl: githubRepoURL,
                    sourceUrl: githubRepoURL,
                    showAdAttribution: true
                },
                // Newsletter context integration
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363429395749118@newsletter',
                    newsletterName: "XENO XD",
                    serverMessageId: 143,
                }
            }
        };

        await conn.sendMessage(from, messageOptions, { quoted: mek });
    } catch (err) {
        console.error("Repo Command Error:", err);
        reply(`❌ Error fetching repository information: ${err.message}`);
    }
});