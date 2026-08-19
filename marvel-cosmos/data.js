// MCU Veri Yapısı (Düğümler ve Bağlantılar)
// Faz 1=1, Faz 2=2, Faz 3=3, Faz 4=4, Faz 5=5, Yaklaşan=6, Uydu/Diğer=7

const nodes = [
    // --- Merkez Düğümler (Çok Büyük) ---
    { id: "Avengers (2012)", group: 1, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 15 },
    { id: "Avengers: Age of Ultron", group: 2, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/f/ff/Avengers_Age_of_Ultron_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 12 },
    { id: "Infinity War", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 15 },
    { id: "Endgame", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 20 },
    { id: "Captain America: Civil War", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 15 },
    { id: "Loki", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Loki_%28TV_series%29_logo.png/330px-Loki_%28TV_series%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 12 },

    // --- Faz 1 ---
    { id: "Iron Man", group: 1, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "Iron Man 2", group: 1, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/e/ed/Iron_Man_2_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "The Incredible Hulk", group: 1, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/f/f0/The_Incredible_Hulk_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Thor", group: 1, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/9/95/Thor_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "Captain America: The First Avenger", group: 1, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },

    // --- Faz 2 ---
    { id: "Iron Man 3", group: 2, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "Thor: The Dark World", group: 2, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/7/7f/Thor_The_Dark_World_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Captain America: The Winter Soldier", group: 2, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Guardians of the Galaxy", group: 2, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/3/33/Guardians_of_the_Galaxy_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 8 },
    { id: "Ant-Man", group: 2, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/1/12/Ant-Man_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },

    // --- Faz 3 ---
    { id: "Doctor Strange", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Spider-Man: Homecoming", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/f/f9/Spider-Man_Homecoming_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "Black Panther", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/d/d6/Black_Panther_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Thor: Ragnarok", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Thor_Ragnarok_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Captain Marvel", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/4/4e/Captain_Marvel_%28film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Spider-Man: Far From Home", group: 3, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },

    // --- Faz 4 ---
    { id: "WandaVision", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/WandaVision_logo.png/330px-WandaVision_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 8 },
    { id: "The Falcon and the Winter Soldier", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/The_Falcon_and_the_Winter_Soldier_logo.png/330px-The_Falcon_and_the_Winter_Soldier_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 7 },
    { id: "Black Widow", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/e/e9/Black_Widow_%282021_film%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Shang-Chi", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/7/74/Shang-Chi_and_the_Legend_of_the_Ten_Rings_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Eternals", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "Hawkeye", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Hawkeye_%28miniseries%29_logo.png/330px-Hawkeye_%28miniseries%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 7 },
    { id: "Spider-Man: No Way Home", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Moon Knight", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/Moon_Knight_%28miniseries%29_logo.jpg/330px-Moon_Knight_%28miniseries%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 3 },
    { id: "Ms. Marvel", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Ms._Marvel_%28miniseries%29_logo.jpg/330px-Ms._Marvel_%28miniseries%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 5 },
    { id: "Thor: Love and Thunder", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "She-Hulk", group: 4, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/She-Hulk_Attorney_at_Law_logo.jpg/330px-She-Hulk_Attorney_at_Law_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 6 },
    { id: "Werewolf by Night", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/0/06/Werewolf_by_Night_%28TV_special%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 3 },
    { id: "Black Panther: Wakanda Forever", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "GotG Holiday Special", group: 4, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Guardians_of_the_Galaxy_Holiday_Special_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 4 },

    // --- Faz 5 ve Sonrası ---
    { id: "Quantumania", group: 5, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 6 },
    { id: "GotG Vol. 3", group: 5, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/7/74/Guardians_of_the_Galaxy_Vol._3_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "Secret Invasion", group: 5, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Secret_Invasion_%28miniseries%29_logo.jpg/330px-Secret_Invasion_%28miniseries%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 5 },
    { id: "The Marvels", group: 5, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Echo", group: 5, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Echo_%28miniseries%29_logo.jpg/330px-Echo_%28miniseries%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 5 },
    { id: "Deadpool & Wolverine", group: 5, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Deadpool_%26_Wolverine_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Agatha All Along", group: 5, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Agatha_All_Along_logo.jpg/330px-Agatha_All_Along_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 5 },
    { id: "Daredevil: Born Again", group: 5, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Daredevil_Born_Again_logo.jpeg/330px-Daredevil_Born_Again_logo.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 6 },
    { id: "Captain America: Brave New World", group: 5, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 7 },
    { id: "Thunderbolts*", group: 5, type: "movie", img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg", val: 8 },
    { id: "Ironheart", group: 5, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ironheart_%28miniseries%29_logo.png/330px-Ironheart_%28miniseries%29_logo.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 5 },
    { id: "Wonder Man", group: 5, type: "series", img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg", val: 4 },

    // --- Yaklaşan / Uydu Düğümler ---
    { id: "Fantastic Four: First Steps", group: 6, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Fantastic_Four_First_Steps_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 5 },
    { id: "Spider-Man: Brand New Day", group: 6, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 4 },
    { id: "Avengers: Doomsday", group: 6, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/e/ee/Avengers_Doomsday_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 10 },
    { id: "Vision Quest", group: 6, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/VisionQuest_logo.jpg/330px-VisionQuest_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 4 },
    
    // Geçmiş Miras (Satellites)
    { id: "Netflix Daredevil", group: 7, type: "series", img: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Daredevil_%28TV_series%29_logo.jpg/330px-Daredevil_%28TV_series%29_logo.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail", val: 4 },
    { id: "Fox X-Men / Deadpool", group: 7, type: "movie", img: "https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled", val: 4 }
];

const links = [
    // Faz 1
    { source: "Iron Man", target: "Iron Man 2", type: "direct", description: "Tony Stark'ın Iron Man olduğunu açıklamasıyla başlayan doğrudan devam hikayesi.", timecodes: { sourceTime: "02:00:15", targetTime: "00:00:00" } },
    { source: "Iron Man", target: "The Incredible Hulk", type: "postcredit", description: "Tony Stark, Thaddeus Ross ile barda görüşerek Avengers girişiminden bahseder. (Post-credit)", timecodes: { sourceTime: "02:05:40", targetTime: "01:51:30" } },
    { source: "Iron Man", target: "Avengers (2012)", type: "postcredit", description: "Nick Fury, Tony Stark'ı ziyaret ederek 'Avengers Initiative'i duyurur." },
    { source: "The Incredible Hulk", target: "Avengers (2012)", type: "crossover", description: "Bruce Banner'ın kontrol altına aldığı güçlerinin Avengers takımında kullanılması." },
    { source: "The Incredible Hulk", target: "Shang-Chi", type: "crossover", description: "Abomination'ın (Emil Blonsky) yeraltı dövüş kulübünde Wong ile görülmesi." },
    { source: "The Incredible Hulk", target: "She-Hulk", type: "crossover", description: "Bruce Banner'ın kuzeni Jennifer Walters ile kan teması sonucu Hulk güçlerinin aktarılması." },
    { source: "The Incredible Hulk", target: "Captain America: Brave New World", type: "crossover", description: "Thunderbolt Ross ve The Leader karakterlerinin yıllar sonra geri dönüşü." },
    { source: "Iron Man 2", target: "Black Widow", type: "crossover", description: "Natasha Romanoff'un (Black Widow) SHIELD ajanı olarak ilk kez sahneye çıkışı." },
    { source: "Iron Man 2", target: "Avengers (2012)", type: "crossover", description: "Tony ve Natasha'nın SHIELD için Avengers takımının temellerini atması." },
    { source: "Iron Man 2", target: "Thor", type: "postcredit", description: "Ajan Coulson'ın New Mexico'da Thor'un çekicini (Mjolnir) bulması.", timecodes: { sourceTime: "02:03:10", targetTime: "00:34:00" } },
    { source: "Thor", target: "Avengers (2012)", type: "crossover", description: "Loki'nin dünyaya gelmesi ve Thor'un onu durdurmak için Avengers'a katılması.", timecodes: { sourceTime: "01:50:20", targetTime: "00:02:15" } },
    { source: "Thor", target: "Thor: The Dark World", type: "direct", description: "Loki'nin Asgard zindanlarına atılması ve Thor'un 9 Diyar'da düzeni sağlamaya çalışması." },
    { source: "Captain America: The First Avenger", target: "Avengers (2012)", type: "crossover", description: "Buzda donan Steve Rogers'ın uyanıp Nick Fury tarafından Avengers'a dahil edilmesi.", timecodes: { sourceTime: "01:54:10", targetTime: "00:20:15" } },
    { source: "Captain America: The First Avenger", target: "Captain America: The Winter Soldier", type: "event", description: "Bucky Barnes'ın Hydra tarafından Winter Soldier'a dönüştürülüp günümüzde ortaya çıkması.", timecodes: { sourceTime: "01:14:50", targetTime: "00:26:00" } },

    // Avengers 2012 Etkileri
    { source: "Avengers (2012)", target: "Iron Man 3", type: "event", description: "New York savaşının Tony Stark üzerinde bıraktığı ağır PTSD (Travma) etkisi.", timecodes: { sourceTime: "02:10:00", targetTime: "00:05:30" } },
    { source: "Avengers (2012)", target: "Spider-Man: Homecoming", type: "event", description: "New York savaşından kalan Chitauri uzaylı enkazlarının Vulture tarafından toplanması.", timecodes: { sourceTime: "02:15:30", targetTime: "00:00:10" } },
    { source: "Avengers (2012)", target: "Hawkeye", type: "event", description: "Kate Bishop'ın New York işgali sırasında Hawkeye'ı görüp ondan ilham alması.", timecodes: { sourceTime: "01:55:00", targetTime: "00:02:40" } },
    { source: "Avengers (2012)", target: "Netflix Daredevil", type: "event", description: "New York işgali ('The Incident') sonrası Hell's Kitchen'da artan suç oranları." },
    { source: "Avengers (2012)", target: "Loki", type: "crossover", description: "2012'deki Tesseract'ı çalan alternatif zaman çizelgesindeki Loki'nin hikayesi.", timecodes: { sourceTime: "02:04:30", targetTime: "00:01:20" } },

    // Faz 2
    { source: "Iron Man 3", target: "Shang-Chi", type: "crossover", description: "Sahte Mandarin (Trevor Slattery) ve gerçek Ten Rings organizasyonunun bağlantısı." },
    { source: "Iron Man 3", target: "Wonder Man", type: "crossover", description: "Trevor Slattery'nin Hollywood ve Wonder Man ile olan olası bağı." },
    { source: "Thor: The Dark World", target: "Guardians of the Galaxy", type: "postcredit", description: "Sif ve Volstagg'ın Reality Stone'u (Aether) Collector'a (The Collector) teslim etmesi.", timecodes: { sourceTime: "01:47:00", targetTime: "01:22:10" } },
    { source: "Thor: The Dark World", target: "Endgame", type: "crossover", description: "Thor ve Rocket'in zamanda yolculukla 2013 Asgard'ına dönüp Reality Stone'u alması." },
    { source: "Captain America: The Winter Soldier", target: "The Falcon and the Winter Soldier", type: "crossover", description: "Sam Wilson ve Bucky Barnes'ın dostluğunun temellerinin atılması." },
    { source: "Captain America: The Winter Soldier", target: "Avengers: Age of Ultron", type: "event", description: "SHIELD'ın çöküşü sonrası Hydra üslerine yapılan baskınların Avengers'ı tekrar toplaması.", timecodes: { sourceTime: "02:05:10", targetTime: "00:01:00" } },
    { source: "Guardians of the Galaxy", target: "Infinity War", type: "crossover", description: "Guardians ekibinin uzayda Thor ile karşılaşması ve Thanos tehdidine dahil olması.", timecodes: { sourceTime: "01:55:00", targetTime: "00:15:30" } },
    { source: "Avengers: Age of Ultron", target: "WandaVision", type: "crossover", description: "Wanda'nın (Scarlet Witch) ve Vision'ın doğuşu ile aralarındaki romantik ilişkinin başlangıcı." },
    { source: "Avengers: Age of Ultron", target: "Captain America: Civil War", type: "event", description: "Sokovia'nın yıkımının Sokovia Anlaşmaları'na (Sokovia Accords) neden olması." },
    { source: "Avengers: Age of Ultron", target: "Black Panther", type: "crossover", description: "Ulysses Klaue'nun Wakanda vibranyumunu çalması ve Vibranyum bağlantısı." },
    { source: "Avengers: Age of Ultron", target: "Thor: Ragnarok", type: "crossover", description: "Hulk'ın (Bruce Banner) Quinjet ile uzaya uçması ve Sakaar gezegenine düşmesi.", timecodes: { sourceTime: "02:08:50", targetTime: "01:02:10" } },
    { source: "Ant-Man", target: "Captain America: Civil War", type: "crossover", description: "Falcon'ın Ant-Man'i keşfedip Captain America'nın takımına dahil etmesi.", timecodes: { sourceTime: "01:52:10", targetTime: "01:06:20" } },
    
    // Faz 3
    { source: "Captain America: Civil War", target: "Black Panther", type: "crossover", description: "Kral T'Chaka'nın ölümü sonrası T'Challa'nın tahta geçmek üzere Wakanda'ya dönüşü." },
    { source: "Captain America: Civil War", target: "Spider-Man: Homecoming", type: "crossover", description: "Tony Stark'ın Peter Parker'ı takıma alması ve Peter'ın okul hayatına dönüşü.", timecodes: { sourceTime: "01:14:00", targetTime: "00:03:20" } },
    { source: "Captain America: Civil War", target: "The Falcon and the Winter Soldier", type: "crossover", description: "Helmut Zemo'nun hapsedilmesi ve sonradan Sam ve Bucky ile yüzleşmesi." },
    { source: "Captain America: Civil War", target: "Black Widow", type: "event", description: "Natasha'nın anlaşmaları ihlal ettiği için kaçak durumuna düşmesi ve geçmişiyle yüzleşmesi.", timecodes: { sourceTime: "02:14:15", targetTime: "00:15:00" } },
    { source: "Doctor Strange", target: "Thor: Ragnarok", type: "crossover", description: "Doctor Strange'in Thor'a babası Odin'i bulması için yardım etmesi.", timecodes: { sourceTime: "01:50:30", targetTime: "00:18:40" } },
    { source: "Doctor Strange", target: "Infinity War", type: "crossover", description: "Hulk'ın Sanctum Sanctorum'a düşerek Strange'i Thanos tehdidine karşı uyarması." },
    { source: "Doctor Strange", target: "Spider-Man: No Way Home", type: "crossover", description: "Peter Parker'ın kimliğini unutturmak için Strange'den büyü yapmasını istemesi." },
    { source: "Black Panther", target: "Infinity War", type: "crossover", description: "Bucky'nin Wakanda'da iyileşmesi ve Wakanda ordusunun Thanos'un ordusuyla savaşması." },
    { source: "Black Panther", target: "Black Panther: Wakanda Forever", type: "direct", description: "Kral T'Challa'nın vefatı sonrası Wakanda'nın ve Shuri'nin yas süreci." },
    { source: "Thor: Ragnarok", target: "Infinity War", type: "direct", description: "Asgard mülteci gemisinin uzayda doğrudan Thanos'un ana gemisiyle karşılaşması.", timecodes: { sourceTime: "02:08:15", targetTime: "00:00:45" } },
    { source: "Captain Marvel", target: "Infinity War", type: "postcredit", description: "Nick Fury'nin toza dönüşmeden saniyeler önce çağrı cihazıyla Captain Marvel'ı çağırması.", timecodes: { sourceTime: "02:00:10", targetTime: "02:27:00" } },
    { source: "Captain Marvel", target: "Secret Invasion", type: "crossover", description: "Talos ve Skrull'ların dünyaya yerleşmesi ve Captain Marvel'ın onlara ev bulma sözü." },
    { source: "Captain Marvel", target: "The Marvels", type: "direct", description: "Monica Rambeau, Kamala Khan ve Carol Danvers'ın güçlerinin birbirine dolanması." },

    // Infinity War & Endgame (The Blip)
    { source: "Infinity War", target: "Endgame", type: "direct", description: "Thanos'un parmak şıklatması (The Snap) ve Avengers'ın kalan üyelerinin intikam arayışı.", timecodes: { sourceTime: "02:29:30", targetTime: "00:01:00" } },
    { source: "Endgame", target: "Spider-Man: Far From Home", type: "event", description: "Blip sonrası dünyanın durumu ve Tony Stark'ın fedakarlığı sonrası Peter'ın yası." },
    { source: "Endgame", target: "The Falcon and the Winter Soldier", type: "event", description: "Yaşlı Steve Rogers'ın kalkanı Sam Wilson'a devretmesi.", timecodes: { sourceTime: "02:54:10", targetTime: "00:06:30" } },
    { source: "Endgame", target: "WandaVision", type: "event", description: "Vision'ın ölümü sonrası yas tutan Wanda'nın Westview kasabasını gerçeklik büyüsüyle ele geçirmesi.", timecodes: { sourceTime: "02:50:20", targetTime: "00:01:00" } },
    { source: "Endgame", target: "Hawkeye", type: "event", description: "Clint Barton'ın Ronin olarak işlediği cinayetlerin geçmişinden gelip onu bulması.", timecodes: { sourceTime: "00:20:10", targetTime: "00:12:45" } },
    { source: "Endgame", target: "Eternals", type: "event", description: "Hulk'ın şıklatmasıyla milyarlarca insanın geri dönmesinin Celestial Tiamut'un uyanış enerjisini tetiklemesi.", timecodes: { sourceTime: "02:06:00", targetTime: "00:15:20" } },
    { source: "Endgame", target: "Thor: Love and Thunder", type: "direct", description: "Thor'un Guardians of the Galaxy ekibiyle uzaya açılması ve kilolarından kurtulması.", timecodes: { sourceTime: "02:51:30", targetTime: "00:10:00" } },
    { source: "Endgame", target: "Quantumania", type: "event", description: "Ant-Man'in dünyayı kurtaran bir Avenger olarak ünlü olması ve kızı Cassie'nin büyümesi." },
    { source: "Spider-Man: Far From Home", target: "Spider-Man: No Way Home", type: "direct", description: "Mysterio'nun ölmeden önce Spider-Man'in kimliğini tüm dünyaya ifşa etmesi.", timecodes: { sourceTime: "02:05:20", targetTime: "00:00:20" } },

    // Faz 4
    { source: "WandaVision", target: "Agatha All Along", type: "direct", description: "Wanda'nın Agatha Harkness'ı Westview'da hafızası silinmiş bir şekilde hapsetmesi.", timecodes: { sourceTime: "EP9 00:38:10", targetTime: "EP1 00:02:00" } },
    { source: "WandaVision", target: "The Marvels", type: "crossover", description: "Monica Rambeau'nun Hex bariyerinden geçerek ışık tabanlı güçler kazanması." },
    { source: "WandaVision", target: "Vision Quest", type: "crossover", description: "SWORD tarafından yaratılan White Vision'ın anılarını geri kazanıp uçarak uzaklaşması." },
    { source: "The Falcon and the Winter Soldier", target: "Captain America: Brave New World", type: "direct", description: "Sam Wilson'ın resmen yeni Captain America rolünü üstlenmesi ve Joaquín Torres'in yeni Falcon olması." },
    { source: "The Falcon and the Winter Soldier", target: "Thunderbolts*", type: "crossover", description: "US Agent (John Walker) ve Valentina Allegra de Fontaine'in karanlık takım için anlaşması." },
    { source: "Loki", target: "Quantumania", type: "crossover", description: "He Who Remains'in ölümüyle Çoklu Evrenin parçalanması ve Kang varyantlarının serbest kalması.", timecodes: { sourceTime: "EP6 00:35:20", targetTime: "02:02:00" } },
    { source: "Loki", target: "Deadpool & Wolverine", type: "event", description: "TVA'in (Time Variance Authority) Deadpool'u yakalaması ve evren kurtarma görevi." },
    { source: "Black Widow", target: "Hawkeye", type: "crossover", description: "Yelena Belova'nın Natasha'nın ölümünden Clint Barton'ı sorumlu tutup peşine düşmesi.", timecodes: { sourceTime: "02:12:40", targetTime: "EP4 00:32:15" } },
    { source: "Black Widow", target: "Thunderbolts*", type: "crossover", description: "Yelena Belova, Red Guardian ve Taskmaster'ın Thunderbolts ekibine dahil olması." },
    { source: "Shang-Chi", target: "Wonder Man", type: "crossover", description: "Trevor Slattery'nin geri dönüşü ve aktörlük hayatının Wonder Man serisine bağlanması." },
    { source: "Eternals", target: "Captain America: Brave New World", type: "event", description: "Okyanusun ortasında donan devasa Celestial (Tiamut) kalıntılarının dünya devletleri arasında krize (Adamantium) yol açması." },
    { source: "Hawkeye", target: "Echo", type: "crossover", description: "Maya Lopez'in (Echo) Kingpin'in kendisini kandırdığını öğrenip onu vurması.", timecodes: { sourceTime: "EP6 00:52:10", targetTime: "EP1 00:30:00" } },
    { source: "Hawkeye", target: "Daredevil: Born Again", type: "crossover", description: "Kingpin'in (Wilson Fisk) New York yeraltı dünyasındaki etkinliğinin geri dönüşü." },
    { source: "Ms. Marvel", target: "Captain Marvel", type: "event", description: "Kamala'nın Captain Marvel hayranlığı ve gizemli bir bileklik bulup güçler kazanması." },
    { source: "Ms. Marvel", target: "The Marvels", type: "direct", description: "Kamala Khan'ın bilekliğinin gücüyle Carol Danvers ile yer değiştirmesi.", timecodes: { sourceTime: "EP6 00:46:15", targetTime: "00:02:50" } },
    { source: "Thor: Love and Thunder", target: "GotG Holiday Special", type: "crossover", description: "Thor'dan ayrılan Guardians ekibinin Knowhere'i satın alıp yeni üs yapmaları." },
    { source: "She-Hulk", target: "Daredevil: Born Again", type: "crossover", description: "Matt Murdock (Daredevil) ile Jennifer Walters'ın hem mahkemede hem de dışarıda yakınlaşması." },
    { source: "Black Panther: Wakanda Forever", target: "Ironheart", type: "crossover", description: "Riri Williams'ın (Ironheart) Wakanda teknolojisinden ilham alarak kendi zırhını yapması." },
    { source: "Black Panther: Wakanda Forever", target: "Thunderbolts*", type: "crossover", description: "CIA Direktörü Val'in (Valentina) Wakanda ve Vibranyum'a olan saplantılı planları." },
    { source: "GotG Holiday Special", target: "GotG Vol. 3", type: "direct", description: "Guardians'ın Knowhere'i inşa etmiş olması ve Mantis'in Star-Lord'un kız kardeşi olduğunun ortaya çıkması." },

    // Faz 5
    { source: "Quantumania", target: "Loki", type: "postcredit", description: "Loki ve Mobius'un 1920'lerde Kang varyantı Victor Timely'yi bulması (Post-credit).", timecodes: { sourceTime: "02:04:10", targetTime: "S2_EP3 00:15:20" } },
    { source: "Secret Invasion", target: "The Marvels", type: "crossover", description: "Skrull-İnsan çatışması sonrası Nick Fury'nin SABER uzay istasyonuna geri dönmesi." },
    { source: "The Marvels", target: "Deadpool & Wolverine", type: "postcredit", description: "Monica Rambeau'nun paralel evrendeki X-Men laboratuvarında uyanması ve Beast'i görmesi." },
    { source: "Echo", target: "Daredevil: Born Again", type: "crossover", description: "Kingpin'in Echo tarafından iyileştirildikten sonra New York belediye başkanlığına aday olmayı düşünmesi." },
    { source: "Deadpool & Wolverine", target: "Fox X-Men / Deadpool", type: "event", description: "Deadpool'un kendi evrenini (Earth-10005) yok olmaktan kurtarmak için Wolverine'i bulması." },
    { source: "Agatha All Along", target: "Vision Quest", type: "crossover", description: "Billy Maximoff'un (Wiccan) reenkarnasyonu ve muhtemelen Vision ile aileyi bir araya getirme çabası." },
    { source: "Daredevil: Born Again", target: "Spider-Man: No Way Home", type: "event", description: "Matt Murdock'ın Peter Parker'ın avukatlığını yapması ve radar yeteneklerini göstermesi." },
    { source: "Daredevil: Born Again", target: "Netflix Daredevil", type: "event", description: "Kingpin, Punisher, Bullseye ve Foggy gibi tüm orijinal Netflix karakterlerinin resmi MCU devamı." },
    { source: "Captain America: Brave New World", target: "Thunderbolts*", type: "crossover", description: "Başkan Ross'un (Red Hulk) dünya politikaları ve Valentina'nın kontrolündeki anti-kahraman takımı." },
    { source: "Thunderbolts*", target: "Avengers: Doomsday", type: "direct", description: "Thunderbolts takımının eylemlerinin yaklaşan Doom tehlikesi öncesi dünya düzenini sarsması." },
    { source: "Ironheart", target: "Wonder Man", type: "crossover", description: "Batı Yakası (West Coast) karakterleri ve organizasyonlarının birbirine bağlanması ihtimali." }, 

    // Upcoming
    { source: "Fantastic Four: First Steps", target: "Avengers: Doomsday", type: "direct", description: "Fantastic Four'un alternatif retro evrenden gelip doğrudan Doctor Doom ile yüzleşecekleri süreç." },
    { source: "Spider-Man: No Way Home", target: "Spider-Man: Brand New Day", type: "direct", description: "Peter Parker'ın herkes tarafından unutulduktan sonra tek başına sıfırdan kuracağı yeni hayatı." }
];

const mcuData = { nodes, links };
