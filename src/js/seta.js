const categorias = document.querySelectorAll(".title");
const setaitens = document.querySelectorAll(".itens");
const setas = document.querySelectorAll(".seta");

categorias.forEach((categoria, i) => {
    let aberto = true;
    
    categoria.addEventListener("click", () => {
        if(aberto){
            setas[i].style.transform = "rotate(-90deg)";
            setaitens[i].style.opacity = 0;
            setaitens[i].style.display = "none"
            aberto = false;
        }else{
            setas[i].style.transform = "rotate(0)";
            setaitens[i].style.opacity = 1;
            setaitens[i].style.display = "flex"
            aberto = true;
            
        }
    })
})