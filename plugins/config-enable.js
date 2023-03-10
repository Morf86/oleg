let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `*СПИСОК ФУНКЦИЙ*`,
rows: [
{title: "✨ | ПРИВЕТСТВИЕ", description: "ВКЛЮЧЕНИЕ ПРИВЕТСТВИЯ В ГРУППЕ", rowId: `${usedPrefix + command} приветствие`},
{title: "🌎 | MODO PUBLICO", description: "EL BOT SE VUELVE DE USO PUBLICO Y/O PRIVADO", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 18+", description: "ВКЛЮЧЕНИЕ КОМАНД +18", rowId: `${usedPrefix + command} 18+`},
{title: "🔗 | АНТИССЫЛКА", description: "ВКЛЮЧЕНИЕ БАНА ЗА ССЫЛКИ НА ГРУППЫ ВАТСАП", rowId: `${usedPrefix + command} антиссылка`},   
{title: "🔗 | АНТИССЫЛКА 2", description: "ВКЛЮЧЕНИЕ БАНА ЗА ЛЮБЫЕ ИНТЕРНЕТ ССЫЛКИ", rowId: `${usedPrefix + command} антиссылка2`},    
{title: "🔎 | ОБНАРУЖЕНИЕ", description: "ВКЛЮЧЕНИЕ ОБНАРУЖЕНИЯ ЛЮБЫХ ИЗМЕНЕНИЙ В ГРУППЕ", rowId: `${usedPrefix + command} обнаружение`},      
{title: "❗ | АДМИН", description: "ВКЛЮЧЕНИЕ ФУНКЦИЙ АДМИНИСТРАТОРА У БОТА", rowId: `${usedPrefix + command} ботадмин`},    
{title: "☑️ | AUTOREAD", description: "MARCA AUTOMATICAMENTE LAS CONVERSACIONES COMO LEIDO", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | ГОЛОСОВЫЕ", description: "ВКЛЮЧЕНИЕ ГОЛОСОВЫХ СООБЩЕНИЙ У БОТА", rowId: `${usedPrefix + command} голосовые`},
{title: "👾 | АВТОСТИКЕР", description: "ВКЛЮЧЕНИЕ ФУНКЦИИ АВТОМАТИЧЕСКОГО СОЗДАНИЯ СТИКЕРОВ ИЗ МЕДИАФАЙЛОВ", rowId: `${usedPrefix + command} автостикер`},
{title: "💬 | PCONLY", description: "EL BOT SOLO RESPONDERA A LOS COMANDOS SI ES UN CHAT PRIVADO", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | GCONLY", description: "EL BOT SOLO RESPONDERA A LOS COMANDOS SI ES UN GRUPO", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | АНТИРАЗ", description: "ВКЛЮЧЕНИЕ ФУНКЦИИ АНТИ ОДНОРАЗОВОГО ПРОСМОТРА", rowId: `${usedPrefix + command} антираз`},
{title: "📵 | АНТИЗВОНОК", description: "ВКЛЮЧИТЬ ФУНКЦИЮ ЗАПРЕТА ЗВОНКОВ", rowId: `${usedPrefix + command} антизвонок`},
{title: "💬 | АНТИЛИЧКА", description: "ЗАПРЕТ СООБЩЕНИЙ В ЛИЧКУ БОТУ", rowId: `${usedPrefix + command} антиличка`},
{title: "🤬 | АНТИМАТ", description: "ФУНКЦИЯ УДАЛЕНИЯ ЗА МАТ ИЗ ГРУППЫ", rowId: `${usedPrefix + command} антимат`},
{title: "🕸️ | ANTITRABAS", description: "ACTIVA O DESACTIVA EL ANTI BINARIOS O TRABAS", rowId: `${usedPrefix + command} antitraba`},
{title: "🥸 | ASISTENTE", description: "ACTIVA O DESACTIVA EL ASISTENTE DE GRUPOS 🥸", rowId: `${usedPrefix + command} asistente`},
{title: "🎭 | ASISTENTE GRUPOSROL", description: "ACTIVA O DESACTIVA EL ASISTENTE DE GRUPOS DE ROL", rowId: `${usedPrefix + command} gruposrol`},
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
┣ ඬ⃟ℹ️ _${usedPrefix}включить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *приветствие*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *public*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *18+*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *18+*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиссылка2*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *обнаружение*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *обнаружение*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *ботадмин*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *ботадмин*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *pconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *gconly*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *autoread*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *голосовые*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *голосовые*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антираз*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антираз*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *автостикер*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антизвонок*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антизвонок*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антиличка*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антиличка*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *антимат*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *антимат*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *antitraba*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *asistente*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *asistente*_
┣ ඬ⃟ℹ️ _${usedPrefix}включить *gruposrol*_
┣ ඬ⃟ℹ️ _${usedPrefix}выключить *gruposrol*_
┗━━━━━━━━━━━━━┛`,
title: null,
buttonText: "*ВЫБРАТЬ КОМАНДУ*",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружение':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'удалить':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'антиудаление':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'вгруппе':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'антираз':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case '18+':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'голосовые':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ботадмин':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'autoread':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'антизвонок':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'антиличка':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'антимат':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'asistente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.asistente = isEnable
break
case 'gruposrol':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.gruposrol = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
throw false
}
conn.sendButton(m.chat, `🗂️ ФУНКЦИЯ: ${type} 
🎚️ ESTADO: ${isEnable ? 'ВЫКЛЮЧЕНА' : 'ВКЛЮЧЕНА'}
📣 PARA: ${isAll ? 'ДЛЯ БОТА' : isUser ? '' : 'ДЛЯ ГРУППЫ'}`, author, null, [[`${isEnable ? '✖️ ВЫКЛЮЧЕНА ✖️' : '✔️ ВКЛЮЧЕНА ✔️'}`, `${isEnable ? `#выключить ${type}` : `#включить ${type}`}`], ['👾 ГЛАВНОЕ МЕНЮ 👾', '#меню']], m)}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вкл|выкл)ючить|(tru|fals)e|(turn)?[01])$/i
export default handler
