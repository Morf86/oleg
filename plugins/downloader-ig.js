/* Creado por https://github.com/FG98F */

import fetch from 'node-fetch'
import instagramGetUrl from 'fg-ig'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!(args[0])) throw `*[βINFOβ] INGRESE UN ENLACE DE INSTAGRAM, EJEMPLO: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*`
let results = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${results}`)).text()
let txt = `π *Url:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, results, 'error.mp4', txt, m)}
handler.command =/^(instagram|ig(dl)?)$/i
handler.dfail = null
export default handler

/*import hx from 'hxz-api'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!(args[0])) throw `*[βππππβ] πΈπ½πΆππ΄ππ΄ ππ½ π΄π½π»π°π²π΄ π³π΄ πΈπ½πππ°πΆππ°πΌ, π΄πΉπ΄πΌπΏπ»πΎ: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBg8CR/?utm_source=ig_web_copy_link*`
hx.igdl(args[0]).then(async (r) => {
for (let i = 0; i < r.medias.length; i++) {
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${r.medias[i].url}`)).text()
let txt = `π *Url:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, r.medias[i].url, '', txt, m)
}})}
handler.command = /^instagramdl|instagram|igdl|ig$/i
handler.dfail = null
export default handler*/
