const elementos = document.querySelectorAll(".categoria");
let aux;
let cont = 0;

const setonas = document.querySelectorAll(".setonas");
const setinhasEsq = document.querySelectorAll(".setinha-esq");
const setinhasDir = document.querySelectorAll(".setinha-dir");

elementos[0].style.order = 1;
elementos[1].style.order = 2;
elementos[2].style.order = 3;

setonas.forEach((setona, i) => {
    setona.addEventListener("mouseenter", () => {
        if(setona.classList.contains("seta-esquerda")){
            setinhasEsq[0].style.transform  = "rotate(15deg)";
            setinhasEsq[1].style.transform  = "rotate(-15deg)";
        }
        if(setona.classList.contains("seta-direita")){
            setinhasDir[0].style.transform  = "rotate(-15deg)";
            setinhasDir[1].style.transform  = "rotate(15deg)";
        }
    })

    setona.addEventListener("mouseleave", () => {
        if(setona.classList.contains("seta-esquerda")){
            setinhasEsq[0].style.transform  = "rotate(0deg)";
            setinhasEsq[1].style.transform  = "rotate(0deg)";
        }
        if(setona.classList.contains("seta-direita")){
            setinhasDir[0].style.transform  = "rotate(0deg)";
            setinhasDir[1].style.transform  = "rotate(0deg)";
        }
    })

    setona.addEventListener("click", () => {
        setona.style.pointerEvents = "none";
        setTimeout(() => {
            setona.style.pointerEvents = "all";
        }, 1500);
        elementos.forEach((elemento, i) => {
            if (elemento.style.order == 2) {
                elemento.classList.remove("meio");
            }
        });
    
        if (setona.classList.contains("seta-esquerda")) {
            elementos.forEach((elemento, i) => {
                if (elemento.style.order == 2) {
                    if(window.innerWidth < 800){
                        elemento.style.transform = "translateY(-400%)";
                    }else{
                        elemento.style.transform = "translateX(-200%)";
                    }
                    elemento.classList.add("lados");
                    setTimeout(() => {
                        elemento.style.transform = "translateX(0)";
                        // Troca de ordem 1 segundo depois do translate
                        setTimeout(() => {
                            aux = elementos[1].style.order;
                            elementos[1].style.order = elementos[0].style.order;
                            elementos[0].style.order = elementos[2].style.order;
                            elementos[2].style.order = aux;
    
                            elementos.forEach((el, i) => {
                                if (el.style.order == 2) {
                                    setTimeout(() => {
                                        el.classList.remove("lados");
                                        el.classList.add("meio");
                                    }, 250); // Reduzi o tempo aqui para 500ms para compensar o atraso
                                }
                            });
                        }, 500);
                    }, 500);
                }
            });
        } else if (setona.classList.contains("seta-direita")) {
            elementos.forEach((elemento, i) => {
                if (elemento.style.order == 2) {
                    if(window.innerWidth < 800){
                        elemento.style.transform = "translateY(400%)";
                    }else{
                        elemento.style.transform = "translateX(200%)";
                    }
                    elemento.classList.add("lados");
                    setTimeout(() => {
                        elemento.style.transform = "translateX(0)";
                        // Troca de ordem 1 segundo depois do translate
                        setTimeout(() => {
                            aux = elementos[1].style.order;
                            elementos[1].style.order = elementos[2].style.order;
                            elementos[2].style.order = elementos[0].style.order;
                            elementos[0].style.order = aux;
    
                            elementos.forEach((el, i) => {
                                if (el.style.order == 2) {
                                    setTimeout(() => {
                                        el.classList.remove("lados");
                                        el.classList.add("meio");
                                    }, 250); // Reduzi o tempo aqui para 500ms para compensar o atraso
                                }
                            });
                        }, 500);
                    }, 500);
                }
            });
        }
    });
    
})

