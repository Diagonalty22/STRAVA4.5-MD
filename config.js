const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "🕊乂𝕊𝕒𝕟𝕕𝕣𝕠𝕚𝕕 4.5"
global.ownerName = "𝐃𝐢𝐤𝐳乂𝐥𝐚𝐧𝐳 [𝕊𝕋]"
global.ownerBot = "6285601800364"
global.ownerNumber = ["6285601800364"] 

global.Auto_Typing = false // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = true// auto read messages

// Auto Downloader Tiktok
global.TiktokAutoDownload = true

// Admin Create Panel
global.domain = "https://example.my.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "🕊乂dikz YT" // Ganti Nama Store Atau nama Host Lu
global.locID = '1'
global.eggID = '15'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})