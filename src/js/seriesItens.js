const series = [
    { nome: "Wheel of Time", categoria: "Aventura", imagem: "./../../../assets/images/series/wheel-of-time.jpg", link: "#", visto: true},
    { nome: "Todo Mundo Odeia o Chris", categoria: "Comédia", imagem: "./../../../assets/images/series/todo-mundo-odeia-o-chris.jpg", link: "#", visto: false },
    { nome: "Friends", categoria: "Comédia", imagem: "./../../../assets/images/series/friends.jpg", link: "#", visto: true },
    
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

function adicionarSeries(categoria, listaId) {
    const listaSeries = document.getElementById(listaId);

    if (window.location.pathname.includes('assistido.html')) {
        const seriesCategoria = series.filter(serie => serie.categoria === categoria && serie.visto);

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
    }else if (window.location.pathname.includes('assistir.html')) {
        const seriesCategoria = series.filter(serie => serie.categoria === categoria && !serie.visto);

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
    }else if (window.location.pathname.includes('todos.html')) {
        const seriesCategoria = series.filter(serie => serie.categoria === categoria);

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
    }


    
}

    adicionarSeries('Aventura', 'aventura');
    adicionarSeries('Comédia', 'comedia');
