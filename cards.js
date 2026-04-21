// ========== БАЗА КАРТ ==========
const ALL_CARDS = [
    { id: "osk01", name: "Осколок", emoji: "⚔️", rank: "A+", set: "Эхокалипсис", rankLabel: "A+", color: "#772ce8", rankOrder: 3, image: "images/osk.png", canUpgrade: false, animImage: null },

    // Q

    { id: "Qraiden01", name: "Райден", emoji: "🍊", rank: "Q", set: "Genshin Impact", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/raiden01.png", canUpgrade: false, animImage: null },
    { id: "Qalbedo01", name: "Альбедо", emoji: "🍊", rank: "Q", set: "Повелитель", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/albedo01.png", canUpgrade: false, animImage: null },
    { id: "Qkafka01", name: "Кафка", emoji: "🍊", rank: "Q", set: "Архив Звёздного Пути", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/kafka01.png", canUpgrade: false, animImage: null },
    { id: "Qzani01", name: "Зани", emoji: "🍊", rank: "Q", set: "Грозовые Волны", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/zani01.png", canUpgrade: false, animImage: null },
    { id: "Qyashma01", name: "Яшма", emoji: "🍊", rank: "Q", set: "Архив Звёздного Пути", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/yashma01.png", canUpgrade: false, animImage: null },
    { id: "Qmiaybi01", name: "Мияби", emoji: "🍊", rank: "Q", set: "Zenless Zone Zero", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/miaybi01.png", canUpgrade: false, animImage: null },
    { id: "Qgerta01", name: "Герта", emoji: "🍊", rank: "Q", set: "Архив Звёздного Пути", rankLabel: "Q", color: "#4984b2", rankOrder: 1, image: "images/auctions/gerta01.png", canUpgrade: false, animImage: null },

    // X

    { id: "Xcc01", name: "C.C.", emoji: "🍊", rank: "X", set: "Код Гиас", rankLabel: "X", color: "#4984b2", rankOrder: 1, image: "images/X/cc01.png", canUpgrade: false, animImage: null },
    { id: "Xreze01", name: "Резе", emoji: "🍊", rank: "X", set: "Человек Бензопила", rankLabel: "X", color: "#4984b2", rankOrder: 1, image: "images/X/reze01.png", canUpgrade: true, animImage: "images/X/anim/reze01.gif" },
    
    // Геншенский удар

    // B

    { id: "GBbarabara01", name: "Барбара", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBbarabara01.png", canUpgrade: false, animImage: null },
    { id: "GBcici01", name: "Ци Ци", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBcici01.png", canUpgrade: false, animImage: null },
    { id: "GBdaliya01", name: "Далия", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBdaliya01.png", canUpgrade: false, animImage: null },
    { id: "GBeimiay01", name: "Ёимия", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBeimiay01.png", canUpgrade: false, animImage: null },
    { id: "GBember01", name: "Эмбер", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBember01.png", canUpgrade: false, animImage: null },
    { id: "GBfishilmona01", name: "Фишль|Мона", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBfishilmona01.png", canUpgrade: false, animImage: null },
    { id: "GBhutao01", name: "Ху Тао", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBhutao01.png", canUpgrade: false, animImage: null },
    { id: "GBkamisato_ayto01", name: "Камисато Аято", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBkamisato_ayto01.png", canUpgrade: false, animImage: null },
    { id: "GBkolombina01", name: "Коломбина", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBkolombina01.png", canUpgrade: false, animImage: null },
    { id: "GBkudjesara01", name: "Кудзё Сара", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBkudjesara01.png", canUpgrade: false, animImage: null },
    { id: "GBlinett01", name: "Линетт", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBlinett01.png", canUpgrade: false, animImage: null },
    { id: "GBlumina01", name: "Ёимия и Люмин", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBlumina01.png", canUpgrade: false, animImage: null },
    { id: "GBninguan01", name: "Нин Гуан", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBninguan01.png", canUpgrade: false, animImage: null },
    { id: "GBnoell01", name: "Ноэлдь", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBnoell01.png", canUpgrade: false, animImage: null },
    { id: "GBpantalone01", name: "Панталоне", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBpantalone01.png", canUpgrade: false, animImage: null },
    { id: "GBreizor01", name: "Рейзор", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBreizor01.png", canUpgrade: false, animImage: null },
    { id: "GBrozaria01", name: "Розария", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBrozaria01.png", canUpgrade: false, animImage: null },
    { id: "GBshevrez01", name: "Шеврёз", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBshevrez01.png", canUpgrade: false, animImage: null },
    { id: "GBsijvin01", name: "Сиджвин", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBsijvin01.png", canUpgrade: false, animImage: null },
    { id: "GBuni01", name: "Юнь Цзинь", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GBuni01.png", canUpgrade: false, animImage: null },
    { id: "GByaemiko01", name: "Яэ Мико", emoji: "🍊", rank: "B", set: "Геншинский удар", rankLabel: "B", color: "#eb5d9b", rankOrder: 7, image: "images/Геншинский удар/B/GByaemiko01.png", canUpgrade: false, animImage: null },

    // C

    { id: "GCbarbara01", name: "Барбара", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCbarbara01.png", canUpgrade: true, animImage: "images/Геншинский удар/C/anim/GCbarbara01.gif" },
    { id: "GCchujunli01", name: "Чжун Ли", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCchujunli01.png", canUpgrade: false, animImage: null },
    { id: "GCchujunli02", name: "Чжун Ли", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCchujunli02.png", canUpgrade: false, animImage: null },
    { id: "GCdaliya01", name: "Далия", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCdaliya01.png", canUpgrade: false, animImage: null },
    { id: "GCdiluk01", name: "Дилюк Рагнвиндр", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCdiluk01.png", canUpgrade: false, animImage: null },
    { id: "GCdiona01", name: "Диона", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCdiona01.png", canUpgrade: true, animImage: "images/Геншинский удар/C/anim/GCdiona01.gif"},
    { id: "GCember01", name: "Эмбер", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCember01.png", canUpgrade: false, animImage: null },
    { id: "GCkachina01", name: "Качина", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCkachina01.png", canUpgrade: false, animImage: null },
    { id: "GCkachina02", name: "Качина", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCkachina02.png", canUpgrade: false, animImage: null },
    { id: "GCkli01", name: "Кли", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCkli01.png", canUpgrade: false, animImage: null },
    { id: "GCnahida01", name: "Нахида", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCnahida01.png", canUpgrade: false, animImage: null },
    { id: "GCororon01", name: "Оророн", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCororon01.png", canUpgrade: false, animImage: null },
    { id: "GCrizli01", name: "Ризли", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCrizli01.png", canUpgrade: false, animImage: null },
    { id: "GCsaion01", name: "Сайно", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCsaion01.png", canUpgrade: false, animImage: null },
    { id: "GCsau01", name: "Саю", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCsau01.png", canUpgrade: false, animImage: null },
    { id: "GCsaynlin01", name: "Сян Лин", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCsaynlin01.png", canUpgrade: false, animImage: null },
    { id: "GCsetos01", name: "Сетос", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCsetos01.png", canUpgrade: false, animImage: null },
    { id: "GCtiori01", name: "Тиори", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCtiori01.png", canUpgrade: false, animImage: null },
    { id: "GCtoma01", name: "Тома", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCtoma01.png", canUpgrade: false, animImage: null },
    { id: "GCventi01", name: "Венти", emoji: "🍊", rank: "C", set: "Геншинский удар", rankLabel: "C", color: "#df9300", rankOrder: 8, image: "images/Геншинский удар/C/GCventi01.png", canUpgrade: false, animImage: null },

    // D

    { id: "GDcici01", name: "Ци Ци", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDcici01.png", canUpgrade: false, animImage: null },
    { id: "GDdaliay01", name: "Далия", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDdaliay01.png", canUpgrade: false, animImage: null },
    { id: "GDfishel01", name: "Фишль", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDfishel01.png", canUpgrade: false, animImage: null },
    { id: "GDfurina01", name: "Фурина", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDfurina01.png", canUpgrade: false, animImage: null },
    { id: "GDlaynayn01", name: "Лань Янь", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDlaynayn01.png", canUpgrade: false, animImage: null },
    { id: "GDliza01", name: "Лиза", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDliza01.png", canUpgrade: false, animImage: null },
    { id: "GDmidzuki01", name: "Мидзуки", emoji: "🍊", rank: "D", set: "Геншинский удар", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Геншинский удар/D/GDmidzuki01.png", canUpgrade: false, animImage: null },

    // E

    { id: "GEbiedou01", name: "Бэй Доу", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEbiedou01.png", canUpgrade: false, animImage: null },
    { id: "GEescoffe01", name: "Эскофье", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEescoffe01.png", canUpgrade: false, animImage: null },
    { id: "GEgoro01", name: "Горо", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEgoro01.png", canUpgrade: false, animImage: null },
    { id: "GEheidzo01", name: "Хэйдзо", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEheidzo01.png", canUpgrade: false, animImage: null },
    { id: "GEkandakia01", name: "Кандакия", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEkandakia01.png", canUpgrade: false, animImage: null },
    { id: "GEPaimon01", name: "Паймон", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEPaimon01.png", canUpgrade: false, animImage: null },
    { id: "GEPaimon02", name: "Паймон", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEPaimon02.png", canUpgrade: false, animImage: null },
    { id: "GEsaynlin01", name: "Сян Лин", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEsaynlin01.png", canUpgrade: false, animImage: null },
    { id: "GEseniora01", name: "Синьора", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEseniora01.png", canUpgrade: true, animImage: "images/Геншинский удар/C/anim/GEseniora01.gif" },
    { id: "GEunicezin01", name: "Юнь Цзинь", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEunicezin01.png", canUpgrade: false, animImage: null },
    { id: "GEyanfei01", name: "Янь Фэй", emoji: "🍊", rank: "E", set: "Геншинский удар", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Геншинский удар/E/GEyanfei01.png", canUpgrade: false, animImage: null },

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
    { id: "LPDdjersi01", name: "Нью-Джерси", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/djersi01.png", canUpgrade: false, animImage: null },
    { id: "LPDdjersi02", name: "Нью-Джерси", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/djersi02.png", canUpgrade: false, animImage: null },
    { id: "LPDdjoffr01", name: "Жоффр", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/djoffr01.png", canUpgrade: false, animImage: null },
    { id: "LPDeljas01", name: "Эльзас", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/eljas01.png", canUpgrade: false, animImage: null },
    { id: "LPDhakyhoy01", name: "Хакухоу", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D//hakyhoy01.png", canUpgrade: false, animImage: null },
    { id: "LPDhakyhoy02", name: "Хакухоу", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D//hakyhoy02.png", canUpgrade: false, animImage: null },
    { id: "LPDhakyhoy03", name: "Хакухоу", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/hakyhoy03.png", canUpgrade: false, animImage: null },
    { id: "LPDkazani01", name: "Казань", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/kazani01.png", canUpgrade: false, animImage: null },
    { id: "LPDkoupens01", name: "Коупенс", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/koupens01.png", canUpgrade: false, animImage: null },
    { id: "LPDmusashi01", name: "Мусаши", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/musashi01.png", canUpgrade: false, animImage: null },
    { id: "LPDpeter01", name: "Петер Штрассер", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/peter01.png", canUpgrade: false, animImage: null },
    { id: "LPDscilla01", name: "Сцилла", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/scilla01.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano01", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano01.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano02", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano02.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano03", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano03.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano04", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano04.png", canUpgrade: false, animImage: null },
    { id: "LPDshinano05", name: "Шинано", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/shinano05.png", canUpgrade: false, animImage: null },
    { id: "LPDsouz01", name: "Советский союз", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/souz01.png", canUpgrade: false, animImage: null },
    { id: "LPDtaiho01", name: "Тайхо", emoji: "🍊", rank: "D", set: "Лазурный Путь", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Лазурный Путь/D/taiho01.png", canUpgrade: false, animImage: null },
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
    { id: "Gvivi01", name: "Виви", emoji: "🍊", rank: "G", set: "Эхокалипсис", rankLabel: "G", color: "#093", rankOrder: 6, image: "images/Эхокалипсис/G/vivi01.png", canUpgrade: false, animImage: null },
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

    { id: "Dsenko01", name: "Сенко", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/senko01.png", canUpgrade: false, animImage: null },
    { id: "Dnila04", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila04.png", canUpgrade: false, animImage: null },
    { id: "Dpanpan01", name: "Пан Пан", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/panpan01.png", canUpgrade: false, animImage: null },
    { id: "Dakira01", name: "Акира", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/akira01.png", canUpgrade: false, animImage: null },
    { id: "Deriri03", name: "Эрири", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eriri03.png", canUpgrade: false, animImage: null },
    { id: "Dnila03", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila03.png", canUpgrade: false, animImage: null },
    { id: "Dniz01", name: "Низ", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/niz01.png", canUpgrade: false, animImage: null },
    { id: "Deriri02", name: "Эрири", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eriri02.png", canUpgrade: false, animImage: null },
    { id: "Deli01", name: "Эли", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eli01.png", canUpgrade: false, animImage: null },
    { id: "Deriri01", name: "Эрири", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/eriri01.png", canUpgrade: false, animImage: null },
    { id: "Dsasha01", name: "Саша", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/sasha01.png", canUpgrade: false, animImage: null },
    { id: "Dring01", name: "Ринг", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/ring01.png", canUpgrade: false, animImage: null },
    { id: "Dsnejana01", name: "Снежана", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/snejana01.png", canUpgrade: false, animImage: null },
    { id: "Drikin01", name: "Рикин", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/rikin01.png", canUpgrade: false, animImage: null },
    { id: "Dnila02", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila02.png", canUpgrade: false, animImage: null },
    { id: "Ddezi01", name: "Дейзи", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/dezi01.png", canUpgrade: false, animImage: null },
    { id: "Dnila01", name: "Нила", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/nila01.png", canUpgrade: false, animImage: null },
    { id: "Dvivi02", name: "Виви", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/vivi02.png", canUpgrade: false, animImage: null },
    { id: "Dvivi01", name: "Виви", emoji: "🍊", rank: "D", set: "Эхокалипсис", rankLabel: "D", color: "#718b99", rankOrder: 9, image: "images/Эхокалипсис/D/vivi01.png", canUpgrade: false, animImage: null },
    
    // E 
    
    { id: "Eakira01", name: "Акира", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/akira01.png", canUpgrade: false, animImage: null },
    { id: "Etomi01", name: "Томи", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/tomi01.png", canUpgrade: false, animImage: null },
    { id: "Evivi01", name: "Виви", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/vivi01.png", canUpgrade: false, animImage: null },
    { id: "Esova02", name: "Сова", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/sova02.png", canUpgrade: false, animImage: null },
    { id: "Esova01", name: "Сова", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/sova01.png", canUpgrade: false, animImage: null },
    { id: "Eeiken_mori01", name: "Эйкен и Мори", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/eiken_mori01.png", canUpgrade: false, animImage: null },
    { id: "Egor01", name: "Гор", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/gor01.png", canUpgrade: false, animImage: null },
    { id: "Edina01", name: "Дина", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/dina01.png", canUpgrade: true, animImage: "images/Эхокалипсис/E/anim/dina.gif" },
    { id: "Eludmera01", name: "Людмера", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/ludmera01.png", canUpgrade: false, animImage: null },
    { id: "Ehator01", name: "Хатор", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/hator01.png", canUpgrade: false, animImage: null },
    { id: "Evedfolnir01", name: "Ведфолнир", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/vedfolnir01.png", canUpgrade: false, animImage: null },
    { id: "Ekurina01", name: "Курин", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/kurina01.png", canUpgrade: false, animImage: null },      
    { id: "Ehimetto01", name: "Хеметто", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/himetto01.png", canUpgrade: false, animImage: null },
    { id: "Eset01", name: "Сет", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/set01.png", canUpgrade: false, animImage: null },
    { id: "Enil01", name: "Нил", emoji: "🍊", rank: "E", set: "Эхокалипсис", rankLabel: "E", color: "#985e4b", rankOrder: 10, image: "images/Эхокалипсис/E/nil01.png", canUpgrade: false, animImage: null },  

    // Ивентовые
    
    // N 2025-2026

    { id: "Nzani01", name: "Зани", rank: "N", rankLabel: "N", color: "#00ccff", rankOrder: 1.6, image: "images/events/newyear/zani01.png", set: "Новый год", canUpgrade: false, animImage: null, season: "newyear" },

    // N 2024-2025

    { id: "Nasuna01", name: "Асуна", rank: "N", rankLabel: "N", color: "#00ccff", rankOrder: 1.6, image: "images/events/newyear/asuna01.png", set: "Новый год", canUpgrade: true, animImage: "images/events/newyear/anim/asuna01.gif", season: "newyear" },
   
    // H

    { id: "Hsuguru01", name: "Сугуру Гето", rank: "H", rankLabel: "H", color: "#ff6600", rankOrder: 1.5, image: "images/events/halloween/suguru01.png", set: "Хэллоуин", canUpgrade: true, animImage: "images/events/halloween/anim/suguru01.gif", season: "halloween" },
    { id: "Hhimeno01", name: "Химено", rank: "H", rankLabel: "H", color: "#ff6600", rankOrder: 1.5, image: "images/events/halloween/himeno01.png", set: "Хэллоуин", canUpgrade: true, animImage: "images/events/halloween/anim/himeno01.gif", season: "halloween" },
    { id: "Halbedo01", name: "Альбедо", rank: "H", rankLabel: "H", color: "#ff6600", rankOrder: 1.5, image: "images/events/halloween/albedo01.png", set: "Хэллоуин", canUpgrade: false, animImage: null, season: "halloween" },
    
    // V

    { id: "Vczin01", name: "Цзин Юань", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/iskorka01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Viskorka01", name: "Искорка", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/iskorka01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vdan01", name: "Дань Хэн", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/dan01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vdan02", name: "Дань Хэн", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/dan02.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vvoskresenie01", name: "Воскресенье", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/voskresenie01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/voskresenie01.gif", season: "spring" },
    { id: "Vbleid01", name: "Блэйд", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/bleid01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vmiku02", name: "Мику", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/miku02.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/miku02.gif", season: "spring" },
    { id: "Vbom01", name: "Бом Тэ и Хэ Су", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/bom01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/bom01.gif", season: "spring" },
    { id: "Vsatoru01", name: "Сатору Годжо", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/satoru01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Varlekino02", name: "Арлекино", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/arlekino02.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vpauer01", name: "Пауэр", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/pauer01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vkarin01", name: "Карин", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/karin01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vioruichi01", name: "Йоруичи", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/ioruichi01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/ioruichi01.gif", season: "spring" },
    { id: "Vrizli01", name: "Ризли", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/rizli01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vrizli02", name: "Ризли", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/rizli02.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/rizli02.gif", season: "spring" },
    { id: "Vrizli02", name: "Ризли", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/rizli02.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/rizli02.gif", season: "spring" },
    { id: "Vtodzi01", name: "Тондзи Фусигуро", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/todzi01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vpek01", name: "Пэк Си Юн", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/pek01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vpek02", name: "Пэк До Хва", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/pek02.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vboa01", name: "Боа Хэнкок", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/boa01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vboa02", name: "Боа Хэнкок", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/boa02.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Valbedo01", name: "Альбедо", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/albedo01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Valbedo02", name: "Альбедо", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/albedo02.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vmakima01", name: "Макима", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/makima01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/makima01.gif", season: "spring" },
    { id: "Vmiku01", name: "Мику", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/miku01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/miku01.gif", season: "spring" },
    { id: "Vmei01", name: "Жуань Мэй", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/mei01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/mei01.gif", season: "spring" },
    { id: "Vchoso01", name: "Чосо", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/choso01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Vm01", name: "Мужчина", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/m01.png", set: "Весеннее цветение", canUpgrade: false, animImage: null, season: "spring" },
    { id: "Varlekino01", name: "Арлекино", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/arlekino01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/arlekino01.gif", season: "spring" },
    { id: "Vrio01", name: "Рио", rank: "V", rankLabel: "V", color: "#ff88cc", rankOrder: 1.7, image: "images/events/spring/rio01.png", set: "Весеннее цветение", canUpgrade: true, animImage: "images/events/spring/anim/rio01.gif", season: "spring" },

    // L

    { id: "Lnevillet01", name: "Нёвиллет", rank: "L", rankLabel: "L", color: "#ffaa44", rankOrder: 1.8, image: "images/events/summer/nevillet01.png", set: "Летняя жара", canUpgrade: false, animImage: null, season: "summer" },
    { id: "Lmiku01", name: "Хацунэ Мику", rank: "L", rankLabel: "L", color: "#ffaa44", rankOrder: 1.8, image: "images/events/summer/miku01.png", set: "Летняя жара", canUpgrade: true, animImage: "images/events/spring/anim/miku01.gif", season: "summer" },
    { id: "Lkafka01", name: "Кафка", rank: "L", rankLabel: "L", color: "#ffaa44", rankOrder: 1.8, image: "images/events/summer/kafka01.png", set: "Летняя жара", canUpgrade: false, animImage: null, season: "summer" }
];
