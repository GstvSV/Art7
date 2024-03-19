const botoes = document.querySelectorAll(".filtro");
const resultado = document.querySelector(".resultado");
const resultadoTitle = document.querySelector(".resultado-title");
const resultadoImage = document.querySelector(".resultado-image");
let lista;
let escolhido;

botoes.forEach((botao,i) => {
    botao.addEventListener("click", () => {
        resultado.style.opacity = 1;

        if(botao.classList.contains("all")){
            lista = [" "];
            lista = ["akame-ga-kill", "akatsuki-no-yona", "bleach", "boku-no-hero-academia", "comet-lucifer", "dance-in-the-vampire-bund", "dragonaut-the-ressonance", "drifters", "goblin-slayer", "gun-gale-online", "hai-to-gensou-no-grimgar", "hunterx-hunter", "ji-mo-ren", "mahou-sensei-negima", "megalobox", "musaigen-no-phantom-world", "naruto", "noragami", "one-punch-man", "quanzhi-fashi", "quan-zhi-gao-shou", "shijou-seikyou-no-deshi-kenichi", "swordgai-the-animation", "witch-craft-works", "bento", "busou-shoujo-machiavellism", "blood-lad", "inou-battle-wa-nichijou-kei-no-naka-de", "kakegurui", "little-witch-academia", "nisekoi", "saiki-kusuo-no-psi-nan", "tsurezure-children", "another", "ansatsu-kyoshitsu", "charlotte", "deadman-wonderland", "grisaia-no-kajitsu", "owari-no-seraph", "school-days", "gin-no-guardian", "ichiban-ushiro-no-daimaou", "isekai-wa-smartphone-to-tomo-ni", "jitsu-wa-watashi-wa", "kono-subarashii-sekai-ni-shukufuko-wo!", "kyoukai-no-kanata", "mahou-sensou", "mahouka-koukou-no-rettousei", "maji-de-watashi-ni-koi-shinasai!", "maoyuu-maou-yuusha", "mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo", "nanatsu-no-taizai", "nurarihion-no-mago", "rokka-no-yuusha", "rokudenashi-majutsu-koushi-to-akashic-records", "seiken-tsukai-no-blade-dance", "seiken-tsukai-no-world-break", "seisen-cerberus", "shingeki-no-bahamut", "tensei-shitara-slime-datta-ken", "zero-kara-hajimeru-mahou-no-sho", "absolute-duo", "campione!", "dakara-boku-wa-h-ga-dekinai", "hagure-yuusha-no-aesthetica", "hajimete-no-gal", "highschool-dxD", "highschool-of-the-dead", "isekai-maou-to-shoukan-shoujo-no-dorei-majutsu", "keijo!!!!!!!!", "kiss-x-sis", "ladies-versus-butlers", "madan-no-ou-to-vanadis", "no-game-no-life", "omamori-himari", "rakudai-kishi-no-cavalry", "rosario-+-vampire", "seikoku-no-dragonar", "seikon-no-qwaser", "shinmai-maou-no-testament", "shuffle!", "trinity-seven", "to-love-ru", "yosuga-no-sora", "yuusha-ni-narenakatta-ore-wa-shibushibu-shuushoku-wo-ketsui-shimashita"];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        
        }else if(botao.classList.contains("action")){
            lista = [" "];
            lista = ["akame-ga-kill", "akatsuki-no-yona", "bleach", "boku-no-hero-academia", "comet-lucifer", "dance-in-the-vampire-bund", "dragonaut-the-ressonance", "drifters", "goblin-slayer", "gun-gale-online", "hai-to-gensou-no-grimgar", "hunterx-hunter", "ji-mo-ren", "mahou-sensei-negima", "megalobox", "musaigen-no-phantom-world", "naruto", "noragami", "one-punch-man", "quanzhi-fashi", "quan-zhi-gao-shou", "shijou-seikyou-no-deshi-kenichi", "swordgai-the-animation", "witch-craft-works"];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        }else if(botao.classList.contains("fantasy")){
            lista = [" "];
            lista = ["gin-no-guardian", "ichiban-ushiro-no-daimaou", "isekai-wa-smartphone-to-tomo-ni", "jitsu-wa-watashi-wa", "kono-subarashii-sekai-ni-shukufuko-wo!", "kyoukai-no-kanata", "mahou-sensou", "mahouka-koukou-no-rettousei", "maji-de-watashi-ni-koi-shinasai!", "maoyuu-maou-yuusha", "mondaiji-tachi-ga-isekai-kara-kuru-sou-desu-yo", "nanatsu-no-taizai", "nurarihion-no-mago", "rokka-no-yuusha", "rokudenashi-majutsu-koushi-to-akashic-records", "seiken-tsukai-no-blade-dance", "seiken-tsukai-no-world-break", "seisen-cerberus", "shingeki-no-bahamut", "tensei-shitara-slime-datta-ken", "zero-kara-hajimeru-mahou-no-sho"];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("comedy")){
            lista = [" "];
            lista = ["bento", "busou-shoujo-machiavellism", "blood-lad", "inou-battle-wa-nichijou-kei-no-naka-de", "kakegurui", "little-witch-academia", "nisekoi", "saiki-kusuo-no-psi-nan", "tsurezure-children"];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("drama")){
            lista = [" "];
            lista = ["another", "ansatsu-kyoshitsu", "charlotte", "deadman-wonderland", "grisaia-no-kajitsu", "owari-no-seraph", "school-days"]; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
    

        }else if(botao.classList.contains("ecchi")){
            lista = [" "];
            lista = ["absolute-duo", "campione!", "dakara-boku-wa-h-ga-dekinai", "hagure-yuusha-no-aesthetica", "hajimete-no-gal", "highschool-dxD", "highschool-of-the-dead", "isekai-maou-to-shoukan-shoujo-no-dorei-majutsu", "keijo!!!!!!!!", "kiss-x-sis", "ladies-versus-butlers", "madan-no-ou-to-vanadis", "no-game-no-life", "omamori-himari", "rakudai-kishi-no-cavalry", "rosario-+-vampire", "seikoku-no-dragonar", "seikon-no-qwaser", "shinmai-maou-no-testament", "shuffle!", "trinity-seven", "to-love-ru", "yosuga-no-sora", "yuusha-ni-narenakatta-ore-wa-shibushibu-shuushoku-wo-ketsui-shimashita"]; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }

    });
})

function formatarNome(lista, resultado){
        let escolhido = Math.floor(Math.random() * lista.length);
        let partes = lista[escolhido].split("-"); 
        partes = partes.map(part => part.charAt(0).toUpperCase() + part.slice(1));
        let nomeFormatado = partes.join(" ");
        resultado.style.cursor = "pointer";
        resultadoTitle.innerHTML = nomeFormatado;
        return escolhido;
}