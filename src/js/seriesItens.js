const series = [
    { nome: "The Last Of Us", categoria: "Acao", imagem: "./../../../assets/images/series/the-last-of-us.jpg", link: "#", visto: false },
    { nome: "The Witcher", categoria: "Fantasia", imagem: "./../../../assets/images/series/the-witcher.jpg", link: "#", visto: false },
    { nome: "Avatar", categoria: "Fantasia", imagem: "./../../../assets/images/series/avatar.jpg", link: "#", visto: false },
    { nome: "Cursed", categoria: "Fantasia", imagem: "./../../../assets/images/series/cursed.jpg", link: "#", visto: false },
    { nome: "Sweet Tooth", categoria: "Fantasia", imagem: "./../../../assets/images/series/sweet-tooth.jpg", link: "#", visto: false },
    { nome: "Alquimia Das Almas", categoria: "Fantasia", imagem: "./../../../assets/images/series/alquimia-das-almas.jpg", link: "#", visto: true },
    { nome: "American Gods", categoria: "Fantasia", imagem: "./../../../assets/images/series/american-gods.jpg", link: "#", visto: false },
    { nome: "American Horror Story", categoria: "Terror", imagem: "./../../../assets/images/series/american-horror-story.jpg", link: "#", visto: false },
    { nome: "Arrow", categoria: "Acao", imagem: "./../../../assets/images/series/arrow.jpg", link: "#", visto: false },
    { nome: "Beleza Verdadeira", categoria: "Drama", imagem: "./../../../assets/images/series/beleza-verdadeira.jpg", link: "#", visto: true },
    { nome: "Black Lighting", categoria: "Acao", imagem: "./../../../assets/images/series/black-lighting.jpg", link: "#", visto: false },
    { nome: "Black Mirror", categoria: "Drama", imagem: "./../../../assets/images/series/black-mirror.jpg", link: "#", visto: true },
    { nome: "Black Spot", categoria: "Drama", imagem: "./../../../assets/images/series/black-spot.jpg", link: "#", visto: false },
    { nome: "Breaking Bad", categoria: "Drama", imagem: "./../../../assets/images/series/breaking-bad.jpg", link: "#", visto: false },
    { nome: "Daredevil", categoria: "Acao", imagem: "./../../../assets/images/series/daredevil.jpg", link: "#", visto: true },
    { nome: "Flash", categoria: "Acao", imagem: "./../../../assets/images/series/flash.jpg", link: "#", visto: false },
    { nome: "Friends", categoria: "Comedia", imagem: "./../../../assets/images/series/friends.jpg", link: "#", visto: false },
    { nome: "Game Of Thrones", categoria: "Fantasia", imagem: "./../../../assets/images/series/game-of-thrones.jpg", link: "#", visto: true },
    { nome: "Gotham", categoria: "Acao", imagem: "./../../../assets/images/series/gotham.jpg", link: "#", visto: true },
    { nome: "Grimm", categoria: "Fantasia", imagem: "./../../../assets/images/series/grimm.jpg", link: "#", visto: true },
    { nome: "His Dark Materials", categoria: "Fantasia", imagem: "./../../../assets/images/series/his-dark-materials.jpg", link: "#", visto: true },
    { nome: "House", categoria: "Drama", imagem: "./../../../assets/images/series/house.jpg", link: "#", visto: false },
    { nome: "Legends Of Tomorrow", categoria: "Acao", imagem: "./../../../assets/images/series/legends-of-tomorrow.jpg", link: "#", visto: false },
    { nome: "Lucifer", categoria: "Drama", imagem: "./../../../assets/images/series/lucifer.jpg", link: "#", visto: true },
    { nome: "Luke Cage", categoria: "Acao", imagem: "./../../../assets/images/series/luke-cage.jpg", link: "#", visto: true },
    { nome: "Merlin", categoria: "Fantasia", imagem: "./../../../assets/images/series/merlin.jpg", link: "#", visto: false },
    { nome: "Once Upon A Time", categoria: "Fantasia", imagem: "./../../../assets/images/series/once-upon-a-time.jpg", link: "#", visto: false },
    { nome: "Penny Dreadful", categoria: "Terror", imagem: "./../../../assets/images/series/penny-dreadful.jpg", link: "#", visto: true },
    { nome: "Ponto Cego", categoria: "Drama", imagem: "./../../../assets/images/series/ponto-cego.jpg", link: "#", visto: false },
    { nome: "Prision Break", categoria: "Acao", imagem: "./../../../assets/images/series/prision-break.jpg", link: "#", visto: false },
    { nome: "Scorpion", categoria: "Drama", imagem: "./../../../assets/images/series/scorpion.jpg", link: "#", visto: false },
    { nome: "Sherlock", categoria: "Drama", imagem: "./../../../assets/images/series/sherlock.jpg", link: "#", visto: true },
    { nome: "Sleepy Hollow", categoria: "Fantasia", imagem: "./../../../assets/images/series/sleepy-hollow.jpg", link: "#", visto: false },
    { nome: "Supergirl", categoria: "Acao", imagem: "./../../../assets/images/series/supergirl.jpg", link: "#", visto: false },
    { nome: "Supernatural", categoria: "Fantasia", imagem: "./../../../assets/images/series/supernatural.jpg", link: "#", visto: false },
    { nome: "Teen Wolf", categoria: "Fantasia", imagem: "./../../../assets/images/series/teen-wolf.jpg", link: "#", visto: true },
    { nome: "That 70s Show", categoria: "Comedia", imagem: "./../../../assets/images/series/that-70s-show.jpg", link: "#", visto: false },
    { nome: "The 100", categoria: "Fantasia", imagem: "./../../../assets/images/series/the-100.jpg", link: "#", visto: false },
    { nome: "The Alienist", categoria: "Drama", imagem: "./../../../assets/images/series/the-alienist.jpg", link: "#", visto: false },
    { nome: "The Librarians", categoria: "Fantasia", imagem: "./../../../assets/images/series/the-librarians.jpg", link: "#", visto: true },
    { nome: "The Shannara Chronicles", categoria: "Fantasia", imagem: "./../../../assets/images/series/the-shannara-chronicles.jpg", link: "#", visto: true },
    { nome: "This Is Us", categoria: "Drama", imagem: "./../../../assets/images/series/this-is-us.jpg", link: "#", visto: true },
    { nome: "Uma Advogada Extraordinaria", categoria: "Drama", imagem: "./../../../assets/images/series/uma-advogada-extraordinaria.jpg", link: "#", visto: true },
    { nome: "Vikings", categoria: "Acao", imagem: "./../../../assets/images/series/vikings.jpg", link: "#", visto: false },
    { nome: "Silo", categoria: "Drama", imagem: "./../../../assets/images/series/silo.jpg", link: "#", visto: false },
    { nome: "Ragnarok", categoria: "Fantasia", imagem: "./../../../assets/images/series/ragnarok.jpg", link: "#", visto: true },
    { nome: "Katla", categoria: "Fantasia", imagem: "./../../../assets/images/series/katla.jpg", link: "#", visto: false },
    { nome: "Ruptura", categoria: "Drama", imagem: "./../../../assets/images/series/ruptura.jpg", link: "#", visto: true },
    { nome: "Todo Mundo Odeia O Chris", categoria: "Comedia", imagem: "./../../../assets/images/series/todo-mundo-odeia-o-chris.jpg", link: "#", visto: false },
    { nome: "Um Maluco No Pedaco", categoria: "Comedia", imagem: "./../../../assets/images/series/um-maluco-no-pedaco.jpg", link: "#", visto: false },
    { nome: "Eu A Patroa E As Criancas", categoria: "Comedia", imagem: "./../../../assets/images/series/eu-a-patroa-e-as-criancas.jpg", link: "#", visto: false },
    { nome: "Fate: A Saga Winx", categoria: "Fantasia", imagem: "./../../../assets/images/series/fate-a-saga-winx.jpg", link: "#", visto: true },
    { nome: "The Wheel Of Time", categoria: "Fantasia", imagem: "./../../../assets/images/series/the-wheel-of-time.jpg", link: "#", visto: true },
    { nome: "3%", categoria: "Drama", imagem: "./../../../assets/images/series/3-porcento.jpg", link: "#", visto: true },
    { nome: "Alice in Borderland", categoria: "Acao", imagem: "./../../../assets/images/series/alice-in-borderland.jpg", link: "#", visto: true },
    { nome: "A Maldição da Mansão Bly", categoria: "Terror", imagem: "./../../../assets/images/series/a-maldicao-da-mancao-bly.jpg", link: "#", visto: true },
    { nome: "A Maldição da Residência Hill", categoria: "Terror", imagem: "./../../../assets/images/series/a-maldicao-da-residencia-hill.jpg", link: "#", visto: true },
    { nome: "A Queda da Casa Usher", categoria: "Terror", imagem: "./../../../assets/images/series/a-queda-da-casa-usher.jpg", link: "#", visto: false },
    { nome: "Arquivo 81", categoria: "Suspense", imagem: "./../../../assets/images/series/arquivo-81.jpg", link: "#", visto: false },
    { nome: "Brooklyn Nine-Nine", categoria: "Comedia", imagem: "./../../../assets/images/series/brooklyn-nine-nine.jpg", link: "#", visto: true },
    { nome: "Bulgasal", categoria: "Drama", imagem: "./../../../assets/images/series/bulgasal.jpg", link: "#", visto: false },
    { nome: "Carnival Row", categoria: "Fantasia", imagem: "./../../../assets/images/series/carnival-row.jpg", link: "#", visto: false },
    { nome: "Cobra Kai", categoria: "Acao", imagem: "./../../../assets/images/series/cobra-kai.jpg", link: "#", visto: false },
    { nome: "Curon", categoria: "Suspense", imagem: "./../../../assets/images/series/curon.jpg", link: "#", visto: false },
    { nome: "Dahmer", categoria: "Drama", imagem: "./../../../assets/images/series/dahmer.jpg", link: "#", visto: true },
    { nome: "Dark", categoria: "Drama", imagem: "./../../../assets/images/series/dark.jpg", link: "#", visto: false },
    { nome: "Desventuras em Série", categoria: "Fantasia", imagem: "./../../../assets/images/series/desventuras-em-serie.jpg", link: "#", visto: false },
    { nome: "Devil in Ohio", categoria: "Drama", imagem: "./../../../assets/images/series/devil-in-ohio.jpg", link: "#", visto: true },
    { nome: "Diablero", categoria: "Fantasia", imagem: "./../../../assets/images/series/diablero.jpg", link: "#", visto: false },
    { nome: "Dirk Gently", categoria: "Comedia", imagem: "./../../../assets/images/series/dirk-gently.jpg", link: "#", visto: false },
    { nome: "Dracula", categoria: "Terror", imagem: "./../../../assets/images/series/dracula.jpg", link: "#", visto: true },
    { nome: "Frontier", categoria: "Acao", imagem: "./../../../assets/images/series/frontier.jpg", link: "#", visto: false },
    { nome: "Ghost Wars", categoria: "Suspense", imagem: "./../../../assets/images/series/ghost-wars.jpg", link: "#", visto: false },
    { nome: "Half Bad", categoria: "Fantasia", imagem: "./../../../assets/images/series/half-bad.jpg", link: "#", visto: true },
    { nome: "Hemlock Grove", categoria: "Terror", imagem: "./../../../assets/images/series/hemlock-grove.jpg", link: "#", visto: false },
    { nome: "How to Get Away with Murder", categoria: "Drama", imagem: "./../../../assets/images/series/how-to-get-away-with-murder.jpg", link: "#", visto: false },
    { nome: "Imperfeitos", categoria: "Drama", imagem: "./../../../assets/images/series/imperfeitos.jpg", link: "#", visto: true },
    { nome: "Lock and Key", categoria: "Fantasia", imagem: "./../../../assets/images/series/lock-and-key.jpg", link: "#", visto: false },
    { nome: "Love, Death & Robots", categoria: "Ficcao", imagem: "./../../../assets/images/series/love-death-robots.jpg", link: "#", visto: false },
    { nome: "Luna Nera", categoria: "Fantasia", imagem: "./../../../assets/images/series/luna-nera.jpg", link: "#", visto: false },
    { nome: "Lupin", categoria: "Drama", imagem: "./../../../assets/images/series/lupin.jpg", link: "#", visto: true },
    { nome: "Mindhunter", categoria: "Drama", imagem: "./../../../assets/images/series/mindhunter.jpg", link: "#", visto: false },
    { nome: "Missa da Meia-Noite", categoria: "Fantasia", imagem: "./../../../assets/images/series/missa-da-meia-noite.jpg", link: "#", visto: true },
    { nome: "Monstros da Cracóvia", categoria: "Fantasia", imagem: "./../../../assets/images/series/monstros-da-cracovia.jpg", link: "#", visto: false },
    { nome: "Norsemen", categoria: "Comedia", imagem: "./../../../assets/images/series/norsemen.jpg", link: "#", visto: false },
    { nome: "O Clube da Meia-Noite", categoria: "Drama", imagem: "./../../../assets/images/series/o-clube-da-meia-noite.jpg", link: "#", visto: true },
    { nome: "O Expresso do Amanhã", categoria: "Ficcao", imagem: "./../../../assets/images/series/o-expresso-do-amanha.jpg", link: "#", visto: false },
    { nome: "O Gabinete de Curiosidades de Guilhermo Del Toro", categoria: "Fantasia", imagem: "./../../../assets/images/series/o-gabinete-de-curiosidades-de-guilhermo-del-toro.jpg", link: "#", visto: true },
    { nome: "O Nevoeiro", categoria: "Terror", imagem: "./../../../assets/images/series/o-nevoeiro.jpg", link: "#", visto: false },
    { nome: "Ozark", categoria: "Drama", imagem: "./../../../assets/images/series/ozark.jpg", link: "#", visto: false },
    { nome: "Peaky Blinders", categoria: "Drama", imagem: "./../../../assets/images/series/peaky-blinders.jpg", link: "#", visto: false },
    { nome: "Por Trás dos Seus Olhos", categoria: "Suspense", imagem: "./../../../assets/images/series/por-tras-dos-seus-olhos.jpg", link: "#", visto: true },
    { nome: "Ratched", categoria: "Drama", imagem: "./../../../assets/images/series/ratched.jpg", link: "#", visto: true },
    { nome: "Sabrina", categoria: "Fantasia", imagem: "./../../../assets/images/series/sabrina.jpg", link: "#", visto: true },
    { nome: "Sandman", categoria: "Fantasia", imagem: "./../../../assets/images/series/sandman.jpg", link: "#", visto: true },
    { nome: "Sense8", categoria: "Ficcao", imagem: "./../../../assets/images/series/sense-8.jpg", link: "#", visto: false },
    { nome: "Sex Education", categoria: "Comedia", imagem: "./../../../assets/images/series/sex-education.jpg", link: "#", visto: false },
    { nome: "Shadowhunters", categoria: "Fantasia", imagem: "./../../../assets/images/series/shadow-hunters.jpg", link: "#", visto: false },
    { nome: "Sombra e Ossos", categoria: "Fantasia", imagem: "./../../../assets/images/series/sombra-e-ossos.jpg", link: "#", visto: false },
    { nome: "Superstition", categoria: "Suspense", imagem: "./../../../assets/images/series/superstition.jpg", link: "#", visto: false },
    { nome: "The Big Bang Theory", categoria: "Comedia", imagem: "./../../../assets/images/series/the-big-bang-theory.jpg", link: "#", visto: false },
    { nome: "The Boys", categoria: "Acao", imagem: "./../../../assets/images/series/the-boys.jpg", link: "#", visto: false },
    { nome: "The Last Kingdom", categoria: "Acao", imagem: "./../../../assets/images/series/the-last-kingdom.jpg", link: "#", visto: false },
    { nome: "The Letter for the King", categoria: "Acao", imagem: "./../../../assets/images/series/the-letter-for-the-king.jpg", link: "#", visto: false },
    { nome: "The OA", categoria: "Drama", imagem: "./../../../assets/images/series/the-oa.jpg", link: "#", visto: false },
    { nome: "The Office", categoria: "Comedia", imagem: "./../../../assets/images/series/the-office.jpg", link: "#", visto: false },
    { nome: "The Umbrella Academy", categoria: "Acao", imagem: "./../../../assets/images/series/the-umbrella-academy.jpg", link: "#", visto: false },
    { nome: "Tidelands", categoria: "Drama", imagem: "./../../../assets/images/series/tidelands.jpg", link: "#", visto: false },
    { nome: "Titãs", categoria: "Acao", imagem: "./../../../assets/images/series/titas.jpg", link: "#", visto: true },
    { nome: "Vampires", categoria: "Terror", imagem: "./../../../assets/images/series/vampires.jpg", link: "#", visto: false },
    { nome: "Van Helsing", categoria: "Fantasia", imagem: "./../../../assets/images/series/van-helsing.jpg", link: "#", visto: false },
    { nome: "Wandinha", categoria: "Comedia", imagem: "./../../../assets/images/series/wandinha.jpg", link: "#", visto: true },
    { nome: "Warrior Nun", categoria: "Acao", imagem: "./../../../assets/images/series/warrior-nun.jpg", link: "#", visto: true },
    { nome: "Wu Assassins", categoria: "Acao", imagem: "./../../../assets/images/series/wu-assassins.jpg", link: "#", visto: true },
    { nome: "Young Sheldon", categoria: "Comedia", imagem: "./../../../assets/images/series/young-sheldon.jpg", link: "#", visto: false }

];




series.sort(function(a, b) {
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



function adicionarSeries(categoria, listaId) {
    const listaSeries = document.getElementById(listaId);

    let seriesCategoria;

    if (window.location.pathname.includes('assistido.html')) {
        seriesCategoria = series.filter(serie => serie.categoria === categoria && serie.visto);
    } else if (window.location.pathname.includes('assistir.html')) {
        seriesCategoria = series.filter(serie => serie.categoria === categoria && !serie.visto);
    } else if (window.location.pathname.includes('todos.html')) {
        seriesCategoria = series.filter(serie => serie.categoria === categoria);
    }

    if (seriesCategoria && seriesCategoria.length > 0) {
        seriesCategoria.forEach(serie => {
            const divSerie = document.createElement('div');
            divSerie.classList.add('item');

            const linkSerie = document.createElement('a');
            linkSerie.href = serie.link;

            const imgSerie = document.createElement('img');
            imgSerie.src = serie.imagem;
            imgSerie.alt = serie.nome;

            const h4Serie = document.createElement('h4');
            h4Serie.textContent = serie.nome;

            linkSerie.appendChild(imgSerie);
            linkSerie.appendChild(h4Serie);
            divSerie.appendChild(linkSerie);
            listaSeries.appendChild(divSerie);
        });
        
    } else {
        const categories = document.querySelectorAll(".categoria");
        
        categories.forEach((categorie, i) => {
            
            if (categorie.classList.contains(categoria.toLowerCase())) {
                categorie.style.order = 10;
            }
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
                novaLista = series.filter(serie => serie.categoria === "Acao" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = series.filter(serie => serie.categoria === "Aventura" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = series.filter(serie => serie.categoria === "Fantasia" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = series.filter(serie => serie.categoria === "Comedia" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = series.filter(serie => serie.categoria === "Romance" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = series.filter(serie => serie.categoria === "Drama" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = series.filter(serie => serie.categoria === "Suspense" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = series.filter(serie => serie.categoria === "Terror" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = series.filter(serie => serie.categoria === "Ecchi" && serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = series.filter(serie => serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const serieDiv = document.createElement('div');
                serieDiv.classList.add('item');
        
                const serieLink = document.createElement('a');
                serieLink.href = novaLista[aleatorio].link;
        
                const serieImg = document.createElement('img');
                serieImg.src = novaLista[aleatorio].imagem;
                serieImg.alt = novaLista[aleatorio].nome;
        
                const h4Serie = document.createElement('h4');
                h4Serie.textContent = novaLista[aleatorio].nome;
                
                serieLink.appendChild(serieImg);
                serieLink.appendChild(h4Serie);
                serieDiv.appendChild(serieLink);
                containerResultado.appendChild(serieDiv);

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
                novaLista = series.filter(serie => serie.categoria === "Acao" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = series.filter(serie => serie.categoria === "Aventura" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = series.filter(serie => serie.categoria === "Fantasia" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = series.filter(serie => serie.categoria === "Comedia" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = series.filter(serie => serie.categoria === "Romance" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = series.filter(serie => serie.categoria === "Drama" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = series.filter(serie => serie.categoria === "Suspense" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = series.filter(serie => serie.categoria === "Terror" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = series.filter(serie => serie.categoria === "Ecchi" && !serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = series.filter(serie => serie.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const serieDiv = document.createElement('div');
                serieDiv.classList.add('item');
        
                const serieLink = document.createElement('a');
                serieLink.href = novaLista[aleatorio].link;
        
                const serieImg = document.createElement('img');
                serieImg.src = novaLista[aleatorio].imagem;
                serieImg.alt = novaLista[aleatorio].nome;
        
                const h4Serie = document.createElement('h4');
                h4Serie.textContent = novaLista[aleatorio].nome;
                
                serieLink.appendChild(serieImg);
                serieLink.appendChild(h4Serie);
                serieDiv.appendChild(serieLink);
                containerResultado.appendChild(serieDiv);

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
                novaLista = series.filter(serie => serie.categoria === "Acao");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = series.filter(serie => serie.categoria === "Aventura");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = series.filter(serie => serie.categoria === "Fantasia");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = series.filter(serie => serie.categoria === "Comedia");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = series.filter(serie => serie.categoria === "Romance");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = series.filter(serie => serie.categoria === "Drama");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = series.filter(serie => serie.categoria === "Suspense");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = series.filter(serie => serie.categoria === "Terror");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = series.filter(serie => serie.categoria === "Ecchi");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = series
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const serieDiv = document.createElement('div');
                serieDiv.classList.add('item');
        
                const serieLink = document.createElement('a');
                serieLink.href = novaLista[aleatorio].link;
        
                const serieImg = document.createElement('img');
                serieImg.src = novaLista[aleatorio].imagem;
                serieImg.alt = novaLista[aleatorio].nome;
        
                const h4Serie = document.createElement('h4');
                h4Serie.textContent = novaLista[aleatorio].nome;
                
                serieLink.appendChild(serieImg);
                serieLink.appendChild(h4Serie);
                serieDiv.appendChild(serieLink);
                containerResultado.appendChild(serieDiv);

            }else{
                containerResultado.innerHTML = "Não há itens nesta categoria!";
            }

        })
    })
}


    adicionarSeries('Fantasia', 'fantasia');
    adicionarSeries('Acao', 'acao');
    adicionarSeries('Comedia', 'comedia');
    adicionarSeries('Drama', 'drama');
    adicionarSeries('Ficcao', 'ficcao');
    adicionarSeries('Suspense', 'suspense');
    adicionarSeries('Terror', 'terror'); 
