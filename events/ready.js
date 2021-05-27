const { MessageEmbed } = require("discord.js");
module.exports = async (client) => {
    client.user.setStatus('online')
  function randomStatus() {
      let status = [
        `Kita hidup di masa kalau salah kena marah, pas bener dibilang tumben.`,
        `Nggak ada bahu pacar? Tenang aja, masih ada bahu jalan buat nyandar.`,
        `Jodoh memang enggak kemana, tapi saingannya ada dimana-mana.`,
        `Perasaan aku salah terus di matamu. Kalau gitu, besok aku pindah ke hidungmu.`,
        `Jomblo tidak perlu malu, jomblo bukan berarti tidak laku, tapi memang tidak ada yang mau.`,
        `Jangankan pacaran, nyambungin ke hotspot teman aja sering diputusin.`,
        `Berakit-rakit kita ke hulu, berenang-renang ke tepian. Gimana mau ke penghulu kalo sampai sekarang belum jadian.`,
        `Susah ternyata kalau punya mantan yang cantik, susah mau jelek-jelekinnya gimana.`,
        `Cara terbaik dan ampuh untuk membuat orang mengingat kita adalah dengan meminjam uang.`,
        `Cowoknya cool, ceweknya hot, anaknya pasti dispenser.`,
        `Kamu baper, ya? Makanya kalau chat pakai jari ngga usah pake hati.`,
        `Sekarang kalau mau curhat ke teman harus pake No Drop, biar curhatannya enggak bocor ke mana-mana.`,
        `Jika doamu belum terkabul maka bersabar, ingatlah bahwa yang berdoa bukan cuma kamu!`,
        `Masih berharap dan terus berharap lama-lama aku jadi juara harapan.`,
        `Manusia boleh berencana, tapi akhirnya saldo juga yang menentukan.`,
        `Statusnya rohani, kelakuannya rohalus.`,
        `Aku juga pernah kaya, waktu gajian.`,
        `Aku diputusin sama pacar karena kita beda keyakinan. Aku yakin kalau aku ganteng, tapi dia enggak.`,
        `Masa depanmu tergantung pada mimpimu, maka perbanyaklah tidur.`,
        `Wanita mendambakan pria ‘baik’, baik yang kasih uang bulanan, baik yang ngasih skincare mahal.`,
        `Tau alasan wanita mudah tergoda rayuan para buaya? Sebab, mereka percaya lidah buaya itu banyak manfaatnya.`,
        `Jangan ulangi kesalahan yang sama, masih banyak jenis kesalahan lain yang perlu dicoba.`,
        `Kaliann tahu? Sebenarnya, pacar orang adalah pacar kita juga, karena kita juga orang.`,
        `Kebahagiaan tidak bisa dibeli dengan uang, tapi punya uang lebih enak daripada tidak punya uang.`,
        `Tadi saya beli obat tidur. Pas dibawa pulang harus pelan-pelan, soalnya takut obatnya bangun.`,
        `Tadi ada ibu kejambret, cuma saya nggak bisa nolongin, soalnya saya lihat di tv.`,
        `Penyesalan itu datangnya di akhir, kalau datang di awal namanya pendaftaran.`
      ]
      let rstatus = Math.floor(Math.random() * status.length);

      client.user.setActivity(status[rstatus], {type: 'WATCHING'});
  }; setInterval(randomStatus, 10000)

console.log(`${client.user.username} On!`);
};