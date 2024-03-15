const botao = document.querySelector(".escolher-button");
const resultado = document.querySelector(".resultado");
const lista = ["one-piece", "ansatsu-kyoshitsu"];

botao.addEventListener("click", () => {
    let escolhido = Math.floor(Math.random() * lista.length);
    let partes = lista[escolhido].split("-"); 
    partes = partes.map(part => part.charAt(0).toUpperCase() + part.slice(1));
    let nomeFormatado = partes.join(" ");
    resultado.style.cursor = "pointer";
    resultado.innerHTML = nomeFormatado;
    resultado.addEventListener("click", () => {
        window.location.href = "../../src/html/animes/" + lista[escolhido] + ".html";
    })

});
