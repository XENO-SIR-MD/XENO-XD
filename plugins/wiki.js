const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");
const { translate } = require("@vitalets/google-translate-api");

// Newsletter context information
const newsletterContext = {
  mentionedJid: [],
  forwardingScore: 1000,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: "120363429395749118@newsletter", // Example newsletter JID
    newsletterName: "𝗫𝗘𝗡𝗢 𝗫𝗗",
    serverMessageId: 143,
  },
};

cmd({
  pattern: "wikipedia",
  alias: ["wiki"],
  react: "📖",
  desc: "Fetch Wikipedia information and translate to English.",
  category: "information",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
  try {
    if (!q) {
      return await conn.sendMessage(
        from,
        { text: "Please provide a search query for Wikipedia.", contextInfo: newsletterContext },
        { quoted: mek }
      );
    }

    await conn.sendMessage(
      from,
      { text: "🔍 Searching Wikipedia...", contextInfo: newsletterContext },
      { quoted: mek }
    );

    const response = await fetchJson(`https://api.siputzx.my.id/api/s/wikipedia?query=${encodeURIComponent(q)}`);

    if (!response.status || !response.data) {
      return await conn.sendMessage(
        from,
        { text: "❌ No results found for your query.", contextInfo: newsletterContext },
        { quoted: mek }
      );
    }

    const { wiki, thumb } = response.data;

    // Translate the Wikipedia text to English
    const translated = await translate(wiki, { to: "en" });

    let message = `📖 *Wikipedia Result*

📝 *Query:* ${q}

${translated.text}\n\nBY 𝗫𝗘𝗡𝗢 𝗫𝗗`;

    if (thumb) {
      await conn.sendMessage(
        from,
        {
          image: { url: thumb },
          caption: message,
          contextInfo: newsletterContext,
        },
        { quoted: mek }
      );
    } else {
      await conn.sendMessage(
        from,
        { text: message, contextInfo: newsletterContext },
        { quoted: mek }
      );
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(
      from,
      { text: `❎ An error occurred: ${error.message}`, contextInfo: newsletterContext },
      { quoted: mek }
    );
  }
});