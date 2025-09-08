const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu",
    alias: ["allmenu","fullmenu"],
    use: '.menu',
    desc: "Show all bot commands",
    category: "menu",
    react: "📜",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 🚀 *${config.BOT_NAME}* 〕━━┈⊷
┃◈╭─────────────────·๏
┃◈┃• 👑 *Owner :* ${config.OWNER_NAME}
┃◈┃• ⚙️ *Prefix :* [${config.PREFIX}]
┃◈┃• 🌐 *Platform :* vercel
┃◈┃• 📦 *Version :* 5.0.0 Pro
┃◈┃• ⏱️ *Runtime :* ${runtime(process.uptime())}
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷

╭━━〔 📥 *MENU* 〕━━┈⊷
┃◈╭─────────────────·๏────·๏
┃◈┃• 🧠 repo
┃◈┃• 🤖 song
┃◈┃• 🏓 ping
┃◈┃• 🏓 update
┃◈┃• 🚀 speed
┃◈┃• 📡 live
┃◈┃• 💚 alive
┃◈┃• ⏱️ runtime
┃◈┃• ⏳ uptime
┃◈┃• 📦 url
┃◈┃• 👑 owner
┃◈┃• 📜 menu
┃◈┃• 📜 test
┃◈┃• 🔄 restart
┃◈╰─────────────────┈⊷
╰━━━━━━━━━━━━━━━━━━━┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://res.cloudinary.com/dgy2dutjs/image/upload/v1751624587/url.crissvevo.co.tz/IMG_2353_fze42l.jpg' },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '',
                        newsletterName: config.BOT_NAME,
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`❌ Error: ${e}`);
    }
});
