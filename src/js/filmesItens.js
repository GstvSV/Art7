const filmes = [];

filmes.sort(function(a, b) {
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



function adicionarFilmes(categoria, listaId) {
    const listaFilmes = document.getElementById(listaId);

    if (window.location.pathname.includes('assistido.html')) {
        const filmesCategoria = filmes.filter(filme => filme.categoria === categoria && filme.visto);

        filmesCategoria.forEach(filme => {
            const divFilme = document.createElement('div');
            divFilme.classList.add('item');
    
            const linkFilme = document.createElement('a');
            linkFilme.href = filme.link;
    
            const imgFilme = document.createElement('img');
            imgFilme.src = filme.imagem;
            imgFilme.alt = filme.nome;
    
            const h4Filme = document.createElement('h4');
            h4Filme.textContent = filme.nome;
    
            linkFilme.appendChild(imgFilme);
            linkFilme.appendChild(h4Filme);
            divFilme.appendChild(linkFilme);
            listaFilmes.appendChild(divFilme);
        });
    }else if (window.location.pathname.includes('assistir.html')) {
        const filmesCategoria = filmes.filter(filme => filme.categoria === categoria && !filme.visto);

        filmesCategoria.forEach(filme => {
            const divFilme = document.createElement('div');
            divFilme.classList.add('item');
    
            const linkFilme = document.createElement('a');
            linkFilme.href = filme.link;
    
            const imgFilme = document.createElement('img');
            imgFilme.src = filme.imagem;
            imgFilme.alt = filme.nome;
    
            const h4Filme = document.createElement('h4');
            h4Filme.textContent = filme.nome;
    
            linkFilme.appendChild(imgFilme);
            linkFilme.appendChild(h4Filme);
            divFilme.appendChild(linkFilme);
            listaFilmes.appendChild(divFilme);
        });
    }else if (window.location.pathname.includes('todos.html')) {
        const filmesCategoria = filmes.filter(filme => filme.categoria === categoria);

        filmesCategoria.forEach(filme => {
            const divFilme = document.createElement('div');
            divFilme.classList.add('item');
    
            const linkFilme = document.createElement('a');
            linkFilme.href = filme.link;
    
            const imgFilme = document.createElement('img');
            imgFilme.src = filme.imagem;
            imgFilme.alt = filme.nome;
    
            const h4Filme = document.createElement('h4');
            h4Filme.textContent = filme.nome;
    
            linkFilme.appendChild(imgFilme);
            linkFilme.appendChild(h4Filme);
            divFilme.appendChild(linkFilme);
            listaFilmes.appendChild(divFilme);
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
                novaLista = filmes.filter(filme => filme.categoria === "Acao" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = filmes.filter(filme => filme.categoria === "Aventura" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = filmes.filter(filme => filme.categoria === "Fantasia" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = filmes.filter(filme => filme.categoria === "Comedia" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = filmes.filter(filme => filme.categoria === "Romance" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = filmes.filter(filme => filme.categoria === "Drama" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = filmes.filter(filme => filme.categoria === "Suspense" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = filmes.filter(filme => filme.categoria === "Terror" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = filmes.filter(filme => filme.categoria === "Ecchi" && filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = filmes.filter(filme => filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const filmeDiv = document.createElement('div');
                filmeDiv.classList.add('item');
        
                const filmeLink = document.createElement('a');
                filmeLink.href = novaLista[aleatorio].link;
        
                const filmeImg = document.createElement('img');
                filmeImg.src = novaLista[aleatorio].imagem;
                filmeImg.alt = novaLista[aleatorio].nome;
        
                const h4Filme = document.createElement('h4');
                h4Filme.textContent = novaLista[aleatorio].nome;
                
                filmeLink.appendChild(filmeImg);
                filmeLink.appendChild(h4Filme);
                filmeDiv.appendChild(filmeLink);
                containerResultado.appendChild(filmeDiv);

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
                novaLista = filmes.filter(filme => filme.categoria === "Acao" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = filmes.filter(filme => filme.categoria === "Aventura" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = filmes.filter(filme => filme.categoria === "Fantasia" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = filmes.filter(filme => filme.categoria === "Comedia" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = filmes.filter(filme => filme.categoria === "Romance" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = filmes.filter(filme => filme.categoria === "Drama" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = filmes.filter(filme => filme.categoria === "Suspense" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = filmes.filter(filme => filme.categoria === "Terror" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = filmes.filter(filme => filme.categoria === "Ecchi" && !filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = filmes.filter(filme => filme.visto);
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const filmeDiv = document.createElement('div');
                filmeDiv.classList.add('item');
        
                const filmeLink = document.createElement('a');
                filmeLink.href = novaLista[aleatorio].link;
        
                const filmeImg = document.createElement('img');
                filmeImg.src = novaLista[aleatorio].imagem;
                filmeImg.alt = novaLista[aleatorio].nome;
        
                const h4Filme = document.createElement('h4');
                h4Filme.textContent = novaLista[aleatorio].nome;
                
                filmeLink.appendChild(filmeImg);
                filmeLink.appendChild(h4Filme);
                filmeDiv.appendChild(filmeLink);
                containerResultado.appendChild(filmeDiv);

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
                novaLista = filmes.filter(filme => filme.categoria === "Acao");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("adventure")){
                novaLista = filmes.filter(filme => filme.categoria === "Aventura");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("fantasy")){
                novaLista = filmes.filter(filme => filme.categoria === "Fantasia");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("comedy")){
                novaLista = filmes.filter(filme => filme.categoria === "Comedia");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("romance")){
                novaLista = filmes.filter(filme => filme.categoria === "Romance");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("drama")){
                novaLista = filmes.filter(filme => filme.categoria === "Drama");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("suspense")){
                novaLista = filmes.filter(filme => filme.categoria === "Suspense");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("terror")){
                novaLista = filmes.filter(filme => filme.categoria === "Terror");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("ecchi")){
                novaLista = filmes.filter(filme => filme.categoria === "Ecchi");
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }else if(button.classList.contains("all")){
                novaLista = filmes
                aleatorio = Math.floor(Math.random() * novaLista.length);
            }   

            if (containerResultado.firstChild) {
                containerResultado.removeChild(containerResultado.firstChild);
            }

            if(novaLista.length > 0){
                const filmeDiv = document.createElement('div');
                filmeDiv.classList.add('item');
        
                const filmeLink = document.createElement('a');
                filmeLink.href = novaLista[aleatorio].link;
        
                const filmeImg = document.createElement('img');
                filmeImg.src = novaLista[aleatorio].imagem;
                filmeImg.alt = novaLista[aleatorio].nome;
        
                const h4Filme = document.createElement('h4');
                h4Filme.textContent = novaLista[aleatorio].nome;
                
                filmeLink.appendChild(filmeImg);
                filmeLink.appendChild(h4Filme);
                filmeDiv.appendChild(filmeLink);
                containerResultado.appendChild(filmeDiv);

            }else{
                containerResultado.innerHTML = "Não há itens nesta categoria!";
            }

        })
    })
}




    adicionarFilmes('Aventura', 'aventura');
    adicionarFilmes('Fantasia', 'fantasia');
    adicionarFilmes('Acao', 'acao');
    adicionarFilmes('Comedia', 'comedia');
    adicionarFilmes('Drama', 'drama');
    adicionarFilmes('Romance', 'romance');
    adicionarFilmes('Suspense', 'suspense');
    adicionarFilmes('Terror', 'terror');
    adicionarFilmes('Ecchi', 'ecchi');  
    