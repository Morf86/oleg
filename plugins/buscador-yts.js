import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
if (!text) throw '*[βINFOβ] INSERTE EL NOMBRE DE ALGUN VIDEO CANAL DE YOUTUBE*'
const { video, channel } = await youtubeSearch(text)
let teks = [...video, ...channel].map(v => {
switch (v.type) {
case 'video': return `
π *${v.title}* (${v.url})
β Duracion: ${v.durationH}
β²οΈ Publicado ${v.publishedTime}
ποΈ ${v.view} vistas
`.trim()
case 'channel': return `
π *${v.channelName}* (${v.url})
π§βπ€βπ§ _${v.subscriberH} suscriptores_
π₯ ${v.videoCount} videos
`.trim()
}
}).filter(v => v).join('\n\n========================\n\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i
export default handler
