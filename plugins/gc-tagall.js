let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `@𝐆𝐡𝐨𝐬𝐭.𝐫𝐞𝐚𝐩𝐞𝐫𝐬𝐬: ${pesan}`
let teks = `🌱 𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞 𝐩𝐥𝐚𝐧𝐭𝐚 𝐝𝐞 𝐦𝐫𝐝𝐚𝐚 🌱  \n\n❏ ${oi}\n❏ 🫶🏻 ➢ 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:: \n`
for (let mem of participants) {
teks += `👻  @${mem.id.split('@')[0]}\n`}
teks += `🐾𝐆𝐡𝐨𝐬𝐭`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.register = true
export default handler
