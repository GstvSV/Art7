const categorias = document.querySelectorAll(".title");
const itens = document.querySelectorAll(".itens");
const setas = document.querySelectorAll(".seta");

categorias.forEach((categoria, i) => {
    let aberto = true;
    
    categoria.addEventListener("click", () => {
        if(aberto){
            setas[i].style.transform = "rotate(-90deg)";
            itens[i].style.opacity = 0;
            itens[i].style.display = "none"
            aberto = false;
        }else{
            setas[i].style.transform = "rotate(0)";
            itens[i].style.opacity = 1;
            itens[i].style.display = "flex"
            aberto = true;
            
        }
    })
})