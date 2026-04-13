// ========== БАЗА КАРТ ==========
const ALL_CARDS = [
    { id: "osk01", name: "Осколок", emoji: "⚔️", rank: "A+", set: "Эхокалипсис", rankLabel: "A+", color: "#772ce8", rankOrder: 3, image: "images/osk.png", canUpgrade: false, animImage: null },

    // X

    { id: "Xcc01", name: "C.C.", emoji: "🍊", rank: "X", set: "X", rankLabel: "X", color: "#4984b2", rankOrder: 1, image: "images/X/cc01.png", canUpgrade: false, animImage: null },
    { id: "Xreze01", name: "Резе", emoji: "🍊", rank: "X", set: "X", rankLabel: "X", color: "#4984b2", rankOrder: 1, image: "images/X/reze01.png", canUpgrade: true, animImage: "images/events/spring/anim/reze01.gif" },

    // Лазурный путь

    // S

    { id: "LPSagir01", name: "Агир", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSagir01.png", canUpgrade: false, animImage: null },
    { id: "LPSbremerton01", name: "Бремертон", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSbremerton01.png", canUpgrade: false, animImage: null },
    { id: "LPSbrennus01", name: "Бреннус", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSbrennus01.png", canUpgrade: false, animImage: null },
    { id: "LPSdjersi01", name: "Нью-Джерси", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSdjersi01.png", canUpgrade: false, animImage: null },
    { id: "LPShakyhoy01", name: "Хакухоу", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPShakyhoy01.png", canUpgrade: false, animImage: null },
    { id: "LPSmarbelhed01", name: "Марблхед", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSmarbelhed01.png", canUpgrade: false, animImage: null },
    { id: "LPSmesti", name: "Месть королевы Анны", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSmesti.png", canUpgrade: false, animImage: null },
    { id: "LPSmusashi01", name: "Мусаши", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSmusashi01.png", canUpgrade: false, animImage: null },
    { id: "LPSmusashi02", name: "Мусаши", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSmusashi02.png", canUpgrade: false, animImage: null },
    { id: "LPSneukrotimi01", name: "Неукротимый", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSneukrotimi01.png", canUpgrade: false, animImage: null },
    { id: "LPSsundzua", name: "Судзяу", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPSsundzua.png", canUpgrade: false, animImage: null },
    { id: "LPStaiho01", name: "Тайхо", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPStaiho01.png", canUpgrade: false, animImage: null },
    { id: "LPStaiho02", name: "Тайхо", emoji: "🍊", rank: "S", set: "Лазурный Путь", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Лазурный Путь/S/LPStaiho02.png", canUpgrade: false, animImage: null },


    // A

    { id: "LPAagir01", name: "Агир", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAagir01.png", canUpgrade: false, animImage: null },
    { id: "LPAalabama", name: "Алабама", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAalabama.png", canUpgrade: false, animImage: null },
    { id: "LPAformidebl01", name: "Формидебл", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAformidebl01.png", canUpgrade: false, animImage: null },
    { id: "LPAginderbug01", name: "Гинденбург", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAginderbug01.png", canUpgrade: false, animImage: null },
    { id: "LPAnosiro01", name: "Носиро", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAnosiro01.png", canUpgrade: false, animImage: null },
    { id: "LPAoumi01", name: "Оуми", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAoumi01.png", canUpgrade: false, animImage: null },
    { id: "LPAtaiho01", name: "Тайхо", emoji: "🍊", rank: "A", set: "Лазурный Путь", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Лазурный Путь/A/LPAtaiho01.png", canUpgrade: false, animImage: null },

    // P

    { id: "LPPdjersi01", name: "Нью-Джерси", emoji: "🍊", rank: "P", set: "Лазурный Путь", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Лазурный Путь/P/LPPdjersi01.png", canUpgrade: false, animImage: null },
    { id: "LPPeljas01", name: "Эльзас", emoji: "🍊", rank: "P", set: "Лазурный Путь", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Лазурный Путь/P/LPPeljas01.png", canUpgrade: false, animImage: null },
    { id: "LPPshinano01", name: "Шинано", emoji: "🍊", rank: "P", set: "Лазурный Путь", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Лазурный Путь/P/LPPshinano01.png", canUpgrade: false, animImage: null },
    { id: "LPPundzein01", name: "Ундзэн", emoji: "🍊", rank: "P", set: "Лазурный Путь", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Лазурный Путь/P/LPPundzein01.png", canUpgrade: false, animImage: null },


    // G

    { id: "LPGadmiral01", name: "Адмирал", emoji: "🍊", rank: "G", set: "Лазурный Путь", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Лазурный Путь/G/LPGadmiral01.png", canUpgrade: false, animImage: null },
    { id: "LPGneumolimi01", name: "Неумолимый", emoji: "🍊", rank: "G", set: "Лазурный Путь", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Лазурный Путь/G/LPGneumolimi01.png", canUpgrade: false, animImage: null },
    { id: "LPGsirius01", name: "Сириус", emoji: "🍊", rank: "G", set: "Лазурный Путь", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Лазурный Путь/G/LPGsirius01.png", canUpgrade: false, animImage: null },


    // B

    { id: "LPBhvadja01", name: "Хва Джа", emoji: "🍊", rank: "B", set: "Лазурный Путь", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Лазурный Путь/B/LPBhvadja01.png", canUpgrade: false, animImage: null },
    { id: "LPBmogador01", name: "Могадор", emoji: "🍊", rank: "B", set: "Лазурный Путь", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Лазурный Путь/B/LPBmogador01.png", canUpgrade: false, animImage: null },
    { id: "LPBmusashi01", name: "Мусаши", emoji: "🍊", rank: "B", set: "Лазурный Путь", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Лазурный Путь/B/LPBmusashi01.png", canUpgrade: false, animImage: null },
    { id: "LPBz1101", name: "Z11", emoji: "🍊", rank: "B", set: "Лазурный Путь", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Лазурный Путь/B/LPBz1101.png", canUpgrade: false, animImage: null },


    // C

    { id: "LPCbremerton01", name: "Бремертон", emoji: "🍊", rank: "C", set: "Лазурный Путь", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Лазурный Путь/C/LPCbremerton01.png", canUpgrade: false, animImage: null },
    { id: "LPClaion01", name: "Лайон", emoji: "🍊", rank: "C", set: "Лазурный Путь", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Лазурный Путь/C/LPClaion01.png", canUpgrade: false, animImage: null },
    { id: "LPCneumolimi01", name: "Неумолимый", emoji: "🍊", rank: "C", set: "Лазурный Путь", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Лазурный Путь/C/LPCneumolimi01.png", canUpgrade: false, animImage: null },


    // D

    { id: "LPDankoridji01", name: "Анкоридж", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/ankoridji01.png", canUpgrade: false, animImage: null },
    { id: "LPDavangard01", name: "Авангард", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/avangard01.png", canUpgrade: false, animImage: null },
    { id: "LPDazuma01", name: "Азума", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/azuma01.png", canUpgrade: false, animImage: null },
    { id: "LPDboise01", name: "Бойсе", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/boise01.png", canUpgrade: false, animImage: null },
    { id: "LPDbremerton01", name: "Барметон", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/bremerton01.png", canUpgrade: false, animImage: null },
    { id: "LPDchapaev01", name: "Чапаев", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/chapaev01.png", canUpgrade: false, animImage: null },
    { id: "LPDchapaev02", name: "Чапаев", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/chapaev02.png", canUpgrade: false, animImage: null },
    { id: "LPDcheshir01", name: "Чешир", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/cheshir01.png", canUpgrade: false, animImage: null },
    { id: "LPDdjersi02", name: "Нью-Джерси", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/djersi02.png", canUpgrade: false, animImage: null },
    { id: "LPDdjoffr01", name: "Жоффр", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/djoffr01.png", canUpgrade: false, animImage: null },
    { id: "LPDeljas01", name: "Эльзас", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/eljas01.png", canUpgrade: false, animImage: null },
    { id: "LPDkazani01", name: "Казань", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/kazani01.png", canUpgrade: false, animImage: null },
    { id: "LPDpeter01", name: "Петер Штрассер", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/peter01.png", canUpgrade: false, animImage: null },
    { id: "LPDscilla01", name: "Сцилла", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/scilla01.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano03", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano03.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano04", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano04.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano05", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano05.png", canUpgrade: false, animImage: null },
    { id: "LPDsouz01", name: "Советский союз", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/souz01.png", canUpgrade: false, animImage: null },
    { id: "LPDtaiho02", name: "Тайхо", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/taiho02.png", canUpgrade: false, animImage: null },
    { id: "LPDtosa01", name: "Тоса", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/taso01.png", canUpgrade: false, animImage: null },
    { id: "LPDtriest01", name: "Триести", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/triest01.png", canUpgrade: false, animImage: null },
    { id: "LPDvoroshilov01", name: "Ворошилов", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/voroshilov01.png", canUpgrade: false, animImage: null },
    { id: "LPDvoroshilov02", name: "Ворошилов", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/voroshilov02.png", canUpgrade: false, animImage: null },

    // E

    { id: "LPEaynami01", name: "Аянами", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/aynami01.png", canUpgrade: false, animImage: null },
    { id: "LPEde_zeven01", name: "Де Зевен Провинсен", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/de_zeven01.png", canUpgrade: false, animImage: null },
    { id: "LPEdjersi01", name: "Нью-Джерси", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/djersi01.png", canUpgrade: false, animImage: null },
    { id: "LPEelijaz01", name: "Эльзас", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/elijaz01.png", canUpgrade: false, animImage: null },
    { id: "LPEfensi01", name: "Фэнси", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/fensi01.png", canUpgrade: false, animImage: null },
    { id: "LPEformidebl01", name: "Формидебл", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/formidebl01.png", canUpgrade: false, animImage: null },
    { id: "LPEformidebl02", name: "Формидебл", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/formidebl02.png", canUpgrade: false, animImage: null },
    { id: "LPEhai01", name: "Чжен Хай", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/hai01.png", canUpgrade: false, animImage: null },
    { id: "LPEhakyhoy01", name: "Хакухоу", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/hakyhoy01.png", canUpgrade: false, animImage: null },
    { id: "LPEhakyhoy02", name: "Хакухоу", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/hakyhoy02.png", canUpgrade: false, animImage: null },
    { id: "LPEhakyhoy03", name: "Хакухоу", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/hakyhoy03.png", canUpgrade: false, animImage: null },
    { id: "LPEhort01", name: "Хортхемтон II", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/hort01.png", canUpgrade: false, animImage: null },
    { id: "LPEkashino01", name: "Кашино", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/kashino01.png", canUpgrade: false, animImage: null },
    { id: "LPEkoupens01", name: "Коупенс", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/koupens01.png", canUpgrade: false, animImage: null },
    { id: "LPElaion01", name: "Лайон", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/laion01.png", canUpgrade: false, animImage: null },
    { id: "LPEluis01", name: "Сент-Луис", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/luis01.png", canUpgrade: false, animImage: null },
    { id: "LPEminase01", name: "Минасе", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/minase01.png", canUpgrade: false, animImage: null },
    { id: "LPEmusashi01", name: "Мусаши", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/musashi01.png", canUpgrade: false, animImage: null },
    { id: "LPEmusashi02", name: "Мусаши", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/musashi02.png", canUpgrade: false, animImage: null },
    { id: "LPEnozki01", name: "Ножки", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/nozki01.png", canUpgrade: true, animImage: "images/Лазурный Путь/E/anim/nozki01.gif"},
    { id: "LPEnozki02", name: "Ножки", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/nozki02.png", canUpgrade: false, animImage: null },
    { id: "LPEovari01", name: "Овари", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/ovari01.png", canUpgrade: false, animImage: null },
    { id: "LPEpenleve01", name: "Пенлеве", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/penleve01.png", canUpgrade: false, animImage: null },
    { id: "LPEpersei01", name: "Персей", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/persei01.png", canUpgrade: false, animImage: null },
    { id: "LPEprinc01", name: "Принц Ойген", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/princ01.png", canUpgrade: false, animImage: null },
    { id: "LPEprinc02", name: "Принц Ойген", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/princ02.png", canUpgrade: false, animImage: null },
    { id: "LPEsan01", name: "Сан Джачинто", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/san01.png", canUpgrade: false, animImage: null },
    { id: "LPEshinano01", name: "Шинано", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/shinano01.png", canUpgrade: false, animImage: null },
    { id: "LPEshinano02", name: "Шинано", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/shinano02.png", canUpgrade: false, animImage: null },
    { id: "LPEshoukaku01", name: "Шоукаку", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/shoukaku01.png", canUpgrade: false, animImage: null },
    { id: "LPEtaiho01", name: "Тайхо", emoji: "🍊", rank: "E", set: "Лазурный Путь", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Лазурный Путь/E/taiho01.png", canUpgrade: false, animImage: null },

    // Эхокалипсис

    // S

    { id: "Sbafomet01", name: "Бафомет", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/bafomet01.png", canUpgrade: false, animImage: null },
    { id: "Spantera01", name: "Пантера", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/pantera01.png", canUpgrade: false, animImage: null },
    { id: "Stof03", name: "Тоф", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/tof03.png", canUpgrade: false, animImage: null },
    { id: "Sgfinevra01", name: "Гвиневра", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/gfinevra01.png", canUpgrade: false, animImage: null },
    { id: "Ssfinks01", name: "Сфинкс", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/sfinks01.png", canUpgrade: false, animImage: null },
    { id: "Sgarula01", name: "Гарула", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/garula01.png", canUpgrade: false, animImage: null },
    { id: "Sshui02", name: "Шию", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/shiu02.png", canUpgrade: false, animImage: null },
    { id: "Skuri01", name: "Кури", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/kuri01.png", canUpgrade: false, animImage: null },
    { id: "Szava01", name: "Зава", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/zava01.png", canUpgrade: false, animImage: null },
    { id: "Smordred01", name: "Мордред", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/mordred01.png", canUpgrade: false, animImage: null },
    { id: "Svivi02", name: "Виви", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/vivi02.png", canUpgrade: false, animImage: null },
    { id: "Slevia02", name: "Левия", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/levia02.png", canUpgrade: false, animImage: null },
    { id: "Schiraha02", name: "Чираха", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/chiraha02.png", canUpgrade: false, animImage: null },
    { id: "Seriri01", name: "Эрири", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/eriri01.png", canUpgrade: false, animImage: null },
    { id: "Sniz01", name: "Низ", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/niz01.png", canUpgrade: false, animImage: null },
    { id: "Ssnejana01", name: "Снежана", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/snejana01.png", canUpgrade: false, animImage: null },
    { id: "Ssera01", name: "Сера", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/sera01.png", canUpgrade: false, animImage: null },
    { id: "Sludmera01", name: "Людмера", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/ludmera01.png", canUpgrade: false, animImage: null },
    { id: "Sroksi02", name: "Рокси", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/roksi02.png", canUpgrade: false, animImage: null },
    { id: "Slevia01", name: "Левия", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/levia01.png", canUpgrade: false, animImage: null },
    { id: "Snil02", name: "Нил", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/nil02.png", canUpgrade: false, animImage: null },
    { id: "Siora01", name: "Йора", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/iora01.png", canUpgrade: false, animImage: null },
    { id: "Smicuha01", name: "Мицуха Мочизуки", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/micuha01.png", canUpgrade: false, animImage: null },
    { id: "Sulia01", name: "Юлия", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/ulia01.png", canUpgrade: false, animImage: null },
    { id: "Sshiu01", name: "Шию", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/shiu01.png", canUpgrade: false, animImage: null },
    { id: "Svivi01", name: "Виви", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/vivi01.png", canUpgrade: false, animImage: null },
    { id: "Sroksi01", name: "Рокси", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/roksi01.png", canUpgrade: false, animImage: null },
    { id: "Snue01", name: "Нуэ", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/nue01.png", canUpgrade: true, animImage: "images/Эхокалипсис/S/anim/nue01.gif" },
    { id: "Snil01", name: "Нил", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/nil01.png", canUpgrade: false, animImage: null },
    { id: "Skarolina01", name: "Каролина", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/karolina01.png", canUpgrade: false, animImage: null },
    { id: "Snila01", name: "Нила", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/nila01.png", canUpgrade: false, animImage: null },
    { id: "Shimetto01", name: "Хеметто", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/himetto01.png", canUpgrade: true, animImage: "images/Эхокалипсис/S/anim/himetto01.gif" },
    { id: "Sanubis", name: "Анубис", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/anubis01.png", canUpgrade: false, animImage: null },
    { id: "Slili03", name: "Лилит", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/lilit03.png", canUpgrade: false, animImage: null },
    { id: "Stof02", name: "Тоф", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/tof02.png", canUpgrade: false, animImage: null },
    { id: "Sbastet01", name: "Бастет", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/bastet01.png", canUpgrade: false, animImage: null },
    { id: "Sdeizi01", name: "Дэйзи", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/deizi01.png", canUpgrade: false, animImage: null },
    { id: "Slilit02", name: "Лилит", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/lilit02.png", canUpgrade: false, animImage: null },
    { id: "Slilit01", name: "Лилит", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/lilit01.png", canUpgrade: false, animImage: null },
    { id: "Spanpan01", name: "Пан Пан", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/panpan01.png", canUpgrade: false, animImage: null },
    { id: "Schiraha01", name: "Чираха", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/chiraha01.png", canUpgrade: false, animImage: null },
    { id: "Slira01", name: "Лира", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/lira01.png", canUpgrade: true, animImage: "images/Эхокалипсис/S/anim/lira01.gif" },
    { id: "Stof01", name: "Тоф", emoji: "🍊", rank: "S", set: "Эхокалипсис", rankLabel: "S", color: "#f54972", rankOrder: 2, image: "images/Эхокалипсис/S/tof01.png", canUpgrade: false, animImage: null },

    // A

    { id: "Azineda01", name: "Зинеда", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/zineda01.png", canUpgrade: false, animImage: null },
    { id: "Aakira01", name: "Акира", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/akira01.png", canUpgrade: false, animImage: null },
    { id: "Ahela02", name: "Хела", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/hela02.png", canUpgrade: false, animImage: null },
    { id: "Aodri01", name: "Одри", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/odri01.png", canUpgrade: false, animImage: null },
    { id: "Abastet01", name: "Бастет", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/bastet01.png", canUpgrade: false, animImage: null },
    { id: "Afirentiay02", name: "Фирентия", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/firentiay02.png", canUpgrade: false, animImage: null },
    { id: "Auinno01", name: "Уинно", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/uinno01.png", canUpgrade: false, animImage: null },
    { id: "Akurain01", name: "Курайн", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/kurain01.png", canUpgrade: false, animImage: null },
    { id: "Amordred01", name: "Мордред", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/mordred01.png", canUpgrade: false, animImage: null },
    { id: "Aariri01", name: "Эрири", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/ariri01.png", canUpgrade: false, animImage: null },
    { id: "Aregina01", name: "Регина", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/regina01.png", canUpgrade: false, animImage: null },
    { id: "Alira01", name: "Лира", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/lira01.png", canUpgrade: false, animImage: null },
    { id: "Abraun01", name: "Браун", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/braun01.png", canUpgrade: false, animImage: null },
    { id: "Araeon01", name: "Раеон", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/raeon01.png", canUpgrade: false, animImage: null },
    { id: "Ahela01", name: "Хела", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/hela01.png", canUpgrade: false, animImage: null },
    { id: "Ashiu02", name: "Шию", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/shiu02.png", canUpgrade: false, animImage: null },
    { id: "Aaiken01", name: "Эйкен", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/aiken01.png", canUpgrade: false, animImage: null },
    { id: "Aziz01", name: "Зиз", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/ziz01.png", canUpgrade: false, animImage: null },
    { id: "Afirentiay01", name: "Фирентия", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/firentiay01.png", canUpgrade: false, animImage: null },
    { id: "Akiki01", name: "Кики", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/kiki01.png", canUpgrade: false, animImage: null },
    { id: "Aset01", name: "Сет", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/set01.png", canUpgrade: false, animImage: null },
    { id: "Achiraha01", name: "Чираха", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/chiraha01.png", canUpgrade: false, animImage: null },
    { id: "Adoroti01", name: "Дороти", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/doroti01.png", canUpgrade: false, animImage: null },
    { id: "Ashiu01", name: "Шию", emoji: "🍊", rank: "A", set: "Эхокалипсис", rankLabel: "A", color: "#fc363b", rankOrder: 4, image: "images/Эхокалипсис/A/shiu01.png", canUpgrade: false, animImage: null },

    // P

    { id: "Pmituba01", name: "Митуба", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/mituba01.png", canUpgrade: false, animImage: null },
    { id: "Psova03", name: "Сова", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/sova03.png", canUpgrade: false, animImage: null },
    { id: "Plori01", name: "Лори", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/lori01.png", canUpgrade: false, animImage: null },
    { id: "Pziz01", name: "Зиз", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/ziz01.png", canUpgrade: false, animImage: null },
    { id: "Prikin02", name: "Рикин", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/rikin02.png", canUpgrade: false, animImage: null },
    { id: "Pifurito01", name: "Ифурито", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/ifurito01.png", canUpgrade: false, animImage: null },
    { id: "Psova2", name: "Сова", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/sova02.png", canUpgrade: false, animImage: null },
    { id: "Podri02", name: "Одри", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/odri02.png", canUpgrade: false, animImage: null },
    { id: "Pulia01", name: "Юлия", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/ulia01.png", canUpgrade: false, animImage: null },
    { id: "Psova01", name: "Сова", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/sova01.png", canUpgrade: false, animImage: null },
    { id: "Pfenriru01", name: "Мира", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/fenriru01.png", canUpgrade: false, animImage: null },
    { id: "Pmira01", name: "Мира", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/mira01.png", canUpgrade: false, animImage: null },
    { id: "Prayna01", name: "Райна", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/rayna01.png", canUpgrade: false, animImage: null },
    { id: "Prikin01", name: "Рикин", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/rikin01.png", canUpgrade: false, animImage: null },
    { id: "Pkiki01", name: "Кики", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/kiki01.png", canUpgrade: false, animImage: null },
    { id: "Pvaliant01", name: "Валиант", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/valiant01.png", canUpgrade: false, animImage: null },
    { id: "Piora02", name: "Йора", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/iora02.png", canUpgrade: false, animImage: null },
    { id: "Pzava01", name: "Зава", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/zava01.png", canUpgrade: false, animImage: null },
    { id: "Pgfinevra02", name: "Гвиневра", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/gfinevra02.png", canUpgrade: false, animImage: null },
    { id: "Podri01", name: "Одри", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/odri01.png", canUpgrade: false, animImage: null },
    { id: "Pgfinevra01", name: "Гвиневра", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/gfinevra01.png", canUpgrade: false, animImage: null },
    { id: "Panubis01", name: "Анубис", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/anubis01.png", canUpgrade: false, animImage: null },
    { id: "Pbastet01", name: "Бастет", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/bastet01.png", canUpgrade: false, animImage: null },
    { id: "Pkiubei01", name: "Кьюбей", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/kiubei01.png", canUpgrade: false, animImage: null },
    { id: "Pprinni01", name: "Принни", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/prinni01.png", canUpgrade: false, animImage: null },
    { id: "Piora01", name: "Йора", emoji: "🍊", rank: "P", set: "Эхокалипсис", rankLabel: "P", color: "#005db6", rankOrder: 5, image: "images/Эхокалипсис/P/iora01.png", canUpgrade: false, animImage: null },

    // G

    { id: "Gneftida01", name: "Нефтида", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/neftida01.png", canUpgrade: false, animImage: null },
    { id: "Gsnejana01", name: "Снежана", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/snejana01.png", canUpgrade: false, animImage: null },
    { id: "Gsharon02", name: "Шарон", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/sharon02.png", canUpgrade: false, animImage: null },
    { id: "Gnue01", name: "Нуэ", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/nue01.png", canUpgrade: false, animImage: null },
    { id: "Gketch01", name: "Кэтч", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/ketch01.png", canUpgrade: false, animImage: null },
    { id: "Gnila02", name: "Нила", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/nila02.png", canUpgrade: false, animImage: null },
    { id: "Gsua01", name: "Суа", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/sua01.png", canUpgrade: false, animImage: null },
    { id: "Gsova01", name: "Сова", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/sova01.png", canUpgrade: false, animImage: null },
    { id: "Gsharon01", name: "Шарон", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/sharon01.png", canUpgrade: false, animImage: null },
    { id: "Gvivi02", name: "Виви", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/vivi02.png", canUpgrade: false, animImage: null },
    { id: "Gnila01", name: "Нила", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/nila01.png", canUpgrade: false, animImage: null },
    { id: "Grie01", name: "Рие", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/senko01.png", canUpgrade: false, animImage: null },
    { id: "Gsenko01", name: "Сенко", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/senko01.png", canUpgrade: false, animImage: null },
    { id: "Gsui01", name: "Суй", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/sui01.png", canUpgrade: false, animImage: null },

    // B

    { id: "Bkamelia01", name: "Камелия", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/kamelia01.png", canUpgrade: false, animImage: null },
    { id: "Bkiki01", name: "Кики", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/kiki01.png", canUpgrade: false, animImage: null },
    { id: "Bzava01", name: "Зава", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/zava01.png", canUpgrade: false, animImage: null },
    { id: "naitingeil01", name: "Найтингейл", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/naitingeil01.png", canUpgrade: false, animImage: null },
    { id: "Bhela01", name: "Хела", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/hela01.png", canUpgrade: false, animImage: null },
    { id: "Bkuri01", name: "Кури", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/kuri01.png", canUpgrade: false, animImage: null },
    { id: "Bstara01", name: "Стара", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/stara01.png", canUpgrade: false, animImage: null },
    { id: "Bnila01", name: "Нила", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/nila01.png", canUpgrade: false, animImage: null },
    { id: "Bosiris01", name: "Осирис", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/osiris01.png", canUpgrade: false, animImage: null },
    { id: "Bkurina01", name: "Курина", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/kurina01.png", canUpgrade: false, animImage: null },
    { id: "Bhator01", name: "Хатор", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/hator01.png", canUpgrade: false, animImage: null },
    { id: "Biora01", name: "Йора", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/iora01.png", canUpgrade: false, animImage: null },
    { id: "Bsera01", name: "Сера", emoji: "🍊", rank: "B", set: "Эхокалипсис", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Эхокалипсис/B/sera01.png", canUpgrade: false, animImage: null },

    // C

    { id: "Cluciferin01", name: "Люциферин", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/luciferin01.png", canUpgrade: false, animImage: null },
    { id: "Cuinno01", name: "Уинно", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/uinno01.png", canUpgrade: false, animImage: null },
    { id: "Ceriri01", name: "Эрири", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/eriri01.png", canUpgrade: false, animImage: null },
    { id: "Csolovei01", name: "Соловей", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/solovei01.png", canUpgrade: false, animImage: null },
    { id: "Crie01", name: "Рие", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/rie01.png", canUpgrade: false, animImage: null },
    { id: "Cludmera01", name: "Людмера", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/ludmera01.png", canUpgrade: false, animImage: null },
    { id: "Cfenriru01", name: "Фенриру", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/fenriru01.png", canUpgrade: false, animImage: null },
    { id: "Cnila01", name: "Нила", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/nila01.png", canUpgrade: false, animImage: null },
    { id: "Cnil01", name: "Нил", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/nil01.png", canUpgrade: false, animImage: null },
    { id: "Cbraun01", name: "Браун", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/braun01.png", canUpgrade: false, animImage: null },
    { id: "Ciori01", name: "Иори", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/iori01.png", canUpgrade: false, animImage: null },
    { id: "Clilit01", name: "Лилит", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/lilit01.png", canUpgrade: false, animImage: null },
    { id: "Cfirentia01", name: "Фирентия", emoji: "🍊", rank: "C", set: "Эхокалипсис", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Эхокалипсис/C/firentia01.png", canUpgrade: false, animImage: null },

    // D

    { id: "LPDsenko01", name: "Сенко", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/senko01.png", canUpgrade: false, animImage: null },
    { id: "LPDnila04", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila04.png", canUpgrade: false, animImage: null },
    { id: "LPDpanpan01", name: "Пан Пан", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/panpan01.png", canUpgrade: false, animImage: null },
    { id: "LPDakira01", name: "Акира", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/akira01.png", canUpgrade: false, animImage: null },
    { id: "LPDeriri03", name: "Эрири", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eriri03.png", canUpgrade: false, animImage: null },
    { id: "LPDnila03", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila03.png", canUpgrade: false, animImage: null },
    { id: "LPDniz01", name: "Низ", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/niz01.png", canUpgrade: false, animImage: null },
    { id: "LPDeriri02", name: "Эрири", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eriri02.png", canUpgrade: false, animImage: null },
    { id: "LPDeli01", name: "Эли", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eli01.png", canUpgrade: false, animImage: null },
    { id: "LPDeriri01", name: "Эрири", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eriri01.png", canUpgrade: false, animImage: null },
    { id: "LPDsasha01", name: "Саша", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/sasha01.png", canUpgrade: false, animImage: null },
    { id: "LPDring01", name: "Ринг", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/ring01.png", canUpgrade: false, animImage: null },
    { id: "LPDsnejana01", name: "Снежана", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/snejana01.png", canUpgrade: false, animImage: null },
    { id: "LPDrikin01", name: "Рикин", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/rikin01.png", canUpgrade: false, animImage: null },
    { id: "LPDnila02", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila02.png", canUpgrade: false, animImage: null },
    { id: "LPDdezi01", name: "Дейзи", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/dezi01.png", canUpgrade: false, animImage: null },
    { id: "LPDnila01", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila01.png", canUpgrade: false, animImage: null },
    { id: "LPDvivi02", name: "Виви", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/vivi02.png", canUpgrade: false, animImage: null },
    { id: "LPDvivi01", name: "Виви", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/vivi01.png", canUpgrade: false, animImage: null },

    // E

    { id: "LPEakira01", name: "Акира", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/akira01.png", canUpgrade: false, animImage: null },
    { id: "LPEtomi01", name: "Томи", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/tomi01.png", canUpgrade: false, animImage: null },
    { id: "LPEvivi01", name: "Виви", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/vivi01.png", canUpgrade: false, animImage: null },
    { id: "LPEsova02", name: "Сова", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/sova02.png", canUpgrade: false, animImage: null },
    { id: "LPEsova01", name: "Сова", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/sova01.png", canUpgrade: false, animImage: null },
    { id: "LPEeiken_mori01", name: "Эйкен и Мори", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/eiken_mori01.png", canUpgrade: false, animImage: null },
    { id: "LPEgor01", name: "Гор", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/gor01.png", canUpgrade: false, animImage: null },
    { id: "LPEdina01", name: "Дина", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/dina01.png", canUpgrade: true, animImage: "images/Эхокалипсис/E/anim/dina.gif" },
    { id: "LPEludmera01", name: "Людмера", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/ludmera01.png", canUpgrade: false, animImage: null },
    { id: "LPEhator01", name: "Хатор", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/hator01.png", canUpgrade: false, animImage: null },
    { id: "LPEvedfolnir01", name: "Ведфолнир", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/vedfolnir01.png", canUpgrade: false, animImage: null },
    { id: "LPEkurina01", name: "Курин", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/kurina01.png", canUpgrade: false, animImage: null },      
    { id: "LPEhimetto01", name: "Хеметто", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/himetto01.png", canUpgrade: false, animImage: null },
    { id: "LPEset01", name: "Сет", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/set01.png", canUpgrade: false, animImage: null },
    { id: "LPEnil01", name: "Нил", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/nil01.png", canUpgrade: false, animImage: null },

    // Ивентовые

    // H

    { id: "Halbedo01", name: "Альбедо", rank: "H", rankLabel: "H", color: "#ff6600", rankOrder: 1.5, image: "images/events/halloween/albedo01.png", set: "Ивенты", canUpgrade: false, animImage: null, season: "halloween" },

    // N 2025-2026

    { id: "Nzani01", name: "Зани", rank: "N", rankLabel: "N", color: "#00ccff", rankOrder: 1.6, image: "images/events/newyear/zani01.png", set: "Ивенты", canUpgrade: false, animImage: null, season: "newyear" },

    // N 2024-2025

    { id: "Nasuna01", name: "Асуна", rank: "N", rankLabel: "N", color: "#00ccff", rankOrder: 1.6, image: "images/events/newyear/asuna01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/newyear/anim/asuna01.gif", season: "newyear" },

    // V

    { id: "Vmakima01", name: "Макима", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/makima01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/spring/anim/makima01.gif", season: "spring" },
    { id: "Vmiku01", name: "Мику", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/miku01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/spring/anim/miku01.gif", season: "spring" },
    { id: "Vmei01", name: "Жуань Мэй", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/mei01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/spring/anim/mei01.gif", season: "spring" },
    { id: "Vchoso01", name: "Чосо", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/choso01.png", set: "Ивенты", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vm01", name: "Мужчина", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/m01.png", set: "Ивенты", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Varlekino01", name: "Арлекино", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/arlekino01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/spring/anim/arlekino01.gif", season: "spring" },
    { id: "Vrio01", name: "Рио", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/rio01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/spring/anim/rio01.gif", season: "spring" },

    // L

    { id: "Lmiku01", name: "Хацунэ Мику", rank: "L", rankLabel: "L", color: "#ffaa44", rankOrder: 1.8, image: "images/events/summer/miku01.png", set: "Ивенты", canUpgrade: true, animImage: "images/events/spring/anim/miku01.gif", season: "summer" },
    { id: "Lkafka01", name: "Кафка", rank: "L", rankLabel: "L", color: "#ffaa44", rankOrder: 1.8, image: "images/events/summer/kafka01.png", set: "Ивенты", canUpgrade: false, animImage: null, season: "summer" }
];
