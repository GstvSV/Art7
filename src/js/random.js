const botoes = document.querySelectorAll(".filtro");
const resultado = document.querySelector(".resultado");
const resultadoTitle = document.querySelector(".resultado-title");
const resultadoImage = document.querySelector(".resultado-image");
let escolhido;
let lista;

const listasAnimes = {
    all: [],
    action: [],
    fantasy: [],
    comedy: [],
    drama: [],
    ecchi: [],
    terror: [],
    suspense: [],
    adventure: [],
    romance: []
};

const elementosItens = document.querySelectorAll(".itens");

elementosItens.forEach((item, i) => {
    const elementosItem = item.querySelectorAll(".item");

    elementosItem.forEach((eitem, ind) => {
        const imageItem = eitem.querySelector("img");
        const imageSrc = imageItem.src;
        let nomeArquivo = imageSrc.replace(/\.jpg$/, ''); // Remove a extensão .jpg
        nomeArquivo = nomeArquivo.substring(nomeArquivo.lastIndexOf('/') + 1);
        console.log(nomeArquivo);
        if (item.classList.contains('action')) {
            listasAnimes.action.push(nomeArquivo);
        } else if (item.classList.contains('fantasy')) {
            listasAnimes.fantasy.push(nomeArquivo);
        } else if (item.classList.contains('comedy')) {
            listasAnimes.comedy.push(nomeArquivo);
        } else if (item.classList.contains('drama')) {
            listasAnimes.drama.push(nomeArquivo);
        } else if (item.classList.contains('ecchi')) {
            listasAnimes.ecchi.push(nomeArquivo);
        } else if (item.classList.contains('terror')) {
            listasAnimes.terror.push(nomeArquivo);
        } else if (item.classList.contains('suspense')) {
            listasAnimes.suspense.push(nomeArquivo);
        } else if (item.classList.contains('adventure')) {
            listasAnimes.adventure.push(nomeArquivo);
        } else if (item.classList.contains('romance')) {
            listasAnimes.romance.push(nomeArquivo);
        }

        listasAnimes.all.push(nomeArquivo);
    });
});

botoes.forEach((botao,i) => {
    botao.addEventListener("click", () => {
        resultado.style.opacity = 1;

        if(botao.classList.contains("all")){
            lista = listasAnimes.all;

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        
        }else if(botao.classList.contains("action")){
            lista = listasAnimes.action;

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        }else if(botao.classList.contains("fantasy")){
            lista = listasAnimes.fantasy;

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("comedy")){
            lista = listasAnimes.comedy;

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("drama")){
            lista = listasAnimes.drama; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
    

        }else if(botao.classList.contains("ecchi")){
            lista = listasAnimes.ecchi; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("terror")){
            lista = listasAnimes.terror; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("suspense")){
            lista = listasAnimes.suspense; 

            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })

        }else if(botao.classList.contains("romance")){
            lista = listasAnimes.romance; 
        
            escolhido = formatarNome(lista,resultado);
            
            resultadoImage.src = "./../../../assets/images/animes/" + lista[escolhido] + ".jpg"
            resultado.addEventListener("click", () => {
                window.location.href = "./../../src/html/animes/" + lista[escolhido] + ".html";
            })
        }else if(botao.classList.contains("adventure")){
            lista = listasAnimes.adventure; 
        
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