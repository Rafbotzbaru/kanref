let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Maap Abg Ganteng Tidak Terkalahkan Didunia😎\nUdh On Bg Sory Barusan Habis Turu Bg🗿* ')
}

handler.tags = ['main']
handler.command = /^(kannaon)$/i

handler.admin = true

export default handler
