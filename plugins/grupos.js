let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*Hola personita 👉👈 ¿quieres que aparezca tú grupo en la lista?*

*Puedes decirme al siguiente número:*
Wa.me/593968585383

*_➡️ GRUPO(S) EN DONDE ESTÁ EL BOT:_*
✅ https://chat.whatsapp.com/BlasuG7z02d16wEaCf61pa

*_➡️GRUPO(S) DE COLABORACIÓN:_*
✅ https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈', 'status@broadcast')
}
handler.command = /^(grupos|gruposofc|gruposofc)$/i

module.exports = handler
