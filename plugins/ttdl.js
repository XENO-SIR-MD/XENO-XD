const { cmd, commands } = require("../command");
const axios = require("axios");

cmd({
    pattern: "tt",
    react: '🎵',
    alias: ["tiktok", "tiktokdl"],
    desc: "Download TikTok video",
    category: "media",
    filename: __filename
},
async(robin, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        if (!q) return reply("Please provide a TikTok URL");
        
        if (!q.includes("tiktok.com")) return reply("❌ Invalid TikTok URL");
        
        await reply("📥 Processing TikTok video...");
        
        const apiUrl = `https://apis.davidcyriltech.my.id/download/tiktok?url=${encodeURIComponent(q)}`;
        const response = await axios.get(apiUrl);
        
        if (!response.data.success || !response.data.result?.video) {
            return reply("❌ Failed to fetch TikTok video");
        }
        
        const result = response.data.result;
        
        // Format info message
        const infoMessage = `
╔══✦❘༻ *𝗫𝗘𝗡𝗢 𝗫𝗗* ༺❘✦══╗
┇  🎵 *TIKTOK DOWNLOAD* 🎵
┇╭───────────────────
┇│•📹 Type: ${result.type ? result.type.toUpperCase() : 'UNKNOWN'}
┇│•💬 Description: ${result.desc || 'No description'}
┇│•👤 Author: ${result.author?.nickname || 'Unknown'}
┇│•🔗 Link: ${q}
╰─・─・─・─・─・─・─・─╯
┇ *Statistics:*
┇ • Likes: ${result.statistics?.likeCount || '0'}
┇ • Comments: ${result.statistics?.commentCount || '0'}
┇ • Shares: ${result.statistics?.shareCount || '0'}
╰─────────────────────────
> POWERED BY 𝗫𝗘𝗡𝗢 𝗫𝗗`.trim();

        // Send author avatar with info
        if (result.author?.avatar) {
            await robin.sendMessage(
                from,
                {
                    image: { url: result.author.avatar },
                    caption: infoMessage
                },
                { quoted: mek }
            );
        } else {
            await reply(infoMessage);
        }

        // Send video
        await robin.sendMessage(
            from,
            {
                video: { url: result.video },
                mimetype: "video/mp4",
                caption: "🎬 TikTok Video - 𝗫𝗘𝗡𝗢 𝗫𝗗"
            },
            { quoted: mek }
        );

    } catch (error) {
        console.error("TikTok Error:", error);
        reply("❌ Error downloading TikTok video. Please try again.");
    }
});