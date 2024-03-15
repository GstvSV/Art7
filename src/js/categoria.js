    const categorias = document.querySelectorAll(".categoria");
    const subContainers = document.querySelectorAll(".subcategoria-container");
    const subcategorias = document.querySelectorAll(".sub-header");
    const setas = document.querySelectorAll(".categoria-seta");
    const setas2 = document.querySelectorAll(".subcategoria-seta");
    const itens = document.querySelectorAll(".itens");

    categorias.forEach((categoria, i) => {
        let aberta = false; // Adiciona uma variável para controlar o estado de cada categoria

        categoria.addEventListener("click", () => {
            if (!aberta) {
                setas[i].style.transform = "rotate(90deg)";
                subContainers[i].style.pointerEvents = "all";
                subContainers[i].style.cursor = "pointer";
                subContainers[i].style.maxHeight = subContainers[i].scrollHeight + 100 +"px";
                setTimeout(() => {
                    subContainers[i].style.opacity = 1;
                }, 500);
                aberta = true; // Atualiza o estado da categoria para aberta

            } else {
                setas[i].style.transform = "rotate(0deg)";
                subContainers[i].style.pointerEvents = "none";
                subContainers[i].style.cursor = "default";
                subContainers[i].style.maxHeight = 0;
                subContainers[i].style.opacity = 0;
                aberta = false; // Atualiza o estado da categoria para fechada
            }
        });
    });

    subcategorias.forEach((subcategoria, ind) => {
        let aberta2 = false;
        
        subcategoria.addEventListener("click", () =>{
            console.log(ind);
            if(!aberta2){
                setas2[ind].style.transform = "rotate(90deg)";
                itens[ind].style.pointerEvents = "all";
                itens[ind].style.cursor = "pointer";
                itens[ind].style.maxHeight = subContainers[ind].scrollHeight + "px";
                setTimeout(() => {
                    itens[ind].style.opacity = 1;
                }, 500);
                aberta2 = true;

            } else {
                setas2[ind].style.transform = "rotate(0deg)";
                itens[ind].style.pointerEvents = "none";
                itens[ind].style.cursor = "default";
                itens[ind].style.maxHeight = 0;
                itens[ind].style.opacity = 0;
                aberta2 = false;
            }
        })
    }); 
