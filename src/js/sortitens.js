// Captura todas as divs com a classe "itens"
const todasAsDivs = document.querySelectorAll('.itens');

// Para cada div de itens
todasAsDivs.forEach(div => {
    // Captura todos os itens de anime dentro da div atual
    const itensAnime = Array.from(div.querySelectorAll('.item'));

    // Ordena os itens com base nos títulos
    itensAnime.sort((a, b) => {
        const tituloA = a.querySelector('h4').textContent.toLowerCase();
        const tituloB = b.querySelector('h4').textContent.toLowerCase();
        return tituloA.localeCompare(tituloB);
    });

    // Remove os itens da div
    div.innerHTML = '';

    // Adiciona os itens ordenados de volta à div
    itensAnime.forEach(item => div.appendChild(item));
});
