let handler = async m => m.reply(`
⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡

*Esta Edición del Bot no está disponible por el momento.* 

⚡▁ ▂ ▄ ▅ ▆ ▇ █ 🚆 █ ▇ ▆ ▅ ▄ ▂ ▁⚡
                            🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^Procesobot|procesobot|PROCESOBOT|Botproceso|botproceso|BOTPROCESO|procesodelbot$/i

module.exports = handler
