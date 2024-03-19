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
            lista = [""];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        
        }else if(botao.classList.contains("action")){
            lista = [" "];
            lista = [""];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        }else if(botao.classList.contains("fantasy")){
            lista = [" "];
            lista = [""];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("comedy")){
            lista = [" "];
            lista = [""];

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("drama")){
            lista = [" "];
            lista = [""]; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
    

        }else if(botao.classList.contains("ecchi")){
            lista = [" "];
            lista = [""]; 

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