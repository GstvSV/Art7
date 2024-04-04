const animes = [
    { nome: "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka", categoria: "Aventura", imagem: "./../../../assets/images/animes/dungeon-ni-deai-wo-motomeru-no-wa-machigatteiru-darou-ka.jpg", link: "#", visto: true },
    { nome: "Akatsuki no Yona", categoria: "Aventura", imagem: "./../../../assets/images/animes/akatsuki-no-yona.jpg", link: "#", visto: true },
    { nome: "Sword Art Online", categoria: "Aventura", imagem: "./../../../assets/images/animes/sword-art-online.jpg", link: "#", visto: true },
    { nome: "Ichiban Ushiro no Daimaou", categoria: "Aventura", imagem: "./../../../assets/images/animes/ichiban-ushiro-no-daimaou.jpg", link: "#", visto: true },
    { nome: "Isekai Wa Smartphone To Tomo Ni", categoria: "Aventura", imagem: "./../../../assets/images/animes/isekai-wa-smartphone-to-tomo-ni.jpg", link: "#", visto: true },
    { nome: "Mondaiji-tachi Ga Isekai Kara Kuru Sou Desu Yo", categoria: "Aventura", imagem: "./../../../assets/images/animes/mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo.jpg", link: "#", visto: true },
    { nome: "Rokudenashi Majutsu Koushi to Akashic Records", categoria: "Aventura", imagem: "./../../../assets/images/animes/rokudenashi-majutsu-koushi-to-akashic-records.jpg", link: "#", visto: true },
    { nome: "Seiken Tsukai No Blade Dance", categoria: "Aventura", imagem: "./../../../assets/images/animes/seiken-tsukai-no-blade-dance.jpg", link: "#", visto: true },
    { nome: "Seiken Tsukai No World Break", categoria: "Aventura", imagem: "./../../../assets/images/animes/seiken-tsukai-no-world-break.jpg", link: "#", visto: true },
    { nome: "Tensei Shitara Slime Datta Ken", categoria: "Aventura", imagem: "./../../../assets/images/animes/tensei-shitara-slime-datta-ken.jpg", link: "#", visto: true },
    { nome: "Dragon Crisis", categoria: "Aventura", imagem: "./../../../assets/images/animes/dragon-crisis.jpg", link: "#", visto: false },
    { nome: "Hai to Gensou no Grimgar", categoria: "Aventura", imagem: "./../../../assets/images/animes/hai-to-gensou-no-grimgar.jpg", link: "#", visto: false },
    { nome: "Tsubasa Chronicle", categoria: "Aventura", imagem: "./../../../assets/images/animes/tsubasa-chronicle.jpg", link: "#", visto: false },
    { nome: "Dr. Stone", categoria: "Aventura", imagem: "./../../../assets/images/animes/dr.-stone.jpg", link: "#", visto: false },
    { nome: "Wolf's Rain", categoria: "Aventura", imagem: "./../../../assets/images/animes/wolfs-rain.jpg", link: "#", visto: false },
    { nome: "Digimon Adventure", categoria: "Aventura", imagem: "./../../../assets/images/animes/digimon-adventure.jpg", link: "#", visto: false },
    { nome: "Fairy Tail", categoria: "Aventura", imagem: "./../../../assets/images/animes/fairy-tail.jpg", link: "#", visto: false },
    { nome: "Log Horizon", categoria: "Aventura", imagem: "./../../../assets/images/animes/log-horizon.jpg", link: "#", visto: false },
    { nome: "Pokemon", categoria: "Aventura", imagem: "./../../../assets/images/animes/pokemon.jpg", link: "#", visto: false },
    { nome: "Tate no Yuusha", categoria: "Aventura", imagem: "./../../../assets/images/animes/tate-no-yuusha.jpg", link: "#", visto: false },
    { nome: "Kono Subarashii Sekai ni Shukufuko wo!", categoria: "Aventura", imagem: "./../../../assets/images/animes/kono-subarashii-sekai-ni-shukufuko-wo!.jpg", link: "#", visto: false },
    { nome: "Seisen Cerberus", categoria: "Aventura", imagem: "./../../../assets/images/animes/seisen-cerberus.jpg", link: "#", visto: false },

    { nome: "Little Witch Academia", categoria: "Fantasia", imagem: "./../../../assets/images/animes/little-witch-academia.jpg", link: "#", visto: true },
    { nome: "Mahoutsukai No Yome", categoria: "Fantasia", imagem: "./../../../assets/images/animes/mahoutsukai-no-yome.jpg", link: "#", visto: true },
    { nome: "Zero Kara Hajimeru Mahou No Sho", categoria: "Fantasia", imagem: "./../../../assets/images/animes/zero-kara-hajimeru-mahou-no-sho.jpg", link: "#", visto: true },
    { nome: "Wangu-xian-qiong", categoria: "Fantasia", imagem: "./../../../assets/images/animes/wangu-xian-qiong.jpg", link: "#", visto: false },
    { nome: "Kujira no Kora", categoria: "Fantasia", imagem: "./../../../assets/images/animes/kujira-no-kora.jpg", link: "#", visto: false },
    { nome: "Rewrite", categoria: "Fantasia", imagem: "./../../../assets/images/animes/rewrite.jpg", link: "#", visto: false },
    
    { nome: "Shingeki No Bahamut", categoria: "Acao", imagem: "./../../../assets/images/animes/shingeki-no-bahamut.jpg", link: "#", visto: true },
    { nome: "Mahou Sensou", categoria: "Acao", imagem: "./../../../assets/images/animes/mahou-sensou.jpg", link: "#", visto: true },
    { nome: "Kenja no Mago", categoria: "Acao", imagem: "./../../../assets/images/animes/kenja-no-mago.jpg", link: "#", visto: true },
    { nome: "Gin No Guardian", categoria: "Acao", imagem: "./../../../assets/images/animes/gin-no-guardian.jpg", link: "#", visto: true },
    { nome: "Kyoukai no Kanata", categoria: "Acao", imagem: "./../../../assets/images/animes/kyoukai-no-kanata.jpg", link: "#", visto: true },
    { nome: "Mahouka Koukou no Rettousei", categoria: "Acao", imagem: "./../../../assets/images/animes/mahouka-koukou-no-rettousei.jpg", link: "#", visto: true },
    { nome: "Maoyuu Maou Yuusha", categoria: "Acao", imagem: "./../../../assets/images/animes/maoyuu-maou-yuusha.jpg", link: "#", visto: true },
    { nome: "Nurarihion No Mago", categoria: "Acao", imagem: "./../../../assets/images/animes/nurarihion-no-mago.jpg", link: "#", visto: true },
    { nome: "Rokka No Yuusha", categoria: "Acao", imagem: "./../../../assets/images/animes/rokka-no-yuusha.jpg", link: "#", visto: true },
    { nome: "Baki, O Campeão", categoria: "Acao", imagem: "./../../../assets/images/animes/baki-o-campeao.jpg", link: "#", visto: true },
    { nome: "Black Blood Brothers", categoria: "Acao", imagem: "./../../../assets/images/animes/black-blood-brothers.jpg", link: "#", visto: true },
    { nome: "Dimension W", categoria: "Acao", imagem: "./../../../assets/images/animes/dimension-w.jpg", link: "#", visto: true },
    { nome: "Hamatora: The Animation", categoria: "Acao", imagem: "./../../../assets/images/animes/hamatora-the-animation.jpg", link: "#", visto: true },
    { nome: "K-project", categoria: "Acao", imagem: "./../../../assets/images/animes/k-project.jpg", link: "#", visto: true },
    { nome: "MOB PSYCHO 100", categoria: "Acao", imagem: "./../../../assets/images/animes/mob-psycho-100.jpg", link: "#", visto: true },
    { nome: "Parasyte", categoria: "Acao", imagem: "./../../../assets/images/animes/parasyte.jpg", link: "#", visto: true },
    { nome: "Shingeki no Kyojin", categoria: "Acao", imagem: "./../../../assets/images/animes/shingeki-no-kyojin.jpg", link: "#", visto: true },
    { nome: "Tenrou: Sirius The Jaeger", categoria: "Acao", imagem: "./../../../assets/images/animes/tenrou-sirius-the-jaeger.jpg", link: "#", visto: true },
    { nome: "Ushio To Tora", categoria: "Acao", imagem: "./../../../assets/images/animes/ushio-to-tora.jpg", link: "#", visto: true },
    { nome: "Solo Leveling", categoria: "Acao", imagem: "./../../../assets/images/animes/solo-leveling.jpg", link: "#", visto: false },
    { nome: "Densetsu No Yuusha No Densetsu", categoria: "Acao", imagem: "./../../../assets/images/animes/densetsu-no-yuusha-no-densetsu.jpg", link: "#", visto: false },
    { nome: "Kaze No Stigma", categoria: "Acao", imagem: "./../../../assets/images/animes/kaze-no-stigma.jpg", link: "#", visto: false },
    { nome: "Kuusen Madoushi Kouhosei No Kyoukan", categoria: "Acao", imagem: "./../../../assets/images/animes/kuusen-madoushi-kouhosei-no-kyoukan.jpg", link: "#", visto: false },
    { nome: "Shakugan no shana", categoria: "Acao", imagem: "./../../../assets/images/animes/shakugan-no-shana.jpg", link: "#", visto: false },
    { nome: "Sousei No Onmyouji", categoria: "Acao", imagem: "./../../../assets/images/animes/sousei-no-onmyouji.jpg", link: "#", visto: false },
    { nome: "Nanatsu No Taizai", categoria: "Acao", imagem: "./../../../assets/images/animes/nanatsu-no-taizai.jpg", link: "#", visto: false },
    { nome: "Dragon Ball", categoria: "Acao", imagem: "./../../../assets/images/animes/dragon-ball.jpg", link: "#", visto: false },
    { nome: "Black Clover", categoria: "Acao", imagem: "./../../../assets/images/animes/black-clover.jpg", link: "#", visto: false },
    { nome: "Accel World", categoria: "Acao", imagem: "./../../../assets/images/animes/accel-world.jpg", link: "#", visto: false },
    { nome: "Brave 10", categoria: "Acao", imagem: "./../../../assets/images/animes/brave-10.jpg", link: "#", visto: false },
    { nome: "Cross Ange", categoria: "Acao", imagem: "./../../../assets/images/animes/cross-ange.jpg", link: "#", visto: false },
    { nome: "Guilty Crown", categoria: "Acao", imagem: "./../../../assets/images/animes/guilty-crown.jpg", link: "#", visto: false },
    { nome: "Hitsugi no Chaika", categoria: "Acao", imagem: "./../../../assets/images/animes/hitsugi-no-chaika.jpg", link: "#", visto: false },
    { nome: "Fate", categoria: "Acao", imagem: "./../../../assets/images/animes/fate.jpg", link: "#", visto: false },
    { nome: "Tales of The Abyss", categoria: "Acao", imagem: "./../../../assets/images/animes/tales-of-the-abyss.jpg", link: "#", visto: false },
    { nome: "Freezing", categoria: "Acao", imagem: "./../../../assets/images/animes/freezing.jpg", link: "#", visto: false },
    { nome: "Busou Renkin", categoria: "Acao", imagem: "./../../../assets/images/animes/busou-renkin.jpg", link: "#", visto: false },
    { nome: "World Trigger", categoria: "Acao", imagem: "./../../../assets/images/animes/world-trigger.jpg", link: "#", visto: false },
    { nome: "Phantasy Star Online 2", categoria: "Acao", imagem: "./../../../assets/images/animes/phantasy-star-online-2.jpg", link: "#", visto: false },
    { nome: "Vinland Saga", categoria: "Acao", imagem: "./../../../assets/images/animes/vinland-saga.jpg", link: "#", visto: false },
    { nome: "Black Cat", categoria: "Acao", imagem: "./../../../assets/images/animes/black-cat.jpg", link: "#", visto: false },
    { nome: "Chrome Shelled Regios", categoria: "Acao", imagem: "./../../../assets/images/animes/chrome-shelled-regios.jpg", link: "#", visto: false },
    { nome: "Taimadou Gakuen", categoria: "Acao", imagem: "./../../../assets/images/animes/taimadou-gakuen.jpg", link: "#", visto: false },
    { nome: "Zetman", categoria: "Acao", imagem: "./../../../assets/images/animes/zetman.jpg", link: "#", visto: false },
    { nome: "Zetsuen no Tempest", categoria: "Acao", imagem: "./../../../assets/images/animes/zetsuen-no-tempest.jpg", link: "#", visto: false },
    { nome: "Arslan Senki", categoria: "Acao", imagem: "./../../../assets/images/animes/arslan-senki.jpg", link: "#", visto: false },
    { nome: "Boruto", categoria: "Acao", imagem: "./../../../assets/images/animes/boruto.jpg", link: "#", visto: false },
    { nome: "Claymore", categoria: "Acao", imagem: "./../../../assets/images/animes/claymore.jpg", link: "#", visto: false },
    { nome: "Code Geass", categoria: "Acao", imagem: "./../../../assets/images/animes/code-geass.jpg", link: "#", visto: false },
    { nome: "Durarara", categoria: "Acao", imagem: "./../../../assets/images/animes/durarara.jpg", link: "#", visto: false },
    { nome: "FullMetal Alchemist", categoria: "Acao", imagem: "./../../../assets/images/animes/fullmetal-alchemist.jpg", link: "#", visto: false },
    { nome: "Garo: Honoo No Kokuin", categoria: "Acao", imagem: "./../../../assets/images/animes/garo-honoo-no-kokuin.jpg", link: "#", visto: false },
    { nome: "Granblue Fantasy", categoria: "Acao", imagem: "./../../../assets/images/animes/granblue-fantasy.jpg", link: "#", visto: false },
    { nome: "Kill la Kill", categoria: "Acao", imagem: "./../../../assets/images/animes/kill-la-kill.jpg", link: "#", visto: false },
    { nome: "Kimetsu no Yaiba", categoria: "Acao", imagem: "./../../../assets/images/animes/kimetsu-no-yaiba.jpg", link: "#", visto: false },
    { nome: "Kuromukuro", categoria: "Acao", imagem: "./../../../assets/images/animes/kuromukuro.jpg", link: "#", visto: false },
    { nome: "One Piece", categoria: "Acao", imagem: "./../../../assets/images/animes/one-piece.jpg", link: "#", visto: false },
    { nome: "Samurai X", categoria: "Acao", imagem: "./../../../assets/images/animes/samurai-x.jpg", link: "#", visto: false },
    { nome: "Seiken No Blacksmith", categoria: "Acao", imagem: "./../../../assets/images/animes/seiken-no-blacksmith.jpg", link: "#", visto: false },
    { nome: "To aru majutsu no index", categoria: "Acao", imagem: "./../../../assets/images/animes/to-aru-majutsu-no-index.jpg", link: "#", visto: false },
    { nome: "Yu Yu Hakusho", categoria: "Acao", imagem: "./../../../assets/images/animes/yu-yu-hakusho.jpg", link: "#", visto: false },
    { nome: "Bleach", categoria: "Acao", imagem: "./../../../assets/images/animes/bleach.jpg", link: "#", visto: false },
    { nome: "Boku no Hero Academia", categoria: "Acao", imagem: "./../../../assets/images/animes/boku-no-hero-academia.jpg", link: "#", visto: false },

    { nome: "Tsuujou Kougeki ga Zentai Kougeki de Ni-kai Kougeki no Okaasan wa Suki Desu ka?", categoria: "Comedia", imagem: "./../../../assets/images/animes/tsuujou-kougeki-ga-zentai-kougeki-de-ni-kai-kougeki-no-okaasan-wa-suki-desu-ka.jpg", link: "#", visto: true },
    { nome: "Jitsu Wa Watashi Wa", categoria: "Comedia", imagem: "./../../../assets/images/animes/jitsu-wa-watashi-wa.jpg", link: "#", visto: true },
    { nome: "Maji De Watashi Ni Koi Shinasai!", categoria: "Comedia", imagem: "./../../../assets/images/animes/maji-de-watashi-ni-koi-shinasai!.jpg", link: "#", visto: true },
    { nome: "Baka to Test", categoria: "Comedia", imagem: "./../../../assets/images/animes/baka-to-test.jpg", link: "#", visto: true },
    { nome: "Gundam Build Fighters", categoria: "Comedia", imagem: "./../../../assets/images/animes/gundam-build-fighters.jpg", link: "#", visto: true },
    { nome: "IS : Infinite Stratos", categoria: "Comedia", imagem: "./../../../assets/images/animes/is-infinite-stratos.jpg", link: "#", visto: true },
    { nome: "Kobayashi-san Chi no Maid Dragon", categoria: "Comedia", imagem: "./../../../assets/images/animes/kobayashi-san-chi-no-maid-dragon.jpg", link: "#", visto: true },
    { nome: "Ben-to", categoria: "Comedia", imagem: "./../../../assets/images/animes/bento.jpg", link: "#", visto: true },
    { nome: "Busou Shoujo Machiavellianism", categoria: "Comedia", imagem: "./../../../assets/images/animes/busou-shoujo-machiavellism.jpg", link: "#", visto: true },
    { nome: "Blood Lad", categoria: "Comedia", imagem: "./../../../assets/images/animes/blood-lad.jpg", link: "#", visto: true },
    { nome: "Inou Battle Wa Nichijou-kei No Naka De", categoria: "Comedia", imagem: "./../../../assets/images/animes/inou-battle-wa-nichijou-kei-no-naka-de.jpg", link: "#", visto: true },
    { nome: "Kakegurui", categoria: "Comedia", imagem: "./../../../assets/images/animes/kakegurui.jpg", link: "#", visto: true },
    { nome: "Nisekoi", categoria: "Comedia", imagem: "./../../../assets/images/animes/nisekoi.jpg", link: "#", visto: true },
    { nome: "Saiki Kusuo no Psi nan", categoria: "Comedia", imagem: "./../../../assets/images/animes/saiki-kusuo-no-psi-nan.jpg", link: "#", visto: true },
    { nome: "Tsurezure Children", categoria: "Comedia", imagem: "./../../../assets/images/animes/tsurezure-children.jpg", link: "#", visto: true },
    { nome: "Sakamoto Desu Ga", categoria: "Comedia", imagem: "./../../../assets/images/animes/sakamoto-desu-ga.jpg", link: "#", visto: false },
    { nome: "Joshikousei No Mudazukai", categoria: "Comedia", imagem: "./../../../assets/images/animes/joshikousei-no-mudazukai.jpg", link: "#", visto: false },
    { nome: "Yamada-kun to Nananin no Majo", categoria: "Comedia", imagem: "./../../../assets/images/animes/yamadakun-to-nananin-no-majo.jpg", link: "#", visto: false },
    { nome: "Dumbbell Nan Kilo Moteru", categoria: "Comedia", imagem: "./../../../assets/images/animes/dumbbell-nan-kilo-moteru.jpg", link: "#", visto: false },
    { nome: "Beelzebub", categoria: "Comedia", imagem: "./../../../assets/images/animes/beelzebub.jpg", link: "#", visto: false },
    { nome: "Katekyo Hitman REBORN!", categoria: "Comedia", imagem: "./../../../assets/images/animes/katekyo-hitman-REBORN!.jpg", link: "#", visto: false },
    { nome: "Hi Score Girl", categoria: "Comedia", imagem: "./../../../assets/images/animes/hi-score-girl.jpg", link: "#", visto: false },
    { nome: "Seishun Buta Yarou Wa Bunny Girl Senpai No Yume Wo Minai", categoria: "Comedia", imagem: "./../../../assets/images/animes/seishun-buta-yarou-wa-bunny-girl-senpai-no-yume-wo-minai.jpg", link: "#", visto: false },
    { nome: "Shokugeki no Souma", categoria: "Comedia", imagem: "./../../../assets/images/animes/shokugeki-no-souma.jpg", link: "#", visto: false },
    { nome: "Wagaya No Oinari-Sama", categoria: "Comedia", imagem: "./../../../assets/images/animes/wagaya-no-oinari-sama.jpg", link: "#", visto: false },

    { nome: "Tokyo Ghoul", categoria: "Drama", imagem: "./../../../assets/images/animes/tokyo-ghoul.jpg", link: "#", visto: true },
    { nome: "Another", categoria: "Drama", imagem: "./../../../assets/images/animes/another.jpg", link: "#", visto: true },
    { nome: "Ansatsu Kyoshitsu", categoria: "Drama", imagem: "./../../../assets/images/animes/ansatsu-kyoshitsu.jpg", link: "#", visto: true },
    { nome: "Charlotte", categoria: "Drama", imagem: "./../../../assets/images/animes/charlotte.jpg", link: "#", visto: true },
    { nome: "Deadman Wonderland", categoria: "Drama", imagem: "./../../../assets/images/animes/deadman-wonderland.jpg", link: "#", visto: true },
    { nome: "Grisaia no Kajitsu", categoria: "Drama", imagem: "./../../../assets/images/animes/grisaia-no-kajitsu.jpg", link: "#", visto: true },
    { nome: "Owari no Seraph", categoria: "Drama", imagem: "./../../../assets/images/animes/owari-no-seraph.jpg", link: "#", visto: true },
    { nome: "School Days", categoria: "Drama", imagem: "./../../../assets/images/animes/school-days.jpg", link: "#", visto: true },

    { nome: "Kami Nomi Zo Shiru Sekai", categoria: "Romance", imagem: "./../../../assets/images/animes/kami-nomi-zo-shiru-sekai.jpg", link: "#", visto: false },
    { nome: "Kanokon", categoria: "Romance", imagem: "./../../../assets/images/animes/kanokon.jpg", link: "#", visto: false },
    { nome: "Spice and Wolf", categoria: "Romance", imagem: "./../../../assets/images/animes/spice-and-wolf.jpg", link: "#", visto: false },

    { nome: "B the Beginning", categoria: "Suspense", imagem: "./../../../assets/images/animes/b-the-beginning.jpg", link: "#", visto: true },
    { nome: "Death Note", categoria: "Suspense", imagem: "./../../../assets/images/animes/death-note.jpg", link: "#", visto: true },
    { nome: "Steins Gate", categoria: "Suspense", imagem: "./../../../assets/images/animes/steins-gate.jpg", link: "#", visto: false },

    { nome: "Devilman Crybaby", categoria: "Terror", imagem: "./../../../assets/images/animes/devilman-crybaby.jpg", link: "#", visto: true },
    { nome: "Devil May Cry", categoria: "Terror", imagem: "./../../../assets/images/animes/devil-may-cry.jpg", link: "#", visto: true },
    { nome: "Hellsing", categoria: "Terror", imagem: "./../../../assets/images/animes/hellsing.jpg", link: "#", visto: true },
    { nome: "Ookami Kakushi", categoria: "Terror", imagem: "./../../../assets/images/animes/ookami-kakushi.jpg", link: "#", visto: false },

    { nome: "Gakusen Toshi Asterisk", categoria: "Ecchi", imagem: "./../../../assets/images/animes/gakusen-toshi-asterisk.jpg", link: "#", visto: true },
    { nome: "Killing Bites", categoria: "Ecchi", imagem: "./../../../assets/images/animes/killing-bites.jpg", link: "#", visto: true },
    { nome: "Mayo Chiki!", categoria: "Ecchi", imagem: "./../../../assets/images/animes/mayo-chiki.jpg", link: "#", visto: true },
    { nome: "Strike The Blood", categoria: "Ecchi", imagem: "./../../../assets/images/animes/strike-the-blood.jpg", link: "#", visto: true },
    { nome: "Maken-Ki!", categoria: "Ecchi", imagem: "./../../../assets/images/animes/maken-ki!.jpg", link: "#", visto: true },
    { nome: "Absolute Duo", categoria: "Ecchi", imagem: "./../../../assets/images/animes/absolute-duo.jpg", link: "#", visto: true },
    { nome: "Campione!", categoria: "Ecchi", imagem: "./../../../assets/images/animes/campione!.jpg", link: "#", visto: true },
    { nome: "Dakara Boku Wa H Ga Dekinai", categoria: "Ecchi", imagem: "./../../../assets/images/animes/dakara-boku-wa-h-ga-dekinai.jpg", link: "#", visto: true },
    { nome: "Hagure Yuusha no Aesthetica", categoria: "Ecchi", imagem: "./../../../assets/images/animes/hagure-yuusha-no-Aesthetica.jpg", link: "#", visto: true },
    { nome: "Hajimete no Gal", categoria: "Ecchi", imagem: "./../../../assets/images/animes/hajimete-no-gal.jpg", link: "#", visto: true },
    { nome: "Highschool DxD", categoria: "Ecchi", imagem: "./../../../assets/images/animes/highschool-dxD.jpg", link: "#", visto: true },
    { nome: "Highschool of The Dead", categoria: "Ecchi", imagem: "./../../../assets/images/animes/highschool-of-the-dead.jpg", link: "#", visto: true },
    { nome: "Isekai Maou To Shoukan Shoujo No Dorei Majutsu", categoria: "Ecchi", imagem: "./../../../assets/images/animes/isekai-maou-to-shoukan-shoujo-no-dorei-majutsu.jpg", link: "#", visto: true },
    { nome: "Keijo!!!!!!!!", categoria: "Ecchi", imagem: "./../../../assets/images/animes/keijo!!!!!!!!.jpg", link: "#", visto: true },
    { nome: "Kiss x Sis", categoria: "Ecchi", imagem: "./../../../assets/images/animes/kiss-x-sis.jpg", link: "#", visto: true },
    { nome: "Ladies Versus Butlers", categoria: "Ecchi", imagem: "./../../../assets/images/animes/ladies-versus-butlers.jpg", link: "#", visto: true },
    { nome: "No Game No Life", categoria: "Ecchi", imagem: "./../../../assets/images/animes/no-game-no-life.jpg", link: "#", visto: true },
    { nome: "Rakudai Kishi no Cavalry", categoria: "Ecchi", imagem: "./../../../assets/images/animes/rakudai-kishi-no-cavalry.jpg", link: "#", visto: true },
    { nome: "Rosario + Vampire", categoria: "Ecchi", imagem: "./../../../assets/images/animes/rosario-+-vampire.jpg", link: "#", visto: true },
    { nome: "Seikoku no dragonar", categoria: "Ecchi", imagem: "./../../../assets/images/animes/seikoku-no-dragonar.jpg", link: "#", visto: true },
    { nome: "Seikon no Qwaser", categoria: "Ecchi", imagem: "./../../../assets/images/animes/seikon-no-qwaser.jpg", link: "#", visto: true },
    { nome: "Shinmai Maou no Testament", categoria: "Ecchi", imagem: "./../../../assets/images/animes/shinmai-maou-no-testament.jpg", link: "#", visto: true },
    { nome: "Shuffle!", categoria: "Ecchi", imagem: "./../../../assets/images/animes/shuffle!.jpg", link: "#", visto: true },
    { nome: "Trinity Seven", categoria: "Ecchi", imagem: "./../../../assets/images/animes/trinity-seven.jpg", link: "#", visto: true },
    { nome: "Tu Love Ru", categoria: "Ecchi", imagem: "./../../../assets/images/animes/to-love-ru.jpg", link: "#", visto: true },
    { nome: "Yosuga no sora", categoria: "Ecchi", imagem: "./../../../assets/images/animes/yosuga-no-sora.jpg", link: "#", visto: true },
    { nome: "Sekirei", categoria: "Ecchi", imagem: "./../../../assets/images/animes/sekirei.jpg", link: "#", visto: false },
    { nome: "Tejina Senpai", categoria: "Ecchi", imagem: "./../../../assets/images/animes/tejina-senpai.jpg", link: "#", visto: false },
    { nome: "Kawaikereba Hentai Demo Suki Ni Natte Kuremasu Ka", categoria: "Ecchi", imagem: "./../../../assets/images/animes/kawaikereba-hentai-demo-suki-ni-natte-kuremasu-ka.jpg", link: "#", visto: false },
    { nome: "Asobi ni Iku yo!", categoria: "Ecchi", imagem: "./../../../assets/images/animes/asobi-ni-iku-yo!.jpg", link: "#", visto: false },
    { nome: "Hidan no Aria", categoria: "Ecchi", imagem: "./../../../assets/images/animes/hidan-no-aria.jpg", link: "#", visto: false },
    { nome: "Itsuka Tenma No Kuro Usagi", categoria: "Ecchi", imagem: "./../../../assets/images/animes/itsuka-tenma-no-kuro-usagi.jpg", link: "#", visto: false },
    { nome: "Valkyrie Drive", categoria: "Ecchi", imagem: "./../../../assets/images/animes/valkyrie-drive.jpg", link: "#", visto: false },
    { nome: "Madan No Ou To Vanadis", categoria: "Ecchi", imagem: "./../../../assets/images/animes/madan-no-ou-to-vanadis.jpg", link: "#", visto: false },
    { nome: "Omamori Himari", categoria: "Ecchi", imagem: "./../../../assets/images/animes/omamori-himari.jpg", link: "#", visto: false },
    { nome: "Yuusha ni Narenakatta Ore wa Shibushibu Shuushoku wo Ketsui Shimashita", categoria: "Ecchi", imagem: "./../../../assets/images/animes/yuusha-ni-narenakatta-ore-wa-shibushibu-shuushoku-wo-ketsui-shimashita.jpg", link: "#", visto: false },

];

animes.sort(function(a, b) {
    var nomeA = a.nome.toUpperCase(); 
    var nomeB = b.nome.toUpperCase(); 
    if (nomeA < nomeB) {
        return -1; 
    }
    if (nomeA > nomeB) {
        return 1; 
    }
    return 0; 
});



function adicionarAnimes(categoria, listaId) {
    const listaAnimes = document.getElementById(listaId);

    if (window.location.pathname.includes('assistido.html')) {
        const animesCategoria = animes.filter(anime => anime.categoria === categoria && anime.visto);

        animesCategoria.forEach(anime => {
            const divAnime = document.createElement('div');
            divAnime.classList.add('item');
    
            const linkAnime = document.createElement('a');
            linkAnime.href = anime.link;
    
            const imgAnime = document.createElement('img');
            imgAnime.src = anime.imagem;
            imgAnime.alt = anime.nome;
    
            const h4Anime = document.createElement('h4');
            h4Anime.textContent = anime.nome;
    
            linkAnime.appendChild(imgAnime);
            linkAnime.appendChild(h4Anime);
            divAnime.appendChild(linkAnime);
            listaAnimes.appendChild(divAnime);
        });
    }else if (window.location.pathname.includes('assistir.html')) {
        const animesCategoria = animes.filter(anime => anime.categoria === categoria && !anime.visto);

        animesCategoria.forEach(anime => {
            const divAnime = document.createElement('div');
            divAnime.classList.add('item');
    
            const linkAnime = document.createElement('a');
            linkAnime.href = anime.link;
    
            const imgAnime = document.createElement('img');
            imgAnime.src = anime.imagem;
            imgAnime.alt = anime.nome;
    
            const h4Anime = document.createElement('h4');
            h4Anime.textContent = anime.nome;
    
            linkAnime.appendChild(imgAnime);
            linkAnime.appendChild(h4Anime);
            divAnime.appendChild(linkAnime);
            listaAnimes.appendChild(divAnime);
        });
    }else if (window.location.pathname.includes('todos.html')) {
        const animesCategoria = animes.filter(anime => anime.categoria === categoria);

        animesCategoria.forEach(anime => {
            const divAnime = document.createElement('div');
            divAnime.classList.add('item');
    
            const linkAnime = document.createElement('a');
            linkAnime.href = anime.link;
    
            const imgAnime = document.createElement('img');
            imgAnime.src = anime.imagem;
            imgAnime.alt = anime.nome;
    
            const h4Anime = document.createElement('h4');
            h4Anime.textContent = anime.nome;
    
            linkAnime.appendChild(imgAnime);
            linkAnime.appendChild(h4Anime);
            divAnime.appendChild(linkAnime);
            listaAnimes.appendChild(divAnime);
        });
    }
}

const buttons = document.querySelectorAll(".filtro");
const containerResultado = document.querySelector(".resultado-container")
let aleatorio;
let novaLista;

if(window.location.pathname.includes('assistido.html')) {
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            if(button.classList.contains("action")){
                novaLista = animes.filter(anime => anime.categoria === "Acao" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = animes.filter(anime => anime.categoria === "Aventura" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = animes.filter(anime => anime.categoria === "Fantasia" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = animes.filter(anime => anime.categoria === "Comedia" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = animes.filter(anime => anime.categoria === "Romance" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = animes.filter(anime => anime.categoria === "Drama" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = animes.filter(anime => anime.categoria === "Suspense" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = animes.filter(anime => anime.categoria === "Terror" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = animes.filter(anime => anime.categoria === "Ecchi" && anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = animes.filter(anime => anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const animeDiv = document.createElement('div');
                animeDiv.classList.add('item');
        
                const animeLink = document.createElement('a');
                animeLink.href = novaLista[aleatorio].link;
        
                const animeImg = document.createElement('img');
                animeImg.src = novaLista[aleatorio].imagem;
                animeImg.alt = novaLista[aleatorio].nome;
        
                const h4Anime = document.createElement('h4');
                h4Anime.textContent = novaLista[aleatorio].nome;
                
                animeLink.appendChild(animeImg);
                animeLink.appendChild(h4Anime);
                animeDiv.appendChild(animeLink);
                containerResultado.appendChild(animeDiv);

            }else{
                containerResultado.innerHTML = "Não há itens nesta categoria!";
            }

        })
    })
}

if(window.location.pathname.includes('assistir.html')) {
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            if(button.classList.contains("action")){
                novaLista = animes.filter(anime => anime.categoria === "Acao" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = animes.filter(anime => anime.categoria === "Aventura" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = animes.filter(anime => anime.categoria === "Fantasia" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = animes.filter(anime => anime.categoria === "Comedia" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = animes.filter(anime => anime.categoria === "Romance" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = animes.filter(anime => anime.categoria === "Drama" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = animes.filter(anime => anime.categoria === "Suspense" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = animes.filter(anime => anime.categoria === "Terror" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = animes.filter(anime => anime.categoria === "Ecchi" && !anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = animes.filter(anime => anime.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const animeDiv = document.createElement('div');
                animeDiv.classList.add('item');
        
                const animeLink = document.createElement('a');
                animeLink.href = novaLista[aleatorio].link;
        
                const animeImg = document.createElement('img');
                animeImg.src = novaLista[aleatorio].imagem;
                animeImg.alt = novaLista[aleatorio].nome;
        
                const h4Anime = document.createElement('h4');
                h4Anime.textContent = novaLista[aleatorio].nome;
                
                animeLink.appendChild(animeImg);
                animeLink.appendChild(h4Anime);
                animeDiv.appendChild(animeLink);
                containerResultado.appendChild(animeDiv);

            }else{
                containerResultado.innerHTML = "Não há itens nesta categoria!";
            }

        })
    })
}

if(window.location.pathname.includes('todos.html')) {
    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            if(button.classList.contains("action")){
                novaLista = animes.filter(anime => anime.categoria === "Acao");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = animes.filter(anime => anime.categoria === "Aventura");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = animes.filter(anime => anime.categoria === "Fantasia");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = animes.filter(anime => anime.categoria === "Comedia");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = animes.filter(anime => anime.categoria === "Romance");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = animes.filter(anime => anime.categoria === "Drama");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = animes.filter(anime => anime.categoria === "Suspense");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = animes.filter(anime => anime.categoria === "Terror");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = animes.filter(anime => anime.categoria === "Ecchi");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = animes
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const animeDiv = document.createElement('div');
                animeDiv.classList.add('item');
        
                const animeLink = document.createElement('a');
                animeLink.href = novaLista[aleatorio].link;
        
                const animeImg = document.createElement('img');
                animeImg.src = novaLista[aleatorio].imagem;
                animeImg.alt = novaLista[aleatorio].nome;
        
                const h4Anime = document.createElement('h4');
                h4Anime.textContent = novaLista[aleatorio].nome;
                
                animeLink.appendChild(animeImg);
                animeLink.appendChild(h4Anime);
                animeDiv.appendChild(animeLink);
                containerResultado.appendChild(animeDiv);

            }else{
                containerResultado.innerHTML = "Não há itens nesta categoria!";
            }

        })
    })
}




    adicionarAnimes('Aventura', 'aventura');
    adicionarAnimes('Fantasia', 'fantasia');
    adicionarAnimes('Acao', 'acao');
    adicionarAnimes('Comedia', 'comedia');
    adicionarAnimes('Drama', 'drama');
    adicionarAnimes('Romance', 'romance');
    adicionarAnimes('Suspense', 'suspense');
    adicionarAnimes('Terror', 'terror');
    adicionarAnimes('Ecchi', 'ecchi');  
    

    const categories = document.querySelectorAll(".categoria");
    
    categories.forEach((categorie, i) => {
        const categoriesItens = document.querySelectorAll(".itens");
        if (categoriesItens.innerHTML.trim() === '') {
            categorie.style.order = 10;
        }
    })